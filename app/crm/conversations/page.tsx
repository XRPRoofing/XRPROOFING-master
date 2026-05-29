import { CalendarDays, Mail, MessageSquareText, Phone, Search, Send, Star, UserRound } from "lucide-react";

const conversations = [
  { name: "Maria Hernandez", address: "2148 E Camelback Rd", channel: "SMS", status: "Needs reply", time: "12 min ago", message: "Can we schedule the roof inspection for tomorrow morning?", priority: true },
  { name: "Desert Plaza HOA", address: "8800 N Scottsdale Rd", channel: "Email", status: "Waiting", time: "38 min ago", message: "Board requested updated TPO warranty options before approval.", priority: false },
  { name: "Ryan Mitchell", address: "944 W Ocotillo Rd", channel: "Call", status: "Follow up", time: "1 hr ago", message: "Asked for financing options and next available install window.", priority: true },
  { name: "Sage Medical Center", address: "1201 W Thomas Rd", channel: "Email", status: "Insurance", time: "Today", message: "Carrier documentation is ready for review.", priority: false },
];

const teamQueue = [
  { label: "Unread", value: "14", tone: "text-orange-600 bg-orange-50" },
  { label: "Follow ups", value: "9", tone: "text-blue-700 bg-blue-50" },
  { label: "Scheduled", value: "6", tone: "text-emerald-700 bg-emerald-50" },
];

function ChannelIcon({ channel }: { channel: string }) {
  if (channel === "SMS") return <MessageSquareText className="h-4 w-4" />;
  if (channel === "Email") return <Mail className="h-4 w-4" />;
  return <Phone className="h-4 w-4" />;
}

export default function ConversationsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-200/70">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-600">Customer communications</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[#07183f]">Conversation board</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-600">Track roofing customer calls, texts, emails, follow-ups, scheduling requests, and insurance conversations in one team queue.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">
            <Send className="mr-2 h-4 w-4" />
            New message
          </button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50" placeholder="Search customer, address, phone, email, or conversation..." />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm">All channels</button>
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm">Open only</button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-black text-[#07183f]">Team queue</p>
            <div className="mt-4 grid gap-3">
              {teamQueue.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm font-bold text-slate-600">{item.label}</span>
                  <span className={`rounded-full px-3 py-1 text-sm font-black ${item.tone}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm font-black text-blue-900">Today&apos;s focus</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-blue-800">Reply to urgent inspection requests, confirm adjuster appointments, and keep active install customers updated before end of day.</p>
          </div>
        </aside>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4">
            <div>
              <h2 className="text-lg font-black text-[#07183f]">Open conversations</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">Roofing customer communication workflow</p>
            </div>
            <CalendarDays className="h-5 w-5 text-slate-400" />
          </div>

          <div className="mt-4 grid gap-3">
            {conversations.map((conversation) => (
              <article key={conversation.name} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07183f] text-white">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black text-slate-950">{conversation.name}</h3>
                        {conversation.priority && <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-black text-orange-700"><Star className="h-3 w-3 fill-orange-500" />Priority</span>}
                      </div>
                      <p className="mt-1 text-sm font-semibold text-slate-500">{conversation.address}</p>
                      <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-700">{conversation.message}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
                      <ChannelIcon channel={conversation.channel} />
                      {conversation.channel}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">{conversation.status}</span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-500 ring-1 ring-slate-200">{conversation.time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
