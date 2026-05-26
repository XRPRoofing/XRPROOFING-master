import { Activity, CalendarClock, CircleDollarSign, ClipboardCheck, Plus, TrendingUp, UsersRound } from "lucide-react";
import { customers, leads, tasks } from "@/lib/crm-data";

const revenue = leads.reduce((total, lead) => total + lead.value, 0);
const openEstimates = leads.filter((lead) => lead.stage === "estimate_sent" || lead.stage === "insurance_review").length;

export default function CrmDashboardPage() {
  const cards = [
    { label: "Total Leads", value: leads.length.toString(), icon: UsersRound, detail: "+18% this month" },
    { label: "Pipeline Revenue", value: revenue.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }), icon: CircleDollarSign, detail: "Active opportunities" },
    { label: "Open Estimates", value: openEstimates.toString(), icon: ClipboardCheck, detail: "Needs follow-up" },
    { label: "Upcoming Appointments", value: "9", icon: CalendarClock, detail: "Next 7 days" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#07183f] via-[#0f2156] to-[#1d4ed8] p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">Operations Command Center</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Good morning, XRP Roofing team.</h1>
            <p className="mt-4 max-w-2xl text-blue-100">Track leads, roof inspections, estimates, tasks, uploads, and job progress from a single premium CRM workspace.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-600"><Plus className="mr-2 inline h-4 w-4" />New lead</button>
            <button className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white ring-1 ring-white/15 transition hover:bg-white/15">Schedule inspection</button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-600"><Icon className="h-6 w-6" /></div>
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-black text-[#07183f]">{card.value}</p>
              <p className="mt-1 text-sm text-slate-500">{card.detail}</p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-[#07183f]">Revenue overview</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">Chart placeholder</span>
          </div>
          <div className="mt-8 flex h-64 items-end gap-3 rounded-3xl bg-slate-50 p-5">
            {[35, 62, 48, 76, 58, 88, 71, 94, 67, 82, 91, 100].map((height, index) => (
              <div key={index} className="flex flex-1 items-end">
                <div className="w-full rounded-t-2xl bg-gradient-to-t from-[#0f2156] to-orange-400" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#07183f]">Tasks reminders</h2>
          <div className="mt-5 space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{task.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{task.relatedTo} • {task.assignedTo}</p>
                  </div>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase text-orange-700">{task.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-black text-[#07183f]">Recent activity</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {customers.map((customer) => (
            <div key={customer.id} className="rounded-2xl bg-slate-50 p-4">
              <Activity className="h-5 w-5 text-orange-500" />
              <p className="mt-3 font-bold">{customer.name}</p>
              <p className="mt-1 text-sm text-slate-500">{customer.status} • {customer.roofDetails}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
