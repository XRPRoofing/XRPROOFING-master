import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";

const reviews = [
  {
    name: "Mike T.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "XRP Roofing replaced our tile roof after monsoon damage and did an outstanding job. They matched the tile perfectly, finished on schedule, and the crew cleaned up everything. Our HOA approved the work without a single issue. Highly recommend.",
  },
  {
    name: "Sandra K.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "We had three different roofers look at a persistent leak that no one could fix. XRP found the actual cause on the first visit — a hidden flashing failure — and had it repaired the next day. Professional, honest, and fast. Worth every penny.",
  },
  {
    name: "James R.",
    location: "Gilbert, AZ",
    rating: 5,
    text: "Got quotes from four companies. XRP wasn't the cheapest but they were the most thorough — they actually got up on the roof and took photos before giving us an estimate. The replacement came out perfect. No surprise charges, no drama.",
  },
  {
    name: "Patricia M.",
    location: "Chandler, AZ",
    rating: 5,
    text: "Called XRP after a major haboob displaced a section of my shingles. They responded the same day, got temporary protection up, and scheduled permanent repairs within the week. The insurance claim process was seamless with their documentation.",
  },
  {
    name: "David L.",
    location: "Tempe, AZ",
    rating: 5,
    text: "We needed a commercial flat roof coating on our office building. XRP did the moisture scan, gave us a honest assessment that coating was the right call over replacement, and completed the work on budget. Building is noticeably cooler.",
  },
  {
    name: "Laura B.",
    location: "Mesa, AZ",
    rating: 5,
    text: "Outstanding work and communication throughout. The crew was professional and respectful of our property. They completed our full tile re-roof in three days, exactly as scheduled. Our roof looks brand new and the workmanship warranty gives us real peace of mind.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            Customer Reviews
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Hundreds of Arizona homeowners and businesses trust XRP Roofing. Here&apos;s what they have to say.
          </p>

          {/* Google Rating Badge */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-2xl px-5 py-3 transition-all duration-200 hover:scale-105 group"
          >
            {/* Google G logo */}
            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-gray-900">5.0</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">Google Reviews · 147+ reviews</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors ml-1" />
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              {/* Google G watermark */}
              <div className="flex items-center justify-between">
                <StarRating count={review.rating} />
                <svg className="w-5 h-5 opacity-30" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-9 h-9 bg-[#dde6f7] rounded-full flex items-center justify-center text-[#1a3a8f] font-bold text-sm flex-shrink-0">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl shadow-md border border-gray-100 px-8 py-6">
            <div className="text-left">
              <div className="font-bold text-gray-900 text-base">Happy with our work?</div>
              <div className="text-sm text-gray-500">Your review helps Arizona homeowners find us.</div>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#ffffff" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#ffffff" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#ffffff" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#ffffff" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
