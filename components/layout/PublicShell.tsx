"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const STANDALONE_PREFIXES = ["/crm", "/proposal", "/invoice", "/login", "/signup", "/forgot-password", "/reset-password"];

interface PublicShellProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  mobileCta: React.ReactNode;
}

export default function PublicShell({ children, header, footer, mobileCta }: PublicShellProps) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some((prefix) => pathname?.startsWith(prefix));

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
      {mobileCta}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a101e66975ecd30311851c1"
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
    </>
  );
}
