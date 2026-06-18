"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type InvoiceStatus = "Draft" | "Sent" | "Pending" | "Due Soon" | "Overdue" | "Partially Paid" | "Paid" | "Voided";
type PaymentMethod = "Cash" | "Check" | "Bank Transfer" | "Credit Card" | "Zelle" | "Stripe ACH" | "Stripe Card";

type InvoiceLineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
  tax: number;
};

type Payment = {
  amount: number;
  date: string;
  method: PaymentMethod;
  reference: string;
  notes: string;
  offline: boolean;
};

type Invoice = {
  id: string;
  invoiceNumber: string;
  clientName: string;
  email: string;
  phone: string;
  jobName: string;
  propertyAddress: string;
  issueDate: string;
  dueDate: string;
  jobReference: string;
  roofType: string;
  proposalReference: string;
  projectCompletionDate: string;
  warrantyDuration: string;
  paymentTerms: string;
  warrantyNotes: string;
  discount: number;
  status: InvoiceStatus;
  lineItems: InvoiceLineItem[];
  payments: Payment[];
  activity: string[];
};

function currency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function calculateTotals(invoice: Pick<Invoice, "lineItems" | "discount">) {
  const subtotal = invoice.lineItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  const tax = invoice.lineItems.reduce((total, item) => total + item.quantity * item.unitPrice * (item.tax / 100), 0);
  const finalTotal = Math.max(subtotal + tax - invoice.discount, 0);
  return { subtotal, tax, finalTotal };
}

function getPaidAmount(invoice: Invoice) {
  return invoice.payments.reduce((total, payment) => total + payment.amount, 0);
}

function statusBadgeClass(status: InvoiceStatus) {
  if (status === "Paid") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "Partially Paid") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "Overdue") return "bg-red-50 text-red-700 ring-red-100";
  if (status === "Voided") return "bg-slate-100 text-slate-600 ring-slate-200";
  return "bg-orange-50 text-orange-700 ring-orange-100";
}

export default function CustomerInvoicePage() {
  const params = useParams<{ id: string }>();
  const invoiceId = decodeURIComponent(params.id);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"ACH" | "Credit Card">("ACH");
  const [notice, setNotice] = useState("");

  const totals = useMemo(() => invoice ? calculateTotals(invoice) : { subtotal: 0, tax: 0, finalTotal: 0 }, [invoice]);
  const paid = invoice ? getPaidAmount(invoice) : 0;
  const balance = Math.max(totals.finalTotal - paid, 0);

  useEffect(() => {
    async function loadInvoice() {
      try {
        const response = await fetch(`/api/invoices/share?id=${encodeURIComponent(invoiceId)}`);
        if (response.ok) {
          const data = await response.json() as { invoice?: Invoice };
          if (data.invoice) setInvoice(data.invoice);
        }
      } catch {}
    }

    void loadInvoice();
  }, [invoiceId]);

  async function handleStartPayment() {
    if (!invoice || balance <= 0) return;

    setNotice("Opening secure payment checkout...");

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invoiceId: invoice.id,
          invoiceNumber: invoice.invoiceNumber,
          amount: balance,
          paymentMethod: paymentMethod === "ACH" ? "ach" : "card",
          customerEmail: invoice.email,
          successUrl: `${window.location.origin}/invoice/${encodeURIComponent(invoice.id)}?payment=success`,
          cancelUrl: `${window.location.origin}/invoice/${encodeURIComponent(invoice.id)}?payment=cancelled`,
        }),
      });

      const data = await response.json() as { checkoutUrl?: string; error?: string };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Unable to open payment checkout");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Payment checkout is not available.";
      setNotice(`${message} Add Stripe keys to enable live ACH and credit card payments.`);
    }
  }

  if (!invoice) {
    return <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-slate-600">Invoice not found. Please ask XRP Roofing to resend the invoice link.</div>;
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="bg-slate-200 py-8 text-center">
        <Image src="/images/logo.png" alt="XRP Roofing" width={150} height={80} className="mx-auto bg-white" priority />
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 lg:grid-cols-[1fr_380px]">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">XRP Roofing Invoice</p>
              <h1 className="mt-3 text-3xl font-black text-[#07183f]">{invoice.invoiceNumber}</h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">ROC #350898</p>
            </div>
            <span className={`w-fit rounded-full px-4 py-2 text-sm font-black ring-1 ${statusBadgeClass(invoice.status)}`}>{invoice.status}</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Bill to</p>
              <p className="mt-2 text-lg font-black text-[#07183f]">{invoice.clientName}</p>
              <p className="mt-1 text-sm text-slate-600">{invoice.email}</p>
              <p className="mt-1 text-sm text-slate-600">{invoice.phone}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{invoice.propertyAddress}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Roofing job</p>
              <p className="mt-2 text-lg font-black text-[#07183f]">{invoice.jobName}</p>
              <p className="mt-1 text-sm text-slate-600">Roof type: {invoice.roofType}</p>
              <p className="mt-1 text-sm text-slate-600">Job reference: {invoice.jobReference}</p>
              <p className="mt-1 text-sm text-slate-600">Due date: {invoice.dueDate}</p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-[1fr_80px_110px_90px] bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-500">
              <span>Description</span>
              <span>Qty</span>
              <span>Unit</span>
              <span>Tax</span>
            </div>
            {invoice.lineItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_80px_110px_90px] border-t border-slate-100 px-4 py-4 text-sm text-slate-700">
                <span className="font-bold text-slate-900">{item.description}</span>
                <span>{item.quantity}</span>
                <span>{currency(item.unitPrice)}</span>
                <span>{item.tax}%</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Payment terms</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">{invoice.paymentTerms}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Warranty notes</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">{invoice.warrantyNotes}</p>
              <p className="mt-3 text-sm font-bold text-slate-700">{invoice.warrantyDuration}</p>
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Pay online</p>
          <h2 className="mt-3 text-3xl font-black text-[#07183f]">{currency(balance)}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">Remaining balance</p>
          <div className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{currency(totals.subtotal)}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{currency(totals.tax)}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>{currency(invoice.discount)}</span></div>
            <div className="flex justify-between border-t border-slate-200 pt-2"><span>Paid</span><span>{currency(paid)}</span></div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setPaymentMethod("ACH")} className={`rounded-2xl border px-4 py-4 text-sm font-black ${paymentMethod === "ACH" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>ACH Bank</button>
            <button type="button" onClick={() => setPaymentMethod("Credit Card")} className={`rounded-2xl border px-4 py-4 text-sm font-black ${paymentMethod === "Credit Card" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>Credit Card</button>
          </div>
          <button type="button" onClick={handleStartPayment} disabled={balance <= 0} className="mt-5 w-full rounded-2xl bg-blue-600 px-5 py-4 font-black text-white shadow-lg shadow-blue-200 disabled:bg-slate-300">Pay {currency(balance)} by {paymentMethod}</button>
          <p className="mt-4 text-center text-xs font-semibold leading-5 text-slate-500">Secure payment processing can be connected to Stripe or another merchant provider for live ACH and credit card payments.</p>
          {notice && <p className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-700">{notice}</p>}
        </aside>
      </div>
    </main>
  );
}
