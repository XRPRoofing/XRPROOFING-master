"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { leads } from "@/lib/crm-data";
import type { Lead } from "@/types/crm";

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

type Proposal = {
  id: string;
  job?: Lead;
  customerName: string;
  address: string;
  scope: string;
  total: number;
  status: "Draft" | "Sent" | "Approved";
};

const initialProposals: Proposal[] = leads.slice(0, 3).map((job, index) => ({
  id: `P-${1001 + index}`,
  job,
  customerName: job.name,
  address: `${job.address}, ${job.city}`,
  scope: `${job.roofType} roofing proposal`,
  total: job.value,
  status: index === 0 ? "Draft" : index === 1 ? "Sent" : "Approved",
}));

const statuses: Proposal["status"][] = ["Draft", "Sent", "Approved"];

export default function ProposalsPage() {
  const [proposalMode, setProposalMode] = useState<"job" | "new">("job");
  const [selectedJobId, setSelectedJobId] = useState(leads[0]?.id || "");
  const [proposals, setProposals] = useState<Proposal[]>(initialProposals);
  const [jobSearch, setJobSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [scope, setScope] = useState("");
  const [total, setTotal] = useState("");
  const addressInputRef = useRef<HTMLInputElement>(null);

  const selectedJob = useMemo(() => leads.find((job) => job.id === selectedJobId), [selectedJobId]);
  const filteredJobs = useMemo(() => {
    const query = jobSearch.toLowerCase().trim();

    if (!query) return leads;

    return leads.filter((job) =>
      [job.name, job.address, job.city, job.roofType, job.email, job.phone]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [jobSearch]);

  useEffect(() => {
    if (proposalMode !== "new" || !addressInputRef.current) return;

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!googleMapsApiKey) return;

    function initializeAutocomplete() {
      if (!addressInputRef.current || !window.google?.maps?.places?.Autocomplete) return;

      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        bounds: arizonaBounds,
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
        strictBounds: true,
        types: ["address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setAddress(place.formatted_address);
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
  }, [proposalMode]);

  function handleCreateProposal(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (proposalMode === "job" && !selectedJob) return;
    if (proposalMode === "new" && (!customerName || !address)) return;

    const newProposal: Proposal = {
      id: `P-${Date.now()}`,
      job: proposalMode === "job" ? selectedJob : undefined,
      customerName: proposalMode === "job" && selectedJob ? selectedJob.name : customerName,
      address: proposalMode === "job" && selectedJob ? `${selectedJob.address}, ${selectedJob.city}` : address,
      scope: scope || (proposalMode === "job" && selectedJob ? `${selectedJob.roofType} roofing proposal` : "Roofing proposal"),
      total: proposalMode === "job" && selectedJob ? selectedJob.value : Number(total) || 0,
      status: "Draft",
    };

    setProposals((currentProposals) => [newProposal, ...currentProposals]);
    setCustomerName("");
    setAddress("");
    setScope("");
    setTotal("");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">CRM Module</p>
          <h1 className="mt-2 text-3xl font-black text-[#07183f]">Proposal Board</h1>
          <p className="mt-2 text-slate-600">Create proposals from selected jobs or create a new standalone proposal.</p>
        </div>
      </div>

      <form onSubmit={handleCreateProposal} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => setProposalMode("job")} className={`rounded-2xl px-4 py-2 text-sm font-black ${proposalMode === "job" ? "bg-[#07183f] text-white" : "bg-slate-100 text-slate-700"}`}>From selected job</button>
          <button type="button" onClick={() => setProposalMode("new")} className={`rounded-2xl px-4 py-2 text-sm font-black ${proposalMode === "new" ? "bg-[#07183f] text-white" : "bg-slate-100 text-slate-700"}`}>New proposal</button>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end">
          {proposalMode === "job" ? (
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Search job by name or address
              <input value={jobSearch} onChange={(event) => setJobSearch(event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Enter address, customer name, roof type..." />
            </label>
          ) : (
            <>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Customer name
                <input required value={customerName} onChange={(event) => setCustomerName(event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Customer name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Searchable address
                <input ref={addressInputRef} required value={address} onChange={(event) => setAddress(event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Enter address" />
              </label>
            </>
          )}
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Proposal scope
            <input value={scope} onChange={(event) => setScope(event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Roof repair, replacement, coating..." />
          </label>
          {proposalMode === "new" && (
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Proposal total
              <input type="number" value={total} onChange={(event) => setTotal(event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Amount" />
            </label>
          )}
          <button className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white shadow-lg shadow-orange-200">Create proposal</button>
        </div>
        {proposalMode === "job" && (
          <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
              <button key={job.id} type="button" onClick={() => setSelectedJobId(job.id)} className={`rounded-2xl p-4 text-left text-sm ${selectedJobId === job.id ? "bg-orange-50 ring-2 ring-orange-400" : "bg-slate-50"}`}>
                <span className="block font-black text-[#07183f]">{job.name}</span>
                <span className="mt-1 block text-slate-500">{job.address}, {job.city}</span>
                <span className="mt-2 block font-bold text-orange-700">${job.value.toLocaleString()}</span>
              </button>
            ))}
          </div>
        )}
        {proposalMode === "job" && selectedJob && (
          <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <span className="font-black text-[#07183f]">{selectedJob.name}</span> · {selectedJob.address}, {selectedJob.city} · {selectedJob.assignedTo}
          </div>
        )}
      </form>

      <div className="grid gap-4 lg:grid-cols-3">
        {statuses.map((status) => {
          const stageProposals = proposals.filter((proposal) => proposal.status === status);
          const total = stageProposals.reduce((sum, proposal) => sum + proposal.total, 0);

          return (
            <section key={status} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-black text-[#07183f]">{status}</h2>
                  <p className="text-sm font-semibold text-slate-500">{stageProposals.length} proposals</p>
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">${total.toLocaleString()}</span>
              </div>
              <div className="mt-4 space-y-3">
                {stageProposals.map((proposal) => (
                  <article key={proposal.id} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-black text-orange-600">{proposal.id}</p>
                    <p className="mt-1 font-black text-slate-900">{proposal.customerName}</p>
                    <p className="mt-1 text-sm text-slate-500">{proposal.scope}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{proposal.address}</p>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-500">{proposal.job ? proposal.job.stage.replaceAll("_", " ") : "standalone"}</span>
                      <span className="font-black text-[#07183f]">${proposal.total.toLocaleString()}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
