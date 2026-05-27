import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function refreshAccessToken(refreshToken: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) return null;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!tokenResponse.ok) return null;

  return await tokenResponse.json() as { access_token?: string; expires_in?: number };
}

export async function GET() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("google_calendar_access_token")?.value;
  const refreshToken = cookieStore.get("google_calendar_refresh_token")?.value;

  if (!accessToken && refreshToken) {
    const refreshedToken = await refreshAccessToken(refreshToken);
    accessToken = refreshedToken?.access_token;
  }

  if (!accessToken) {
    return NextResponse.json({ connected: false, events: [] });
  }

  const calendarUrl = new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");
  calendarUrl.searchParams.set("singleEvents", "true");
  calendarUrl.searchParams.set("orderBy", "startTime");
  calendarUrl.searchParams.set("timeMin", new Date().toISOString());
  calendarUrl.searchParams.set("maxResults", "20");

  const eventsResponse = await fetch(calendarUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!eventsResponse.ok) {
    return NextResponse.json({ connected: false, events: [], error: "Unable to load Google Calendar events." }, { status: 401 });
  }

  const eventsData = await eventsResponse.json() as { items?: unknown[] };

  return NextResponse.json({ connected: true, events: eventsData.items || [] });
}
