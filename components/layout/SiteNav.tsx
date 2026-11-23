"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { primaryNav, type NavEntry } from "@/lib/nav";

const itemClass =
  "px-2.5 py-2 text-gray-700 hover:text-[#1a3a8f] font-medium text-sm rounded-md hover:bg-[#eef2fb] transition-colors whitespace-nowrap";

function isGroup(entry: NavEntry): entry is Extract<NavEntry, { kind: "group" }> {
  return entry.kind === "group";
}

export default function SiteNav({
  variant,
  onNavigate,
}: {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    setOpenId(null);
    onNavigate?.();
  };

  if (variant === "desktop") {
    return (
      <nav ref={navRef} aria-label="Primary" className="hidden lg:flex order-last basis-full flex-wrap items-center gap-0.5 border-t border-gray-100 mt-1 pt-1">
        {primaryNav.map((entry) => {
          if (!isGroup(entry)) {
            return (
              <Link key={entry.href} href={entry.href} className={itemClass}>
                {entry.label}
              </Link>
            );
          }

          const panelId = `${baseId}-${entry.id}`;
          const open = openId === entry.id;
          const wide = entry.id === "areas" || entry.id === "services";

          return (
            <div
              key={entry.id}
              className="relative"
              onMouseEnter={() => setOpenId(entry.id)}
              onMouseLeave={(event) => {
                const next = event.relatedTarget;
                if (next instanceof Node && event.currentTarget.contains(next)) return;
                setOpenId((current) => (current === entry.id ? null : current));
              }}
              onBlur={(event) => {
                const next = event.relatedTarget;
                if (next instanceof Node && event.currentTarget.contains(next)) return;
                setOpenId((current) => (current === entry.id ? null : current));
              }}
            >
              <button
                type="button"
                className={`${itemClass} inline-flex items-center gap-1`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={(event) => {
                  // A mouse click follows mouseenter, which already opened the menu.
                  // Keep it open instead of toggling it shut. Keyboard activation still toggles.
                  if (event.detail === 0) {
                    setOpenId((current) => (current === entry.id ? null : entry.id));
                    return;
                  }
                  setOpenId(entry.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setOpenId(entry.id);
                    requestAnimationFrame(() => {
                      document.getElementById(panelId)?.querySelector("a")?.focus();
                    });
                  }
                }}
              >
                {entry.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div id={panelId} hidden={!open} className="absolute left-0 top-full z-50 pt-1">
                <ul
                  className={`bg-white shadow-xl rounded-xl border border-gray-100 py-2 max-h-[70vh] overflow-y-auto ${
                    wide ? "w-72" : "w-64"
                  }`}
                >
                  {entry.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#eef2fb] hover:text-[#1a3a8f] focus:bg-[#eef2fb] focus:text-[#1a3a8f] outline-none"
                        onClick={() => setOpenId(null)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </nav>
    );
  }

  return (
    <nav ref={navRef} aria-label="Primary" className="flex flex-col gap-1">
      {primaryNav.map((entry) => {
        if (!isGroup(entry)) {
          return (
            <Link key={entry.href} href={entry.href} className="px-3 py-2 text-gray-700 font-medium text-sm hover:text-orange-600" onClick={close}>
              {entry.label}
            </Link>
          );
        }

        const panelId = `${baseId}-${entry.id}`;
        const open = openId === entry.id;

        return (
          <div key={entry.id}>
            <button
              type="button"
              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 font-medium text-sm rounded-md hover:bg-gray-50"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId((current) => (current === entry.id ? null : entry.id))}
            >
              {entry.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <ul id={panelId} hidden={!open} className="pl-4 flex flex-col gap-1 pb-1">
              {entry.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 rounded-md" onClick={close}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
