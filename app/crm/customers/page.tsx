import { Mail, MapPin, Phone, Plus, Search, ShieldCheck, UploadCloud } from "lucide-react";
import { customers } from "@/lib/crm-data";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Customer Records</p>
          <h1 className="mt-2 text-3xl font-black text-[#07183f]">Customers</h1>
          <p className="mt-2 text-slate-600">Central profiles for contact details, property data, roof details, insurance, notes, files, and timelines.</p>
        </div>
        <button className="w-fit rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white shadow-lg shadow-orange-200"><Plus className="mr-2 inline h-4 w-4" />Add customer</button>
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none" placeholder="Search customers, addresses, carriers..." />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {customers.map((customer) => (
          <article key={customer.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="bg-gradient-to-br from-[#07183f] to-[#173c8f] p-4 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-orange-300">{customer.id}</p>
                  <h2 className="mt-1 text-xl font-black">{customer.name}</h2>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold ring-1 ring-white/15">{customer.status}</span>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-orange-500" />{customer.email}</p>
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-orange-500" />{customer.phone}</p>
                <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 text-orange-500" />{customer.propertyAddress}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Roof details</p>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">{customer.roofDetails}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-orange-50 p-3">
                  <ShieldCheck className="h-4 w-4 text-orange-600" />
                  <p className="mt-1.5 text-slate-500">Insurance</p>
                  <p className="font-black text-[#07183f]">{customer.insuranceCarrier}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <UploadCloud className="h-4 w-4 text-blue-700" />
                  <p className="mt-1.5 text-slate-500">Files</p>
                  <p className="font-black text-[#07183f]">Photos + docs</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs text-slate-500">Lifetime value</span>
                <span className="text-lg font-black text-[#07183f]">${customer.lifetimeValue.toLocaleString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
