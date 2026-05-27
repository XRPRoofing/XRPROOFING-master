"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Filter, GripVertical, MoreHorizontal, Plus, Search, X } from "lucide-react";
import { leadStages, leads } from "@/lib/crm-data";
import type { Lead, LeadStage } from "@/types/crm";

const jobAges = ["Now", "+ 1 day", "+ 5 days", "+ 12 days", "+ 47 days", "+ 94 days"];
const updateAges = ["Created 6 hours ago", "Updated 7 hours ago", "Updated a day ago", "Updated 4 days ago", "Updated 20 days ago", "Updated 2 months ago"];
declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: new (
            input: HTMLInputElement,
            options: {
              bounds?: { north: number; south: number; east: number; west: number };
              componentRestrictions?: { country: string };
              fields?: string[];
              strictBounds?: boolean;
              types?: string[];
            }
          ) => {
            addListener: (eventName: string, callback: () => void) => void;
            getPlace: () => { formatted_address?: string; address_components?: { long_name: string; types: string[] }[] };
          };
        };
      };
    };
  }
}

const arizonaBounds = {
  north: 37.0043,
  south: 31.3322,
  east: -109.0452,
  west: -114.8184,
};
const jobsStorageKey = "xrp-crm-jobs-board";

function getCityFromAddress(address: string) {
  const parts = address.split(",").map((part) => part.trim()).filter(Boolean);
  return parts.length >= 2 ? parts[parts.length - 2] : "Phoenix";
}

function saveJobs(nextJobs: Lead[]) {
  window.localStorage.setItem(jobsStorageKey, JSON.stringify(nextJobs));
}

export default function LeadsPage() {
  const [jobs, setJobs] = useState<Lead[]>(() => {
    if (typeof window === "undefined") return leads;

    const savedJobs = window.localStorage.getItem(jobsStorageKey);
    if (!savedJobs) return leads;

    try {
      return JSON.parse(savedJobs) as Lead[];
    } catch {
      return leads;
    }
  });
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [draggedJobId, setDraggedJobId] = useState<string | null>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    roofType: "",
    source: "Website",
    assignedTo: "Office Coordinator",
    value: "",
    lastActivity: "New job created",
  });

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return jobs;

    return jobs.filter((job) =>
      [job.name, job.address, job.city, job.roofType, job.source, job.assignedTo, job.lastActivity]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [jobs, search]);

  useEffect(() => {
    window.localStorage.setItem(jobsStorageKey, JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    if (!showForm || !addressInputRef.current) return;

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) return;

    function initializeAutocomplete() {
      if (!addressInputRef.current || !window.google?.maps?.places?.Autocomplete) return;

      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        bounds: arizonaBounds,
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "address_components"],
        strictBounds: true,
        types: ["address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setForm((currentForm) => ({ ...currentForm, address: place.formatted_address || currentForm.address }));
        }
      });
    }

    if (window.google?.maps?.places?.Autocomplete) {
      initializeAutocomplete();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>("script[data-google-maps-places]");

    if (existingScript) {
      existingScript.addEventListener("load", initializeAutocomplete, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsPlaces = "true";
    script.addEventListener("load", initializeAutocomplete, { once: true });
    document.head.appendChild(script);
  }, [showForm]);

  function updateJobStage(jobId: string, stage: LeadStage) {
    setJobs((currentJobs) => {
      const nextJobs = currentJobs.map((job) => job.id === jobId ? { ...job, stage, lastActivity: `Moved to ${leadStages.find((item) => item.id === stage)?.label || "workflow"}` } : job);
      saveJobs(nextJobs);
      return nextJobs;
    });
  }

  function handleAddJob(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newJob: Lead = {
      id: `J-${Date.now()}`,
      name: form.name,
      email: form.email || "crm@xrproofing.com",
      phone: form.phone || "(602) 555-0000",
      address: form.address || "Address pending",
      city: getCityFromAddress(form.address),
      stage: "new_lead",
      value: Number(form.value) || 0,
      assignedTo: form.assignedTo,
      roofType: form.roofType || "Roofing",
      source: form.source || "Website",
      lastActivity: form.lastActivity || "New job created",
    };

    setJobs((currentJobs) => {
      const nextJobs = [newJob, ...currentJobs];
      saveJobs(nextJobs);
      return nextJobs;
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      roofType: "",
      source: "Website",
      assignedTo: "Office Coordinator",
      value: "",
      lastActivity: "New job created",
    });
    setShowForm(false);
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-20 z-30 space-y-6 bg-slate-100 pb-4 pt-1">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Pipeline</p>
            <h1 className="mt-2 text-3xl font-black text-[#07183f]">Jobs board</h1>
            <p className="mt-2 text-slate-600">Drag-ready Kanban workflow for roofing jobs from first contact through completion.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSearch("")} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700"><Filter className="mr-2 inline h-4 w-4" />Clear filter</button>
            <button onClick={() => setShowForm(true)} className="rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white shadow-lg shadow-orange-200"><Plus className="mr-2 inline h-4 w-4" />Add job</button>
          </div>
        </div>

        {showForm && (
          <form onSubmit={handleAddJob} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-[#07183f]">Add new job</h2>
              <button type="button" onClick={() => setShowForm(false)} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Customer / job name" />
              <input ref={addressInputRef} required value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Job address" />
              <input value={form.roofType} onChange={(event) => setForm({ ...form, roofType: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Roof type" />
              <input type="number" value={form.value} onChange={(event) => setForm({ ...form, value: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Job value" />
              <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email" />
              <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Phone" />
              <input value={form.source} onChange={(event) => setForm({ ...form, source: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Source" />
              <input value={form.assignedTo} onChange={(event) => setForm({ ...form, assignedTo: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Assigned to" />
              <input value={form.lastActivity} onChange={(event) => setForm({ ...form, lastActivity: event.target.value })} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Current note" />
            </div>
            <button className="mt-4 rounded-2xl bg-[#07183f] px-5 py-3 font-bold text-white">Save job</button>
          </form>
        )}

        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none" placeholder="Search by address, customer, city, roof type, source..." />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {leadStages.map((stage) => {
          const stageJobs = filteredJobs.filter((job) => job.stage === stage.id);
          const stageValue = stageJobs.reduce((total, job) => total + job.value, 0);
          return (
            <section key={stage.id} onDragOver={(event) => event.preventDefault()} onDrop={() => draggedJobId && updateJobStage(draggedJobId, stage.id)} className="min-h-[34rem] w-80 shrink-0 rounded-3xl bg-slate-100 p-4">
              <div className="sticky top-[19rem] z-20 mb-4 border-b border-slate-300 bg-slate-100 pb-4 pt-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-black text-slate-700">{stage.label} ({stageJobs.length})</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">🏠 Default</span>
                      {stage.id === "new_lead" && <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-700 ring-1 ring-pink-100">Property Management</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-500">${stageValue.toLocaleString()}</p>
                    <button className="mt-1 rounded-xl p-2 text-slate-400 hover:bg-white"><MoreHorizontal className="h-5 w-5" /></button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {stageJobs.map((job, index) => (
                  <article key={job.id} draggable onDragStart={() => setDraggedJobId(job.id)} onDragEnd={() => setDraggedJobId(null)} className="cursor-grab rounded-3xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black leading-snug text-slate-900">{job.address}, {job.city}, AZ</p>
                        <p className="mt-1 text-slate-500">{job.name}</p>
                      </div>
                      <span className="rounded-full bg-orange-50 p-2 text-xs">🏠</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">{job.roofType}</span>
                      <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-100">{job.source}</span>
                      {job.value > 50000 && <span className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-100">Multiple</span>}
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <p className="line-clamp-2 text-slate-600">{job.lastActivity}</p>
                      <p className="mt-1 font-semibold text-[#0f2156]">{job.assignedTo}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className={index % 3 === 0 ? "font-bold text-red-500" : "text-slate-500"}>{jobAges[index % jobAges.length]}</span>
                      <span className="text-slate-500">{updateAges[index % updateAges.length]}</span>
                      <GripVertical className="h-4 w-4 text-slate-300" />
                    </div>
                  </article>
                ))}
                {stageJobs.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">Drop jobs here</div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
