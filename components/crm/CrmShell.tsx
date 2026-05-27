"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, BriefcaseBusiness, CalendarDays, ClipboardList, FileText, LayoutDashboard, LogOut, Menu, Search, Settings, UploadCloud, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const navigation = [
  { href: "/crm", label: "Dashboard", icon: LayoutDashboard },
  { href: "/crm/leads", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/crm/customers", label: "Customers", icon: UsersRound },
  { href: "/crm/estimates", label: "Estimates", icon: FileText },
  { href: "/crm/tasks", label: "Tasks", icon: ClipboardList },
  { href: "/crm/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/crm/files", label: "Files", icon: UploadCloud },
  { href: "/crm/settings", label: "Settings", icon: Settings },
];

export default function CrmShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let mounted = true;

    createClient().auth.getSession().then(({ data }) => {
      if (!mounted) return;

      if (!data.session) {
        router.replace(`/login?redirectedFrom=${encodeURIComponent(pathname)}`);
        return;
      }

      setCheckingAuth(false);
    });

    return () => {
      mounted = false;
    };
  }, [pathname, router]);

  async function logout() {
    await createClient().auth.signOut();
    router.push("/login");
  }

  if (checkingAuth) {
    return <div className="flex min-h-screen items-center justify-center bg-slate-100 text-sm font-semibold text-slate-600">Opening CRM...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#07183f] text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between px-6">
          <Link href="/crm" className="text-xl font-black tracking-tight">XRP CRM</Link>
          <button onClick={() => setOpen(false)} className="lg:hidden"><X className="h-6 w-6" /></button>
        </div>
        <nav className="space-y-1 px-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? "bg-orange-500 text-white shadow-lg shadow-orange-950/30" : "text-blue-100 hover:bg-white/10"}`}>
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-6 left-4 right-4 rounded-3xl bg-white/10 p-4 text-sm text-blue-100 ring-1 ring-white/10">
          <p className="font-bold text-white">Role-ready access</p>
          <p className="mt-1">Admin, Sales Rep, and Office Staff permissions are modeled in Supabase.</p>
        </div>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex h-20 items-center gap-4 px-4 sm:px-6 lg:px-8">
            <button onClick={() => setOpen(true)} className="rounded-xl border p-2 lg:hidden"><Menu className="h-5 w-5" /></button>
            <div className="relative max-w-xl flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition focus:border-[#0f2156] focus:bg-white" placeholder="Search leads, customers, jobs..." />
            </div>
            <button className="rounded-2xl border border-slate-200 p-3 text-slate-600 hover:bg-slate-50"><Bell className="h-5 w-5" /></button>
            <button onClick={logout} className="hidden items-center gap-2 rounded-2xl bg-[#07183f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0f2156] sm:flex">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
