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
  template: "executive" | "insurance" | "premium";
  title: string;
  summary: string;
  notes: string;
  terms: string;
};

const initialProposals: Proposal[] = leads.slice(0, 3).map((job, index) => ({
  id: `P-${1001 + index}`,
  job,
  customerName: job.name,
  address: `${job.address}, ${job.city}`,
  scope: `${job.roofType} roofing proposal`,
  total: job.value,
  status: index === 0 ? "Draft" : index === 1 ? "Sent" : "Approved",
  template: index === 0 ? "executive" : index === 1 ? "insurance" : "premium",
  title: index === 1 ? "INSURANCE ROOFING PROPOSAL" : index === 2 ? "PREMIUM ROOFING PROPOSAL" : "BEST ROOFING PROPOSAL",
  summary: "A professional roofing proposal prepared for review and approval.",
  notes: "Includes materials, labor, cleanup, workmanship standards, and customer-ready project documentation.",
  terms: "Payment terms, change orders, warranty coverage, permitting, and project scheduling are subject to final written approval. Customer approval authorizes XRP Roofing to begin project coordination.",
}));

const proposalSections = ["Cover", "Inspection Photos", "Estimate", "BEST", "BETTER", "GOOD", "Summary", "Terms and Conditions"];
const proposalTemplates = [
  { id: "executive", label: "Executive Roofing", description: "Clean premium proposal for homeowner approvals." },
  { id: "insurance", label: "Insurance Claim", description: "Detailed format for carrier and adjuster review." },
  { id: "premium", label: "Premium Package", description: "Polished customer-facing proposal with value highlights." },
] as const;

export default function ProposalsPage() {
  const [proposalMode, setProposalMode] = useState<"job" | "new">("job");
  const [selectedJobId, setSelectedJobId] = useState(leads[0]?.id || "");
  const [proposals, setProposals] = useState<Proposal[]>(initialProposals);
  const [jobSearch, setJobSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [scope, setScope] = useState("");
  const [total, setTotal] = useState("");
  const [proposalSearch, setProposalSearch] = useState("");
  const [proposalFilter, setProposalFilter] = useState<"all" | "drafts">("all");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeProposal, setActiveProposal] = useState<Proposal | null>(null);
  const [deletedProposal, setDeletedProposal] = useState<Proposal | null>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [editorForm, setEditorForm] = useState({
    customerName: "",
    address: "",
    title: "",
    summary: "",
    scope: "",
    total: "",
    template: "executive" as Proposal["template"],
    notes: "",
    terms: "",
  });
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
  const filteredProposals = useMemo(() => {
    const query = proposalSearch.toLowerCase().trim();

    const visibleProposals = proposalFilter === "drafts" ? proposals.filter((proposal) => proposal.status === "Draft") : proposals;

    if (!query) return visibleProposals;

    return visibleProposals.filter((proposal) =>
      [proposal.customerName, proposal.address, proposal.scope, proposal.status]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [proposalFilter, proposalSearch, proposals]);

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
      id: `P-${1001 + proposals.length}`,
      job: proposalMode === "job" ? selectedJob : undefined,
      customerName: proposalMode === "job" && selectedJob ? selectedJob.name : customerName,
      address: proposalMode === "job" && selectedJob ? `${selectedJob.address}, ${selectedJob.city}` : address,
      scope: scope || (proposalMode === "job" && selectedJob ? `${selectedJob.roofType} roofing proposal` : "Roofing proposal"),
      total: proposalMode === "job" && selectedJob ? selectedJob.value : Number(total) || 0,
      status: "Draft",
      template: "executive",
      title: "BEST ROOFING PROPOSAL",
      summary: "A professional roofing proposal prepared for review and approval.",
      notes: "Includes professional roof assessment, materials, labor, cleanup, and customer-ready project documentation.",
      terms: "Payment terms, change orders, warranty coverage, permitting, and project scheduling are subject to final written approval. Customer approval authorizes XRP Roofing to begin project coordination.",
    };

    setProposals((currentProposals) => [newProposal, ...currentProposals]);
    openProposal(newProposal);
    setShowCreateForm(false);
    setCustomerName("");
    setAddress("");
    setScope("");
    setTotal("");
  }

  function openProposal(proposal: Proposal) {
    setEditorForm({
      customerName: proposal.customerName,
      address: proposal.address,
      title: proposal.title,
      summary: proposal.summary,
      scope: proposal.scope,
      total: String(proposal.total),
      template: proposal.template,
      notes: proposal.notes,
      terms: proposal.terms,
    });
    setIsPreviewing(false);
    setActiveProposal(proposal);
  }

  function handleSaveProposal() {
    if (!activeProposal) return;

    const updatedProposal: Proposal = {
      ...activeProposal,
      customerName: editorForm.customerName,
      address: editorForm.address,
      title: editorForm.title,
      summary: editorForm.summary,
      scope: editorForm.scope,
      total: Number(editorForm.total) || 0,
      template: editorForm.template,
      notes: editorForm.notes,
      terms: editorForm.terms,
    };

    setActiveProposal(updatedProposal);
    setProposals((currentProposals) =>
      currentProposals.map((proposal) => proposal.id === updatedProposal.id ? updatedProposal : proposal)
    );
  }

  function handleDeleteProposal(proposal: Proposal) {
    setDeletedProposal(proposal);
    setProposals((currentProposals) => currentProposals.filter((currentProposal) => currentProposal.id !== proposal.id));
    if (activeProposal?.id === proposal.id) {
      setActiveProposal(null);
    }
  }

  function handleUndoDelete() {
    if (!deletedProposal) return;

    setProposals((currentProposals) => [deletedProposal, ...currentProposals]);
    setDeletedProposal(null);
  }

  if (activeProposal) {
    return (
      <div className="-mx-4 -my-6 min-h-[calc(100vh-5rem)] bg-slate-100 sm:-mx-6 lg:-mx-8">
        <div className="sticky top-20 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm">
          <button type="button" onClick={() => setActiveProposal(null)} className="text-sm font-bold text-blue-700">← Back to proposals</button>
          <div className="hidden text-sm font-semibold text-slate-700 md:block">{editorForm.address}</div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">{activeProposal.status}</span>
            <button type="button" onClick={handleSaveProposal} className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">Save</button>
            <button type="button" onClick={() => handleDeleteProposal(activeProposal)} className="rounded-full bg-red-50 px-4 py-2 text-xs font-black text-red-700">Delete</button>
            <button type="button" onClick={() => setIsPreviewing((current) => !current)} className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700">{isPreviewing ? "Edit" : "Preview"}</button>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white">Send</button>
          </div>
        </div>

        <div className={`grid min-h-[calc(100vh-8.5rem)] grid-cols-1 ${isPreviewing ? "" : "lg:grid-cols-[280px_1fr]"}`}>
          {!isPreviewing && (
          <aside className="border-r border-slate-200 bg-white p-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Customer</p>
                  <input value={editorForm.customerName} onChange={(event) => setEditorForm({ ...editorForm, customerName: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-black text-[#07183f] outline-none" />
                  <input value={editorForm.address} onChange={(event) => setEditorForm({ ...editorForm, address: event.target.value })} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 outline-none" />
                </div>
                <button className="text-slate-400">•••</button>
              </div>
            </div>
            <button className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-bold text-blue-700">View job details</button>
            <div className="mt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Proposal template</p>
              <div className="space-y-2">
                {proposalTemplates.map((template) => (
                  <button key={template.id} type="button" onClick={() => setEditorForm({ ...editorForm, template: template.id })} className={`w-full rounded-xl p-3 text-left ${editorForm.template === template.id ? "bg-blue-50 ring-1 ring-blue-300" : "bg-slate-50"}`}>
                    <span className="block text-sm font-black text-[#07183f]">{template.label}</span>
                    <span className="mt-1 block text-xs font-semibold text-slate-500">{template.description}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Proposal title
                <input value={editorForm.title} onChange={(event) => setEditorForm({ ...editorForm, title: event.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Proposal summary
                <textarea value={editorForm.summary} onChange={(event) => setEditorForm({ ...editorForm, summary: event.target.value })} className="mt-2 min-h-20 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Scope
                <textarea value={editorForm.scope} onChange={(event) => setEditorForm({ ...editorForm, scope: event.target.value })} className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Total
                <input type="number" value={editorForm.total} onChange={(event) => setEditorForm({ ...editorForm, total: event.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Customer notes
                <textarea value={editorForm.notes} onChange={(event) => setEditorForm({ ...editorForm, notes: event.target.value })} className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Terms and conditions
                <textarea value={editorForm.terms} onChange={(event) => setEditorForm({ ...editorForm, terms: event.target.value })} className="mt-2 min-h-32 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm normal-case tracking-normal text-slate-700 outline-none" />
              </label>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Proposal sections</p>
              <div className="space-y-2">
                {proposalSections.map((section) => (
                  <button key={section} className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold ${section === "Estimate" ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200" : "bg-slate-50 text-slate-600"}`}>
                    {section}
                  </button>
                ))}
              </div>
              <button className="mt-3 w-full rounded-xl border border-blue-300 bg-blue-50 px-4 py-3 text-center text-xl font-light text-blue-700">+</button>
            </div>
          </aside>
          )}

          <main className="overflow-auto p-6">
            <div className="mx-auto max-w-[760px]">
              <p className="mb-5 text-center text-sm font-black text-slate-700">{proposalTemplates.find((template) => template.id === editorForm.template)?.label}</p>
              <div className={`min-h-[900px] border bg-white p-10 shadow-sm ${editorForm.template === "premium" ? "border-orange-300" : editorForm.template === "insurance" ? "border-blue-300" : "border-slate-300"}`}>
                <div className={`flex items-start justify-between border-b-4 pb-4 ${editorForm.template === "premium" ? "border-orange-500" : "border-[#07183f]"}`}>
                  <div>
                    {isPreviewing ? (
                      <p className={`text-2xl font-black ${editorForm.template === "premium" ? "text-orange-600" : "text-[#07183f]"}`}>{editorForm.title}</p>
                    ) : (
                      <input value={editorForm.title} onChange={(event) => setEditorForm({ ...editorForm, title: event.target.value })} className={`w-full border-none bg-transparent p-0 text-2xl font-black outline-none ${editorForm.template === "premium" ? "text-orange-600" : "text-[#07183f]"}`} />
                    )}
                    <p className="mt-2 text-sm font-semibold text-slate-500">{activeProposal.id}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-black text-[#07183f]">XRP Roofing</p>
                    <p className="text-slate-500">ROC #350898</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500">Prepared for</p>
                    <p className="mt-2 text-lg font-black text-[#07183f]">{editorForm.customerName}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{editorForm.address}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500">Proposal summary</p>
                    {isPreviewing ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600">{editorForm.summary}</p>
                    ) : (
                      <textarea value={editorForm.summary} onChange={(event) => setEditorForm({ ...editorForm, summary: event.target.value })} className="mt-2 min-h-24 w-full resize-none border-none bg-transparent p-0 text-sm leading-6 text-slate-600 outline-none" />
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">Description of Work</p>
                  <div className="mt-4 border-y border-slate-300 py-5">
                    {isPreviewing ? (
                      <>
                        <p className="text-sm leading-7 text-slate-700">{editorForm.scope}</p>
                        <p className="mt-4 text-sm leading-7 text-slate-700">{editorForm.notes}</p>
                      </>
                    ) : (
                      <>
                        <textarea value={editorForm.scope} onChange={(event) => setEditorForm({ ...editorForm, scope: event.target.value })} className="min-h-24 w-full resize-none border-none bg-transparent p-0 text-sm leading-7 text-slate-700 outline-none" />
                        <textarea value={editorForm.notes} onChange={(event) => setEditorForm({ ...editorForm, notes: event.target.value })} className="mt-4 min-h-24 w-full resize-none border-none bg-transparent p-0 text-sm leading-7 text-slate-700 outline-none" />
                      </>
                    )}
                  </div>
                  {editorForm.template === "insurance" && (
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                      <p className="font-black text-[#07183f]">Insurance documentation included</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Scope notes, property details, estimated roofing work, and supporting documentation sections are organized for adjuster review.</p>
                    </div>
                  )}
                  {editorForm.template === "premium" && (
                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {["Premium materials", "Clean job site", "Professional warranty"].map((item) => (
                        <div key={item} className="rounded-2xl bg-orange-50 p-4 text-sm font-black text-orange-700">{item}</div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex justify-between text-sm">
                    <span className="font-bold text-slate-700">Proposal total</span>
                    <span className="font-black text-[#07183f]">${(Number(editorForm.total) || 0).toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-32 rounded-2xl border border-slate-200 p-5">
                  <p className="font-black text-[#07183f]">Customer approval</p>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="border-t border-slate-300 pt-2 text-xs text-slate-500">Customer signature</div>
                    <div className="border-t border-slate-300 pt-2 text-xs text-slate-500">Date</div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 p-5">
                  <p className="font-black text-[#07183f]">Terms and Conditions</p>
                  {isPreviewing ? (
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{editorForm.terms}</p>
                  ) : (
                    <textarea value={editorForm.terms} onChange={(event) => setEditorForm({ ...editorForm, terms: event.target.value })} className="mt-3 min-h-32 w-full resize-none border-none bg-transparent p-0 text-sm leading-7 text-slate-600 outline-none" />
                  )}
                </div>

                <div className="mt-12 flex items-end justify-between border-t border-slate-300 pt-4">
                  <div className="text-xs text-slate-500">
                    <p className="font-black text-slate-700">XRP Roofing</p>
                    <p>ROC #350898</p>
                    <p>info@xrproofing.com</p>
                  </div>
                  <div className="text-right text-xl font-black text-[#07183f]">XRP<br /><span className="text-xs tracking-[0.25em]">ROOFING</span></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-[#07183f]">Proposals</h1>
        <button type="button" onClick={() => setShowCreateForm((current) => !current)} className="rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-200">⊕ Proposal</button>
      </div>

      <div className="border-b border-slate-200">
        <div className="flex gap-8 text-sm font-black">
          <button type="button" onClick={() => setProposalFilter("all")} className={`px-1 pb-4 ${proposalFilter === "all" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-600"}`}>Proposals</button>
          <button type="button" onClick={() => setProposalFilter("drafts")} className={`px-1 pb-4 ${proposalFilter === "drafts" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-600"}`}>Drafts</button>
          <button className="px-1 pb-4 text-slate-600">Templates</button>
          <button className="px-1 pb-4 text-slate-600">Settings</button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative max-w-md flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
              <input value={proposalSearch} onChange={(event) => setProposalSearch(event.target.value)} className="w-full rounded border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500" placeholder="Search for a customer or address..." />
            </div>
            <button className="w-fit rounded-full bg-slate-50 px-5 py-3 text-sm font-black text-blue-600">▽ Filter</button>
          </div>
          <div className="flex overflow-hidden rounded-lg border border-slate-200">
            <button className="bg-blue-50 px-4 py-3 text-xl text-blue-700 ring-1 ring-blue-500">▦</button>
            <button className="px-4 py-3 text-xl text-slate-500">☰</button>
          </div>
        </div>
      </div>

      {deletedProposal && (
        <div className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold text-amber-900">
          <span>Deleted proposal for {deletedProposal.customerName}.</span>
          <button type="button" onClick={handleUndoDelete} className="rounded-full bg-white px-4 py-2 text-blue-700 shadow-sm">Undo</button>
        </div>
      )}

      {showCreateForm && (
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
      )}

      <div className="max-h-[calc(100vh-18rem)] space-y-3 overflow-y-auto pr-2">
        {filteredProposals.map((proposal) => (
          <div key={proposal.id} className="grid w-full grid-cols-1 items-center gap-4 rounded bg-slate-50 p-4 text-left transition hover:bg-blue-50 md:grid-cols-[1fr_auto]">
            <button type="button" onClick={() => openProposal(proposal)} className="flex items-center gap-4 text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-white text-sm font-black leading-4 text-[#07183f] shadow-sm">XRP<br />ROOF</div>
              <div>
                <p className="font-black text-[#07183f]">{proposal.address}</p>
                <p className="mt-1 text-sm text-slate-500">{proposal.customerName} <span className="mx-2">•</span> Assigned to Jonathan Gonzalez</p>
                <p className="mt-1 text-xs text-slate-500">{proposal.status === "Draft" ? "Created" : proposal.status === "Sent" ? "Sent" : "Viewed"} by Jonathan Gonzalez <span className="mx-1">•</span> Today at 3:27 AM⌄</p>
              </div>
            </div>
            </button>
            <div className="flex items-center justify-end gap-3">
              <div className="text-right">
                <p className="font-black text-slate-600">${proposal.total.toLocaleString()}</p>
                <p className="mt-1 text-xs font-bold uppercase text-slate-500">BEST</p>
              </div>
              <span className={`rounded-full px-4 py-1 text-sm font-black ${proposal.status === "Draft" ? "bg-slate-500 text-white" : proposal.status === "Sent" ? "bg-sky-500 text-white" : "bg-yellow-400 text-slate-900"}`}>{proposal.status === "Approved" ? "Viewed" : proposal.status}</span>
              <button type="button" onClick={() => handleDeleteProposal(proposal)} className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-700">Delete</button>
              <span className="text-xl font-black text-slate-500">⋯</span>
            </div>
          </div>
        ))}
        {filteredProposals.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center font-semibold text-slate-500">No proposals match your search.</div>
        )}
      </div>
    </div>
  );
}
