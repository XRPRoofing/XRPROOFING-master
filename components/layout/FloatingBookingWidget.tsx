"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar, X } from "lucide-react";
import { BOOKING_WIDGET_URL } from "@/lib/constants";

export default function FloatingBookingWidget() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname === "/book") return null;

  return (
    <>
      <button
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
            className="relative bg-white w-full sm:max-w-3xl h-[92vh] sm:h-[85vh] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
              <h2 className="font-bold text-gray-900 text-sm sm:text-base">Book Your Free Roof Inspection</h2>
              <button
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
