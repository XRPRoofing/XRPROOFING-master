import { appointmentTypes, conversationFilters, conversationsData, pipelineStages, quickTemplates } from "@/lib/crm-conversations";
import type { ConversationMessage, ConversationRecord } from "@/types/conversations";
import { CheckCheck, Clock, FileImage, Headphones, Mail, Mic, Pause, Phone, PhoneOff, Plus, Search, Send, Smile, Upload, UserRound } from "lucide-react";

function ChannelBadge({ channel }: { channel: string }) {
  const label = channel.toUpperCase();
  const Icon = channel === "sms" ? Headphones : channel === "email" ? Mail : Phone;
  return <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700"><Icon className="h-3 w-3" />{label}</span>;
}

function ConversationInbox({ conversations, active }: { conversations: ConversationRecord[]; active: ConversationRecord }) {
  return (
    <aside className="flex min-h-0 flex-col rounded-[1.75rem] border border-slate-200 bg-white shadow-sm xl:sticky xl:top-24 xl:h-[calc(100vh-8rem)]">
      <div className="border-b border-slate-100 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Inbox</p>
            <h2 className="text-xl font-black text-[#07183f]">Conversations</h2>
          </div>
          <button className="rounded-2xl bg-orange-500 p-3 text-white shadow-lg shadow-orange-100"><Plus className="h-4 w-4" /></button>
        </div>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-semibold outline-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50" placeholder="Search contacts..." />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {conversationFilters.map((filter) => <button key={filter} className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-600 hover:bg-blue-50 hover:text-blue-700">{filter}</button>)}
        </div>
      </div>
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
        {conversations.map((conversation) => (
          <article key={conversation.id} className={`rounded-3xl border p-4 transition hover:border-blue-100 hover:shadow-lg ${conversation.id === active.id ? "border-blue-200 bg-blue-50/70" : "border-slate-100 bg-white"}`}>
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07183f] text-white"><UserRound className="h-5 w-5" /></div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-black text-slate-950">{conversation.contact.name}</p>
                  <span className="text-[11px] font-bold text-slate-500">{conversation.lastActivityAt}</span>
                </div>
                <p className="mt-1 truncate text-xs font-bold text-slate-500">{conversation.contact.assignedRep} · {conversation.contact.jobStatus}</p>
                <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-slate-600">{conversation.lastMessage}</p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex gap-1.5">{conversation.channels.map((channel) => <ChannelBadge key={channel} channel={channel} />)}</div>
                  {conversation.unreadCount > 0 && <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[11px] font-black text-white">{conversation.unreadCount}</span>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}

function MessageRow({ message }: { message: ConversationMessage }) {
  const outbound = message.direction === "outbound";
  const internal = message.direction === "internal";
  return (
    <div className={`flex ${outbound ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[82%] rounded-3xl px-4 py-3 shadow-sm ${outbound ? "bg-blue-600 text-white" : internal ? "border border-orange-100 bg-orange-50 text-orange-900" : "bg-white text-slate-800"}`}>
        <div className="mb-1 flex items-center gap-2 text-[11px] font-black opacity-80"><span>{message.author}</span><span>{message.timestamp}</span>{message.status === "delivered" && <CheckCheck className="h-3 w-3" />}</div>
        <p className="text-sm font-medium leading-6">{message.body}</p>
        {message.attachments && <div className="mt-2 flex flex-wrap gap-2">{message.attachments.map((item) => <span key={item} className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[11px] font-black text-slate-600"><FileImage className="h-3 w-3" />{item}</span>)}</div>}
      </div>
    </div>
  );
}

function DialerPanel({ contact }: { contact: ConversationRecord["contact"] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div><p className="text-xs font-black uppercase tracking-wider text-slate-500">Built-in dialer</p><p className="mt-1 text-lg font-black text-[#07183f]">{contact.phone}</p></div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700"><Clock className="h-3 w-3" />03:18</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-black text-slate-700">{"123456789*0#".split("").map((key) => <button key={key} className="rounded-2xl bg-slate-50 py-3 hover:bg-blue-50">{key}</button>)}</div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        <button className="rounded-2xl bg-slate-100 p-3 text-slate-600"><Mic className="mx-auto h-4 w-4" /></button>
        <button className="rounded-2xl bg-slate-100 p-3 text-slate-600"><Pause className="mx-auto h-4 w-4" /></button>
        <button className="rounded-2xl bg-emerald-500 p-3 text-white"><Phone className="mx-auto h-4 w-4" /></button>
        <button className="rounded-2xl bg-red-500 p-3 text-white"><PhoneOff className="mx-auto h-4 w-4" /></button>
      </div>
      <textarea className="mt-4 min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium outline-none focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50" placeholder="Type live call notes... auto-save ready" />
    </div>
  );
}

function LeadIntakePanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-black text-[#07183f]">Fast lead intake</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {["Customer name", "Phone", "Address", "Email", "Roof type", "Insurance status"].map((field) => <input key={field} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold outline-none focus:border-blue-300 focus:bg-white" placeholder={field} />)}
      </div>
    </div>
  );
}

function SchedulerPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-black text-[#07183f]">Schedule appointment</p>
      <div className="mt-3 grid gap-2">
        <input type="date" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold outline-none" />
        <input type="time" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold outline-none" />
        <select className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold outline-none"><option>Johnny Roofer</option><option>Office Coordinator</option></select>
        <select className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold outline-none">{appointmentTypes.map((type) => <option key={type}>{type}</option>)}</select>
        <button className="rounded-2xl bg-orange-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-orange-100">Save appointment</button>
      </div>
    </div>
  );
}

function ContactPanel({ conversation }: { conversation: ConversationRecord }) {
  const contact = conversation.contact;
  return (
    <aside className="space-y-4 xl:sticky xl:top-24 xl:h-[calc(100vh-8rem)] xl:overflow-y-auto">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07183f] text-white"><UserRound className="h-6 w-6" /></div><div><p className="text-lg font-black text-slate-950">{contact.name}</p><p className="text-sm font-bold text-slate-500">{contact.phone}</p></div></div>
        <div className="mt-5 grid gap-3 text-sm">
          {[["Email", contact.email], ["Address", contact.address], ["Roof Type", contact.roofType], ["Assigned", contact.assignedRep], ["Insurance", contact.insuranceStatus], ["Lead Source", contact.leadSource]].map(([label, value]) => <div key={label} className="rounded-2xl bg-slate-50 p-3"><p className="text-[11px] font-black uppercase text-slate-400">{label}</p><p className="mt-1 font-bold text-slate-800">{value}</p></div>)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{contact.tags.map((tag) => <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{tag}</span>)}</div>
      </div>
      <DialerPanel contact={contact} />
      <SchedulerPanel />
    </aside>
  );
}

export default function ConversationBoard() {
  const active = conversationsData[0];
  return (
    <div className="-mx-4 -my-6 min-h-[calc(100vh-5rem)] bg-slate-100 px-4 py-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mb-5 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/80 bg-white p-5 shadow-xl shadow-slate-200/70 lg:flex-row lg:items-end">
        <div><p className="text-xs font-black uppercase tracking-[0.24em] text-orange-600">Premium communication board</p><h1 className="mt-2 text-3xl font-black tracking-tight text-[#07183f]">Conversations</h1><p className="mt-2 max-w-3xl text-sm font-semibold text-slate-600">Answer calls, type live notes, collect customer info, send SMS, schedule inspections, and update roofing lead status in one fast workspace.</p></div>
        <div className="flex flex-wrap gap-2">{pipelineStages.slice(0, 4).map((stage) => <button key={stage} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700">{stage}</button>)}</div>
      </div>
      <div className="grid gap-5 xl:grid-cols-[340px_minmax(520px,1fr)_360px]">
        <ConversationInbox conversations={conversationsData} active={active} />
        <main className="flex min-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm">
          <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-slate-200 bg-white/95 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div><p className="text-lg font-black text-[#07183f]">{active.contact.name}</p><p className="text-sm font-semibold text-slate-500">{active.contact.address}</p></div>
            <div className="flex flex-wrap gap-2"><button className="rounded-2xl bg-blue-600 px-4 py-2 text-xs font-black text-white">Move stage</button><button className="rounded-2xl bg-orange-500 px-4 py-2 text-xs font-black text-white">Schedule inspection</button><button className="rounded-2xl bg-white px-4 py-2 text-xs font-black text-slate-700 ring-1 ring-slate-200">Create estimate</button></div>
          </div>
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5">{active.messages.map((message) => <MessageRow key={message.id} message={message} />)}<LeadIntakePanel /></div>
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto">{quickTemplates.map((template) => <button key={template} className="shrink-0 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">{template}</button>)}</div>
            <div className="flex items-end gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-2"><button className="rounded-2xl p-3 text-slate-500 hover:bg-white"><Smile className="h-5 w-5" /></button><button className="rounded-2xl p-3 text-slate-500 hover:bg-white"><Upload className="h-5 w-5" /></button><textarea className="min-h-12 flex-1 resize-none bg-transparent p-2 text-sm font-semibold outline-none" placeholder="Send SMS, add notes, or follow up..." /><button className="rounded-2xl bg-orange-500 p-3 text-white"><Send className="h-5 w-5" /></button></div>
          </div>
        </main>
        <ContactPanel conversation={active} />
      </div>
    </div>
  );
}
