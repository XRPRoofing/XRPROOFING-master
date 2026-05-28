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
  coverPhoto?: string;
  coverText?: string;
  notes: string;
  terms: string;
  signedAt?: string;
  signedBy?: string;
  selectedOption?: "good" | "better" | "best";
  inspectionPhotos?: InspectionPhoto[];
  packages?: {
    good: string | PackageOption;
    better: string | PackageOption;
    best: string | PackageOption;
  };
};

type InspectionPhoto = {
  label: string;
  image: string;
  note: string;
};

type PackageOption = {
  scope: string;
  price: number;
};

const oldDefaultTerms = "Payment terms, change orders, warranty coverage, permitting, and project scheduling are subject to final written approval. Customer approval authorizes XRP Roofing to begin project coordination.";

const defaultTerms = `AZPRO Contractor LLC DBA XRP Roofing
2843 W McDowell Rd, Phoenix, AZ 85009
Phone: (623) 300-8097 | Email: info@xrproofing.com
ROC # 350898

Arizona Registrar of Contractors Licensed & Insured Contractor

These Terms and Conditions form part of the Agreement between XRP Roofing, (“XRP Roofing,” “we,” “us,” or “our”) and the property owner or authorized representative (“Customer,” “you,” or “your”) for roofing services. By signing the proposal or contract, you acknowledge that you have read, understood, and agree to be bound by these terms.

1. Communication
It is important to maintain open communication with XRP Roofing regarding any issues or disputes about payments to address them promptly and avoid escalation to a lien filing.

Notice of Cancellation Policy
Cancellation Right: The Customer has the right to cancel this transaction at any time prior to midnight of the third business day after the date of the signed contract.

How to Cancel: To cancel this contract within the specified period, the Customer must provide written notice of cancellation to XRP Roofing. This can be done via email or written letter. The notice must be received by XRP Roofing before the deadline to be effective.

Post-Cancellation Penalty: If the Customer cancels the contract after the third business day, a penalty equal to 25% of the contract price may apply.

Acknowledgment
By signing this contract, you acknowledge that you have read and understood all the terms and conditions outlined in this agreement.

Delivery and Payment
Initial Deposit: A 50% initial deposit is due upon acceptance of the Agreement for cash buyers, or as specified in your proposal.

Final Payment: All remaining balances are due upon XRP Roofing’s final inspection of the work.

Material Taxes: Material taxes are included in the price.

Outstanding Balances: Final payment is due within seven (7) days after XRP Roofing issues the final invoice. Any unpaid balance may accrue a late charge of 1.5% per month, or the maximum rate permitted by law.

Collection Costs: Customer agrees to pay collection costs, including attorney’s fees, lien recording fees, and non-taxable court costs if complete payment is not received by the due date.

Authorized Payment Methods: Debit, Credit, Cash, Check, ACH, Financing, Bank Wire.

Damage
XRP Roofing is not liable for prior damage, structural damage, hidden site conditions, or damage not caused by XRP Roofing after installation.

Job Site Conditions
Customers shall provide a clear worksite, driveway access, electricity, and water. Expenses related to delays caused by un-cleared obstructions will be charged to the Customer.

Unsafe Working Environment / Customer Non-Performance
XRP Roofing reserves the right to cancel or delay work if the jobsite presents unsafe working conditions, if payment terms are not met, if access is not provided, or if the customer breaches any part of the contract.

Weather Conditions
XRP Roofing reserves the right to postpone or delay the project due to adverse weather conditions including rain, high winds, extreme heat, monsoons, or other weather-related factors affecting safety or quality.

Scheduling Issues
Unforeseen circumstances such as material shortages, labor issues, or project complications may result in delays. XRP Roofing shall not be held liable for damages, costs, or inconveniences arising from these scheduling issues.

Change Orders
Hidden conditions discovered during work may require additional work or materials. No additional work will be performed without written approval. Approved change orders are due upon acceptance.

Limitations of Liability
XRP Roofing shall not be liable for incidental, special, or consequential damages, acts of God, or existing out-of-code water, electrical, sewer, HVAC, plumbing, framing, drainage, or related conditions.

Limited Warranty / Exclusive Remedy
Workmanship warranty varies by package and installation type. Repairs have a 90-day warranty on the specific repair only. Warranties are void if amounts owed under this agreement are not paid.

Professional Workmanship & ROC
All work will be performed professionally using XRP Roofing’s standard methods unless otherwise noted. The property owner has the right to file a written complaint with the Arizona Registrar of Contractors.

Final Payment
XRP Roofing can collect the final remaining payment once 90% of the project has been installed. Final payment is due within seven (7) days after the final invoice.

Lien Rights
XRP Roofing retains the right to file a mechanic’s lien against the property if payments are not made according to the contract.

Dispute Resolution
Any claims arising out of this contract will be decided by a court of general jurisdiction in Maricopa County, Arizona. Arizona law governs this contract. The Customer waives the right to a jury trial.

Entire Agreement
This Agreement constitutes the entire understanding between the parties. No other provisions, alterations, or additions are binding unless in writing and signed by both parties.

Additional Terms and Conditions
Bird deterrent/pest control devices, gutter removal, painting, permanent Christmas lights, satellite removal, solar panels, misting systems, roof conduit, thermostat wires, crane use, tile color/manufacturer limitations, insurance claims, Arizona climate considerations, additional work, and service calls are subject to the detailed responsibilities, limitations, and disclaimers stated by XRP Roofing.`;

const defaultPackages: Record<"good" | "better" | "best", PackageOption> = {
  good: {
    scope: "GOOD option: Essential roofing repair package with necessary labor, standard materials, cleanup, and workmanship basics.",
    price: 0,
  },
  better: {
    scope: "BETTER option: Enhanced roofing package with upgraded materials, improved ventilation details, cleanup, and stronger warranty support.",
    price: 0,
  },
  best: {
    scope: "BEST option: Premium roofing package with top-tier materials, full project documentation, priority scheduling, cleanup, and best available workmanship coverage.",
    price: 0,
  },
};

const defaultInspectionPhotos: InspectionPhoto[] = [
  { label: "Front elevation", image: "", note: "" },
  { label: "Roof condition", image: "", note: "" },
  { label: "Detail area", image: "", note: "" },
  { label: "Project notes", image: "", note: "" },
];

function normalizePackages(packages?: Proposal["packages"]): Record<"good" | "better" | "best", PackageOption> {
  return {
    good: typeof packages?.good === "string" ? { scope: packages.good, price: 0 } : packages?.good || defaultPackages.good,
    better: typeof packages?.better === "string" ? { scope: packages.better, price: 0 } : packages?.better || defaultPackages.better,
    best: typeof packages?.best === "string" ? { scope: packages.best, price: 0 } : packages?.best || defaultPackages.best,
  };
}

function normalizeTerms(terms?: string) {
  return !terms || terms === oldDefaultTerms ? defaultTerms : terms;
}

function normalizeInspectionPhotos(photos?: InspectionPhoto[]) {
  return defaultInspectionPhotos.map((defaultPhoto, index) => ({
    ...defaultPhoto,
    ...(photos?.[index] || {}),
  }));
}

const publicProposalFallbacks: Proposal[] = [
  {
    id: "P-1001",
    customerName: "Maria Hernandez",
    address: "2148 E Camelback Rd, Phoenix",
    scope: "Tile roofing proposal",
    total: 18500,
    status: "Sent",
    title: "BEST ROOFING PROPOSAL",
    summary: "A professional roofing proposal prepared for review and approval.",
    coverPhoto: "/images/logo.jpeg",
    coverText: "Prepared by XRP Roofing with a professional project overview, proposal options, and customer approval details.",
    notes: "Includes materials, labor, cleanup, workmanship standards, and customer-ready project documentation.",
    terms: defaultTerms,
    packages: defaultPackages,
  },
  {
    id: "P-1002",
    customerName: "Desert Plaza HOA",
    address: "8800 N Scottsdale Rd, Scottsdale",
    scope: "Flat/TPO roofing proposal",
    total: 72000,
    status: "Sent",
    title: "INSURANCE ROOFING PROPOSAL",
    summary: "A professional roofing proposal prepared for review and approval.",
    coverPhoto: "/images/logo.jpeg",
    coverText: "Prepared by XRP Roofing with a professional project overview, proposal options, and customer approval details.",
    notes: "Includes materials, labor, cleanup, workmanship standards, and customer-ready project documentation.",
    terms: defaultTerms,
    packages: defaultPackages,
  },
  {
    id: "P-1003",
    customerName: "Ryan Mitchell",
    address: "944 W Ocotillo Rd, Glendale",
    scope: "Shingle roofing proposal",
    total: 24600,
    status: "Sent",
    title: "PREMIUM ROOFING PROPOSAL",
    summary: "A professional roofing proposal prepared for review and approval.",
    coverPhoto: "/images/logo.jpeg",
    coverText: "Prepared by XRP Roofing with a professional project overview, proposal options, and customer approval details.",
    notes: "Includes materials, labor, cleanup, workmanship standards, and customer-ready project documentation.",
    terms: defaultTerms,
    packages: defaultPackages,
  },
];

export default function CustomerProposalPage() {
  const params = useParams<{ id: string }>();
  const proposalId = decodeURIComponent(params.id);
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [selectedOption, setSelectedOption] = useState<"good" | "better" | "best">("better");
  const [signatureName, setSignatureName] = useState("");
  const [notice, setNotice] = useState("");

  const packageOptions = useMemo(() => normalizePackages(proposal?.packages), [proposal]);
  const inspectionPhotos = useMemo(() => normalizeInspectionPhotos(proposal?.inspectionPhotos).filter((photo) => photo.image || photo.note), [proposal]);
  const selectedOptionTotal = packageOptions[selectedOption].price || proposal?.total || 0;

  useEffect(() => {
    queueMicrotask(() => {
      const savedProposals = window.localStorage.getItem("xrp-crm-proposals");
      const proposals = savedProposals ? JSON.parse(savedProposals) as Proposal[] : [];
      const foundProposal = proposals.find((item) => item.id === proposalId);
      const publicProposal = publicProposalFallbacks.find((item) => item.id === proposalId);

      if (!foundProposal && !publicProposal) return;

      const baseProposal = foundProposal || publicProposal;
      if (!baseProposal) return;

      const proposalWithDefaultTerms: Proposal = { ...baseProposal, terms: normalizeTerms(baseProposal.terms) };
      const viewedProposal: Proposal = proposalWithDefaultTerms.status === "Sent" ? { ...proposalWithDefaultTerms, status: "Viewed" } : proposalWithDefaultTerms;
      const updatedProposals = foundProposal
        ? proposals.map((item) => item.id === proposalId ? viewedProposal : item)
        : [...proposals, viewedProposal];

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
      total: selectedOptionTotal,
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
          <div className="mb-8 rounded-3xl bg-slate-50 p-8 text-center">
            <Image src={proposal.coverPhoto || "/images/logo.jpeg"} alt="Proposal cover" width={220} height={130} className="mx-auto max-h-36 w-auto rounded-2xl bg-white object-contain shadow-sm" />
            <p className="mt-5 text-3xl font-black text-[#07183f]">{proposal.title}</p>
            <p className="mt-4 text-lg font-bold text-slate-700">{proposal.customerName}</p>
            <p className="mt-2 text-sm text-slate-500">{proposal.address}</p>
            {proposal.coverText && <p className="mx-auto mt-6 max-w-xl whitespace-pre-line text-sm leading-7 text-slate-600">{proposal.coverText}</p>}
          </div>
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
              <p className="mt-2 text-3xl font-black text-[#07183f]">${selectedOptionTotal.toLocaleString()}</p>
              <p className="mt-1 text-sm font-bold uppercase text-blue-700">{selectedOption} option selected</p>
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
                <span className="mt-2 block text-xl font-black text-blue-700">${packageOptions[option].price.toLocaleString()}</span>
                <span className="mt-3 block whitespace-pre-line text-sm leading-6 text-slate-600">{packageOptions[option].scope}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#07183f]">Signature</h2>
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

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#07183f]">Terms and Conditions</h2>
          <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-600">{proposal.terms}</p>
        </section>

        {inspectionPhotos.length > 0 && (
          <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[#07183f]">Project Photos</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {inspectionPhotos.map((photo) => (
                <div key={photo.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {photo.image && <Image src={photo.image} alt={photo.label} width={520} height={360} className="max-h-80 w-full rounded-xl object-cover" />}
                  <p className="mt-3 font-black text-[#07183f]">{photo.label}</p>
                  {photo.note && <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{photo.note}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

