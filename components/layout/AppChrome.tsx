import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import PublicShell from "@/components/layout/PublicShell";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <PublicShell
      header={<Header />}
      footer={<Footer />}
      mobileCta={<MobileCtaBar />}
    >
      {children}
    </PublicShell>
  );
}
