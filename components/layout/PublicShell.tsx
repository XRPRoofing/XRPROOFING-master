"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STANDALONE_PREFIXES = ["/crm", "/proposal", "/invoice", "/login", "/signup", "/forgot-password", "/reset-password"];

const ENGAGEMENT_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"] as const;
const FALLBACK_DELAY_MS = 6000;

/**
 * Loads the chat widget once the visitor engages with the page, or after a short
 * delay for visitors who never interact. Keeps the widget fully functional while
 * off the critical path.
 */
function useVisitorEngaged() {
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (engaged) return;

    const engage = () => setEngaged(true);
    ENGAGEMENT_EVENTS.forEach((event) =>
      window.addEventListener(event, engage, { once: true, passive: true })
    );
    const timer = window.setTimeout(engage, FALLBACK_DELAY_MS);

    return () => {
      ENGAGEMENT_EVENTS.forEach((event) => window.removeEventListener(event, engage));
      window.clearTimeout(timer);
    };
  }, [engaged]);

  return engaged;
}

interface PublicShellProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  mobileCta: React.ReactNode;
}

export default function PublicShell({ children, header, footer, mobileCta }: PublicShellProps) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some((prefix) => pathname?.startsWith(prefix));
  const visitorEngaged = useVisitorEngaged();

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
      {mobileCta}
      {visitorEngaged && (
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a101e66975ecd30311851c1"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
