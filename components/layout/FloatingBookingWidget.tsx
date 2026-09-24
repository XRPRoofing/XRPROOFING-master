"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar, X } from "lucide-react";
import { BOOKING_WIDGET_URL } from "@/lib/constants";

export default function FloatingBookingWidget() {
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openedOn !== null && openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenedOn(null);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "button, iframe, [href], [tabindex]:not([tabindex='-1'])"
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  if (pathname === "/book") return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Book a free roof inspection online"
        className="fixed z-50 right-4 bottom-20 lg:bottom-6 lg:right-6 flex items-center gap-2 bg-[#0f2156] hover:bg-[#1a3a8f] text-white font-bold text-sm px-4 py-3 rounded-full shadow-xl transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Book Online</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Book a free roof inspection"
        >
          <div
            ref={dialogRef}
            className="relative bg-white w-full sm:max-w-3xl h-[92vh] sm:h-[85vh] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
              <h2 className="font-bold text-gray-900 text-sm sm:text-base">Book Your Free Roof Inspection</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close booking widget"
                className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={BOOKING_WIDGET_URL}
              title="Zuper Widget"
              allowFullScreen
              className="flex-1 w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
