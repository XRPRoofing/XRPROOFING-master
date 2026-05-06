import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    "XRP Roofing Privacy Policy: what data we collect, how it is used, your choices, and our SMS/text messaging data practices. We do not share or sell phone numbers or SMS opt-in data.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "April 16, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Legal
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">

            <div>
              <p>
                {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
                This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                It applies to our website <a href={SITE_URL} className="text-orange-600 hover:underline">{SITE_URL}</a>,
                our phone calls, and our SMS/text messaging program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="mb-3">We collect the following categories of information directly from you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> name, phone number, email address, and service address.</li>
                <li><strong>Service request details:</strong> description of roofing issue, property type, preferred contact time, photos you choose to send us.</li>
                <li><strong>Communication records:</strong> records of calls, SMS/text messages, and emails exchanged with us.</li>
                <li><strong>Website usage data:</strong> IP address, browser type, pages viewed, and approximate location, collected through standard analytics and cookies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your service request and schedule inspections or repairs.</li>
                <li>Send appointment confirmations, reminders, technician arrival updates, job status updates, and missed-call follow-ups by SMS or phone.</li>
                <li>Provide estimates, invoices, warranty records, and customer support.</li>
                <li>Improve our website and services and comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">3. SMS / Text Messaging Privacy</h2>
              <p className="mb-3">
                When you opt in to receive SMS messages from {SITE_NAME} &mdash; by submitting a form on our website and
                providing explicit consent through a required checkbox &mdash; we collect your mobile number and consent record
                (timestamp and opt-in source). We do not send messages without explicit consent collected through this form.
              </p>
              <p className="mb-3 font-semibold text-gray-900">
                We do not sell, rent, share, or disclose your mobile phone number, SMS opt-in data, or SMS consent records to any third party
                or affiliate for their marketing or promotional purposes. Mobile opt-in data and consent are never shared with third parties.
              </p>
              <p>
                Message frequency varies based on your service request. Message and data rates may apply.
                You may opt out at any time by replying <strong>STOP</strong>, or get help by replying <strong>HELP</strong>.
                See our <Link href="/terms" className="text-orange-600 hover:underline">Terms &amp; Conditions</Link> for the full SMS program terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">4. How We Share Information</h2>
              <p className="mb-3">We only share personal information in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> companies that help us operate our business (for example, our SMS platform Twilio, our email provider, scheduling software, and payment processor), who are contractually required to protect your data and use it only to provide services to us.</li>
                <li><strong>Insurance &amp; warranty partners:</strong> when you specifically ask us to assist with an insurance claim or manufacturer warranty.</li>
                <li><strong>Legal compliance:</strong> when required by law, subpoena, court order, or to protect our rights, property, or safety.</li>
              </ul>
              <p className="mt-3 font-semibold text-gray-900">
                We do not sell your personal information and we do not share it with third parties for their own marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">5. Cookies &amp; Analytics</h2>
              <p>
                Our website uses cookies and similar technologies for basic functionality, security, and analytics (for example, to understand
                which pages are most viewed). You can control cookies through your browser settings. Disabling cookies may limit some features of the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">6. Data Retention</h2>
              <p>
                We keep your information only as long as needed to provide services, meet warranty obligations, and comply with legal,
                tax, or accounting requirements. When no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">7. Security</h2>
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission
                or storage is 100% secure, but we work to protect your data from unauthorized access, disclosure, or loss.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">8. Your Choices &amp; Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SMS opt-out:</strong> reply <strong>STOP</strong> to any message to unsubscribe.</li>
                <li><strong>Email opt-out:</strong> use the unsubscribe link in any email we send.</li>
                <li><strong>Access, correction, or deletion:</strong> contact us using the details below to request access to, correction of, or deletion of your personal information, subject to applicable law.</li>
                <li><strong>Do Not Call:</strong> you may request to be placed on our internal Do Not Call list at any time.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our services are intended for adults. We do not knowingly collect information from children under 13. If you believe a child
                has provided us information, please contact us and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Effective Date&rdquo; at the top indicates the latest revision.
                Material changes will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">11. Contact Us</h2>
              <p className="mb-2">If you have questions or requests about this Privacy Policy, contact us at:</p>
              <ul className="list-none space-y-1">
                <li><strong>{SITE_NAME}</strong></li>
                <li>{ADDRESS}</li>
                <li>Phone: <a href={PHONE_HREF} className="text-orange-600 hover:underline">{PHONE}</a></li>
                <li>Email: <a href={`mailto:${EMAIL}`} className="text-orange-600 hover:underline">{EMAIL}</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
