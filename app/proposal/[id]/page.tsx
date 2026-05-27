"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Proposal = {
  id: string;
  customerName: string;
  address: string;
  scope: string;
  total: number;
  status: "Draft" | "Sent" | "Viewed" | "Signed" | "Approved";
  title: string;
  summary: string;
  notes: string;
  terms: string;
  signedAt?: string;
  signedBy?: string;
  selectedOption?: "good" | "better" | "best";
  packages?: {
    good: string;
    better: string;
    best: string;
  };
};

const defaultPackages = {
  good: "GOOD option: Essential roofing repair package with necessary labor, standard materials, cleanup, and workmanship basics.",
  better: "BETTER option: Enhanced roofing package with upgraded materials, improved ventilation details, cleanup, and stronger warranty support.",
  best: "BEST option: Premium roofing package with top-tier materials, full project documentation, priority scheduling, cleanup, and best available workmanship coverage.",
};

export default function CustomerProposalPage() {
  const params = useParams<{ id: string }>();
  const proposalId = decodeURIComponent(params.id);
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [selectedOption, setSelectedOption] = useState<"good" | "better" | "best">("better");
  const [signatureName, setSignatureName] = useState("");
  const [notice, setNotice] = useState("");

  const packageOptions = useMemo(() => proposal?.packages || defaultPackages, [proposal]);

  useEffect(() => {
    queueMicrotask(() => {
      const savedProposals = window.localStorage.getItem("xrp-crm-proposals");
      if (!savedProposals) return;

      const proposals = JSON.parse(savedProposals) as Proposal[];
      const foundProposal = proposals.find((item) => item.id === proposalId);

      if (!foundProposal) return;

      const viewedProposal: Proposal = foundProposal.status === "Sent" ? { ...foundProposal, status: "Viewed" } : foundProposal;
      const updatedProposals = proposals.map((item) => item.id === proposalId ? viewedProposal : item);

      window.localStorage.setItem("xrp-crm-proposals", JSON.stringify(updatedProposals));
      window.dispatchEvent(new StorageEvent("storage", { key: "xrp-crm-proposals", newValue: JSON.stringify(updatedProposals) }));
      setProposal(viewedProposal);
      setSelectedOption(viewedProposal.selectedOption || "better");
      setSignatureName(viewedProposal.signedBy || "");
    });
  }, [proposalId]);

  function handleSignProposal() {
    if (!proposal || !signatureName.trim()) return;

    const signedProposal: Proposal = {
      ...proposal,
      status: "Signed",
      selectedOption,
      signedBy: signatureName.trim(),
      signedAt: new Date().toISOString(),
    };

    const savedProposals = window.localStorage.getItem("xrp-crm-proposals");
    const proposals = savedProposals ? JSON.parse(savedProposals) as Proposal[] : [];
    const updatedProposals = proposals.map((item) => item.id === proposal.id ? signedProposal : item);

    window.localStorage.setItem("xrp-crm-proposals", JSON.stringify(updatedProposals));
    window.dispatchEvent(new StorageEvent("storage", { key: "xrp-crm-proposals", newValue: JSON.stringify(updatedProposals) }));
    setProposal(signedProposal);
    setNotice("Thank you. Your signed proposal has been submitted to XRP Roofing.");
  }

  if (!proposal) {
    return <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-slate-600">Proposal not found. Please open the proposal from the email link on this device.</div>;
  }

  return (
    <main className="min-h-screen bg-slate-100 font-serif text-slate-900">
      <div className="bg-slate-200 py-8 text-center">
        <Image src="/images/logo.jpeg" alt="XRP Roofing" width={150} height={80} className="mx-auto bg-white" priority />
      </div>
      <div className="mx-auto max-w-5xl px-5 py-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs font-black uppercase tracking-wider text-blue-700">Proposal {proposal.id}</p>
            <h1 className="mt-3 text-3xl font-black text-[#07183f]">{proposal.title}</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">{proposal.summary}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Prepared for</p>
              <p className="mt-2 text-lg font-black text-[#07183f]">{proposal.customerName}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{proposal.address}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Estimated total</p>
              <p className="mt-2 text-3xl font-black text-[#07183f]">${proposal.total.toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-black uppercase tracking-wider text-slate-500">Scope of work</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">{proposal.scope}</p>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700">{proposal.notes}</p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#07183f]">Choose your proposal option</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {(["good", "better", "best"] as const).map((option) => (
              <button key={option} type="button" onClick={() => setSelectedOption(option)} className={`rounded-2xl border p-5 text-left transition ${selectedOption === option ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100" : "border-slate-200 bg-white hover:border-blue-200"}`}>
                <span className="text-lg font-black uppercase text-[#07183f]">{option}</span>
                <span className="mt-3 block whitespace-pre-line text-sm leading-6 text-slate-600">{packageOptions[option]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#07183f]">Terms and signature</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">{proposal.terms}</p>
          <div className="mt-7 rounded-2xl border border-slate-200 p-5">
            <label className="block text-sm font-black text-slate-800">
              Type your full name to sign
              <input value={signatureName} onChange={(event) => setSignatureName(event.target.value)} disabled={proposal.status === "Signed"} className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none disabled:bg-slate-100" placeholder="Customer full name" />
            </label>
            {proposal.status === "Signed" ? (
              <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">Signed by {proposal.signedBy} on {proposal.signedAt ? new Date(proposal.signedAt).toLocaleString() : "today"}.</p>
            ) : (
              <button type="button" onClick={handleSignProposal} className="mt-4 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white">Accept and sign proposal</button>
            )}
            {notice && <p className="mt-4 text-sm font-bold text-emerald-700">{notice}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
