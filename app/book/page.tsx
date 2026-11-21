import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { BOOKING_WIDGET_URL, PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";
import { BOOK_DESCRIPTION, BOOK_TITLE, pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = pageMetadata({
  title: BOOK_TITLE,
  description: BOOK_DESCRIPTION,
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Book Online" }]} />

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Book Online
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Schedule Your Free Inspection with {SITE_NAME}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose a date and time that works for you. Prefer to talk to someone?{" "}
            <a href={PHONE_HREF} className="text-orange-400 font-semibold hover:text-orange-300 inline-flex items-center gap-1">
              <Phone className="w-4 h-4" /> Call {PHONE}
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <iframe
              src={BOOKING_WIDGET_URL}
              width="100%"
              height="100%"
              style={{ border: "none", minHeight: 600 }}
              allowFullScreen
              title="Zuper Widget"
              className="w-full min-h-[600px] md:min-h-[800px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
