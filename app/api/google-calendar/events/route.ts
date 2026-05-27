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

async function getAccessToken() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("google_calendar_access_token")?.value;
  const refreshToken = cookieStore.get("google_calendar_refresh_token")?.value;

  if (!accessToken && refreshToken) {
    const refreshedToken = await refreshAccessToken(refreshToken);
    accessToken = refreshedToken?.access_token;
  }

  return accessToken;
}

export async function GET() {
  const accessToken = await getAccessToken();

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

export async function POST(request: Request) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json({ error: "Google Calendar is not connected." }, { status: 401 });
  }

  const { title, date, startTime, endTime, location, description } = await request.json() as {
    title?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    location?: string;
    description?: string;
  };

  if (!title || !date || !startTime || !endTime) {
    return NextResponse.json({ error: "Title, date, start time, and end time are required." }, { status: 400 });
  }

  const eventResponse = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      summary: title,
      location,
      description,
      start: {
        dateTime: `${date}T${startTime}:00`,
        timeZone: "America/Phoenix",
      },
      end: {
        dateTime: `${date}T${endTime}:00`,
        timeZone: "America/Phoenix",
      },
    }),
  });

  if (!eventResponse.ok) {
    return NextResponse.json({ error: "Unable to create Google Calendar event." }, { status: 400 });
  }

  const event = await eventResponse.json();

  return NextResponse.json({ event });
}
