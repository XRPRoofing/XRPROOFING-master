import type { Metadata } from "next";
import AuthForm from "@/components/crm/AuthForm";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return <AuthForm mode="reset" />;
}
