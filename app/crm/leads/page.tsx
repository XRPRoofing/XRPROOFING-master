import { Filter, GripVertical, MoreHorizontal, Plus, Search } from "lucide-react";
import { leadStages, leads } from "@/lib/crm-data";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Pipeline</p>
          <h1 className="mt-2 text-3xl font-black text-[#07183f]">Leads pipeline</h1>
          <p className="mt-2 text-slate-600">Drag-ready Kanban workflow for roofing leads from first contact through completion.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700"><Filter className="mr-2 inline h-4 w-4" />Filter</button>
          <button className="rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white shadow-lg shadow-orange-200"><Plus className="mr-2 inline h-4 w-4" />Create lead</button>
        </div>
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none" placeholder="Search by customer, city, roof type, source..." />
      </div>

      <div className="grid gap-4 overflow-x-auto pb-4 xl:grid-cols-7">
        {leadStages.map((stage) => {
          const stageLeads = leads.filter((lead) => lead.stage === stage.id);
          return (
            <section key={stage.id} className="min-w-72 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-black text-[#07183f]">{stage.label}</h2>
                  <p className="text-sm text-slate-500">{stageLeads.length} opportunities</p>
                </div>
                <button className="rounded-xl p-2 text-slate-400 hover:bg-white"><MoreHorizontal className="h-5 w-5" /></button>
              </div>
              <div className="space-y-3">
                {stageLeads.map((lead) => (
                  <article key={lead.id} draggable className="cursor-grab rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black text-slate-900">{lead.name}</p>
                        <p className="mt-1 text-sm text-slate-500">{lead.city} • {lead.roofType}</p>
                      </div>
                      <GripVertical className="h-5 w-5 text-slate-300" />
                    </div>
                    <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                      <p>{lead.lastActivity}</p>
                      <p className="mt-2 font-semibold text-[#0f2156]">Assigned: {lead.assignedTo}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">{lead.source}</span>
                      <span className="font-black text-[#07183f]">${lead.value.toLocaleString()}</span>
                    </div>
                  </article>
                ))}
                {stageLeads.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">Drop leads here</div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
