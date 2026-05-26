export default function EstimatesPage() {
  return <ModulePlaceholder title="Estimates" description="Roofing estimate builder with materials, labor, tax calculations, proposal preview, PDF export placeholder, and e-signature placeholder." />;
}

function ModulePlaceholder({ title, description }: { title: string; description: string }) {
  return <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">CRM Module</p><h1 className="mt-2 text-3xl font-black text-[#07183f]">{title}</h1><p className="mt-3 max-w-3xl text-slate-600">{description}</p><div className="mt-8 grid gap-4 md:grid-cols-3"><div className="rounded-3xl bg-slate-50 p-6">Line items</div><div className="rounded-3xl bg-slate-50 p-6">Pricing totals</div><div className="rounded-3xl bg-slate-50 p-6">Proposal preview</div></div></div>;
}
