"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar, X } from "lucide-react";
import { BOOKING_WIDGET_URL } from "@/lib/constants";

const BBB_BADGES = [
  {
    href: "https://www.bbb.org/us/az/phoenix/profile/roofing-contractors/xrp-roofing-1126-1000165671/#sealclick",
    src: "https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-200-42-bbb-1000165671.png",
    width: 200,
    height: 42,
    className: "h-[34px] sm:h-[42px] w-auto",
  },
  {
    href: "https://www.bbb.org/pacific-southwest/customer-reviews/roofing-contractors/xrp-roofing-in-phoenix-az-1000165671/add/",
    src: "https://seal-central-northern-western-arizona.bbb.org/customer-reviews/badge-7-bbb-1000165671.png",
    width: 120,
    height: 60,
    className: "h-[42px] sm:h-[50px] w-auto",
  },
];

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

  const showBooking = pathname !== "/book";

  return (
    <>
      <div className="fixed z-50 right-4 bottom-20 lg:bottom-6 lg:right-6 flex items-center gap-2 sm:gap-3">
        {BBB_BADGES.map((badge) => (
          <a
            key={badge.href}
            href={badge.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block bg-white rounded-xl p-1 sm:p-1.5 shadow-lg ring-1 ring-gray-200 transition-transform duration-200 hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.src}
              style={{ border: 0 }}
              alt="XRP Roofing BBB Business Review"
              width={badge.width}
              height={badge.height}
              className={badge.className}
            />
          </a>
        ))}
        {showBooking && (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Book a free roof inspection online"
            className="relative flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base px-5 py-3.5 rounded-full ring-4 ring-white shadow-[0_8px_30px_rgba(234,88,12,0.55)] hover:scale-105 transition-all"
          >
            <span className="absolute inset-0 rounded-full bg-orange-500 opacity-60 animate-ping motion-reduce:hidden -z-10" aria-hidden="true" />
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">Book Online</span>
          </button>
        )}
      </div>

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
