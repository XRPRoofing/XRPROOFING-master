import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, SITE_NAME, SITE_URL } from "@/lib/constants";
import { SMS_OPT_IN_DISCLOSURE } from "@/lib/sms-compliance";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description:
    "XRP Roofing Terms & Conditions, including our SMS/text messaging program terms: program description, message frequency, rates, HELP and STOP instructions, and support contact.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "April 16, 2026";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Legal
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Terms &amp; Conditions
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
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the {SITE_NAME} website,
                your engagement of our services, and your participation in our SMS/text messaging program.
                By using our website, submitting a service request, or opting in to text messages, you agree to these Terms.
              </p>
            </div>

            {/* SMS TERMS - most important for A2P review */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                SMS / Text Messaging Program Terms
              </h2>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Program Name</h3>
              <p>XRP Roofing Customer Service Notifications.</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Program Description</h3>
              <p>
                {SITE_NAME} sends transactional SMS messages to customers who request roofing services through our website.
                Messages include appointment confirmations, appointment reminders, technician-on-the-way updates, job status updates,
                and missed-call follow-ups. We do not send promotional or marketing texts through this program.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">How to Opt In</h3>
              <p>
                You can opt in by submitting your phone number through a contact form on <a href={SITE_URL} className="text-orange-600 hover:underline">{SITE_URL}</a>
                {" "}and checking the consent checkbox that states:
              </p>
              <p className="italic border-l-4 border-orange-400 pl-4 my-3 text-gray-800">
                &ldquo;{SMS_OPT_IN_DISCLOSURE}&rdquo;
              </p>
              <p>
                The checkbox is not pre-checked and is required before submission. We do not send messages without explicit consent
                collected through this form.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Message Frequency</h3>
              <p>
                Message frequency varies based on your service request. You will typically receive between 2 and 10 messages per service job.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Message &amp; Data Rates</h3>
              <p>
                <strong>Message and data rates may apply.</strong> Check with your mobile carrier for details on your plan.
                {SITE_NAME} does not charge you for receiving messages.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">How to Get Help</h3>
              <p>
                Reply <strong>HELP</strong> to any message for help, or contact us at <a href={PHONE_HREF} className="text-orange-600 hover:underline">{PHONE}</a>
                {" "}or <a href={`mailto:${EMAIL}`} className="text-orange-600 hover:underline">{EMAIL}</a>.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">How to Opt Out</h3>
              <p>
                You can cancel the SMS service at any time by replying <strong>STOP</strong> to any message. After replying STOP,
                you will receive a confirmation message and will not receive further messages. To rejoin, sign up again on our website
                or reply <strong>START</strong>.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Supported Carriers</h3>
              <p>
                Supported carriers include AT&amp;T, T-Mobile, Verizon Wireless, Sprint, Boost Mobile, MetroPCS, U.S. Cellular, Cricket,
                Virgin Mobile, and most other U.S. carriers. Carriers are not liable for delayed or undelivered messages.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Privacy</h3>
              <p>
                Information you share in connection with this SMS program is handled in accordance with our{" "}
                <Link href="/privacy-policy" className="text-orange-600 hover:underline">Privacy Policy</Link>.
                We do not share or sell your mobile phone number or SMS opt-in data with third parties or affiliates for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Use of Website</h2>
              <p>
                You agree to use our website only for lawful purposes. You may not attempt to gain unauthorized access, interfere with
                operation of the site, or use it in any way that violates applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Services &amp; Estimates</h2>
              <p>
                Requests submitted through our website or phone are service inquiries, not binding contracts. Written estimates and
                contracts provided separately govern the scope, price, and warranty of any work performed by {SITE_NAME}.
                All roofing work is performed by licensed and insured personnel in accordance with Arizona Registrar of Contractors requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, photos, and video, is the property of {SITE_NAME} or its
                licensors and is protected by copyright and trademark law. You may not reproduce or redistribute it without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Disclaimers</h2>
              <p>
                Information on this website is provided &ldquo;as is&rdquo; for general informational purposes. We make no warranty that
                the site will be error-free or uninterrupted. Any specific roofing advice should be confirmed by an on-site inspection.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {SITE_NAME} is not liable for any indirect, incidental, special, or consequential
                damages arising out of your use of the website or SMS program. Nothing in these Terms limits any rights you have as a
                consumer that cannot be waived under Arizona law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Arizona, without regard to its conflict-of-laws principles.
                Exclusive venue for any dispute is the state or federal courts located in Maricopa County, Arizona.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The &ldquo;Effective Date&rdquo; at the top indicates the latest revision.
                Continued use of our website or SMS program after a change means you accept the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Contact</h2>
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
