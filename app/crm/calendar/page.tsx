"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ExternalLink, Loader2, Plus, RefreshCw } from "lucide-react";

type GoogleCalendarEvent = {
  id: string;
  summary?: string;
  description?: string;
  htmlLink?: string;
  start?: {
    date?: string;
    dateTime?: string;
  };
  end?: {
    date?: string;
    dateTime?: string;
  };
};

function formatEventDate(event: GoogleCalendarEvent) {
  const dateValue = event.start?.dateTime || event.start?.date;
  if (!dateValue) return "Date pending";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: event.start?.dateTime ? "numeric" : undefined,
    minute: event.start?.dateTime ? "2-digit" : undefined,
  }).format(new Date(dateValue));
}

function getGoogleCalendarStatusMessage(status: string | null) {
  if (status === "connected") return "Google Calendar connected successfully.";
  if (status === "missing_env") return "Google Calendar server settings are missing. Check GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REDIRECT_URI in Vercel, then redeploy.";
  if (status === "token_error") return "Google rejected the connection. Make sure the redirect URI in Google Cloud exactly matches your Vercel GOOGLE_REDIRECT_URI.";
  if (status === "missing_code") return "Google did not return an authorization code. Please try connecting again.";
  if (status === "error") return "Google Calendar authorization was cancelled or denied.";
  return "";
}

export default function CalendarPage() {
  const [events, setEvents] = useState<GoogleCalendarEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
  });

  const days = useMemo(() => Array.from({ length: 35 }, (_, index) => index + 1), []);

  async function loadEvents() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/google-calendar/events");
      const data = await response.json() as { connected?: boolean; events?: GoogleCalendarEvent[]; error?: string };

      setConnected(Boolean(data.connected));
      setEvents(data.events || []);
      setError(data.error || "");
    } catch {
      setError("Unable to check Google Calendar connection.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("google_calendar");
    setStatusMessage(getGoogleCalendarStatusMessage(status));
    void loadEvents();
  }, []);

  async function handleCreateEvent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setStatusMessage("");

    try {
      const response = await fetch("/api/google-calendar/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json() as { error?: string };

      if (!response.ok) {
        setError(data.error || "Unable to create appointment.");
        return;
      }

      setStatusMessage("Appointment created in Google Calendar.");
      setForm({ title: "", date: "", startTime: "", endTime: "", location: "", description: "" });
      await loadEvents();
    } catch {
      setError("Unable to create appointment.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Scheduling</p>
            <h1 className="mt-2 text-3xl font-black text-[#07183f]">Calendar & Appointments</h1>
            <p className="mt-3 text-slate-600">Connect Google Calendar to view upcoming inspections, estimates, and team appointments.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#new-appointment" className="rounded-2xl bg-[#07183f] px-4 py-3 font-bold text-white">
              <Plus className="mr-2 inline h-4 w-4" />New appointment
            </a>
            <button onClick={loadEvents} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700">
              <RefreshCw className="mr-2 inline h-4 w-4" />Refresh
            </button>
            <a href="/api/google-calendar/connect" className="rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white shadow-lg shadow-orange-200">
              <CalendarDays className="mr-2 inline h-4 w-4" />{connected ? "Reconnect Google" : "Connect Google"}
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4">
          {loading && (
            <p className="flex items-center font-semibold text-slate-600"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Checking Google Calendar...</p>
          )}
          {!loading && connected && (
            <p className="font-bold text-emerald-700">Google Calendar connected. Showing your next {events.length} upcoming events.</p>
          )}
          {!loading && !connected && (
            <p className="font-bold text-slate-700">Google Calendar is not connected yet. Click Connect Google to authorize access.</p>
          )}
          {error && <p className="mt-2 font-semibold text-red-600">{error}</p>}
          {statusMessage && <p className="mt-2 font-semibold text-orange-700">{statusMessage}</p>}
        </div>

        <div className="mt-8 grid grid-cols-7 gap-2 text-center text-sm">
          {days.map((day) => (
            <div key={day} className="min-h-24 rounded-2xl bg-slate-50 p-3 text-slate-500">{day}</div>
          ))}
        </div>
      </div>

      <form id="new-appointment" onSubmit={handleCreateEvent} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">New schedule</p>
            <h2 className="mt-2 text-2xl font-black text-[#07183f]">Create appointment</h2>
            <p className="mt-2 text-slate-600">Add inspections, estimates, customer meetings, crew schedules, or follow-ups directly to Google Calendar.</p>
          </div>
          {!connected && <p className="rounded-2xl bg-orange-50 px-4 py-3 font-bold text-orange-700">Connect Google first</p>}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Appointment title" />
          <input required type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
          <input required type="time" value={form.startTime} onChange={(event) => setForm({ ...form, startTime: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
          <input required type="time" value={form.endTime} onChange={(event) => setForm({ ...form, endTime: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
          <input value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Location / job address" />
          <input value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Notes" />
        </div>

        <button disabled={!connected || saving} className="mt-4 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white shadow-lg shadow-orange-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none">
          {saving ? "Saving..." : "Save to Google Calendar"}
        </button>
      </form>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#07183f]">Upcoming Google Calendar events</h2>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-black text-[#07183f]">{event.summary || "Untitled event"}</p>
                  <p className="mt-1 text-sm font-semibold text-orange-600">{formatEventDate(event)}</p>
                </div>
                {event.htmlLink && (
                  <a href={event.htmlLink} target="_blank" rel="noreferrer" className="rounded-xl bg-white p-2 text-slate-500 hover:text-orange-600">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {event.description && <p className="mt-3 line-clamp-2 text-sm text-slate-600">{event.description}</p>}
            </article>
          ))}
          {!loading && connected && events.length === 0 && (
            <p className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-600">No upcoming events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
