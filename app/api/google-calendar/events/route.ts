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

function getGuestEmails(guestEmails: string | undefined) {
  return (guestEmails || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function buildCalendarEvent({ title, date, startTime, endTime, name, address, jobKind, notes, guestEmails }: {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  name: string;
  address: string;
  jobKind: string;
  notes?: string;
  guestEmails?: string;
}) {
  const attendees = getGuestEmails(guestEmails).map((email) => ({ email }));
  const description = [
    `Name: ${name}`,
    `Address: ${address}`,
    `Kind of Job: ${jobKind}`,
    `Notes: ${notes || "None"}`,
  ].join("\n");

  return {
    summary: title,
    location: address,
    description,
    attendees: attendees.length ? attendees : undefined,
    extendedProperties: {
      private: {
        crmName: name,
        crmAddress: address,
        crmJobKind: jobKind,
        crmNotes: notes || "",
      },
    },
    start: {
      dateTime: `${date}T${startTime}:00`,
      timeZone: "America/Phoenix",
    },
    end: {
      dateTime: `${date}T${endTime}:00`,
      timeZone: "America/Phoenix",
    },
  };
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

  const { title, date, startTime, endTime, name, address, jobKind, notes, guestEmails } = await request.json() as {
    title?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    name?: string;
    address?: string;
    jobKind?: string;
    notes?: string;
    guestEmails?: string;
  };

  if (!title || !date || !startTime || !endTime || !name || !address || !jobKind) {
    return NextResponse.json({ error: "Title, name, address, job type, date, start time, and end time are required." }, { status: 400 });
  }

  const calendarUrl = new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");
  calendarUrl.searchParams.set("sendUpdates", "all");

  const eventResponse = await fetch(calendarUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildCalendarEvent({ title, date, startTime, endTime, name, address, jobKind, notes, guestEmails })),
  });

  if (!eventResponse.ok) {
    return NextResponse.json({ error: "Unable to create Google Calendar event." }, { status: 400 });
  }

  const event = await eventResponse.json();

  return NextResponse.json({ event });
}

export async function PUT(request: Request) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json({ error: "Google Calendar is not connected." }, { status: 401 });
  }

  const { id, title, date, startTime, endTime, name, address, jobKind, notes, guestEmails } = await request.json() as {
    id?: string;
    title?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    name?: string;
    address?: string;
    jobKind?: string;
    notes?: string;
    guestEmails?: string;
  };

  if (!id || !title || !date || !startTime || !endTime || !name || !address || !jobKind) {
    return NextResponse.json({ error: "Event ID, title, name, address, job type, date, start time, and end time are required." }, { status: 400 });
  }

  const calendarUrl = new URL(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`);
  calendarUrl.searchParams.set("sendUpdates", "all");

  const eventResponse = await fetch(calendarUrl, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildCalendarEvent({ title, date, startTime, endTime, name, address, jobKind, notes, guestEmails })),
  });

  if (!eventResponse.ok) {
    return NextResponse.json({ error: "Unable to update Google Calendar event." }, { status: 400 });
  }

  const event = await eventResponse.json();

  return NextResponse.json({ event });
}
