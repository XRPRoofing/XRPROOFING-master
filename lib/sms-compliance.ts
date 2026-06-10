/**
 * Canonical TCPA / Twilio A2P 10DLC-compliant SMS copy for XRP Roofing (xrproofing.com).
 * Keep identical across: lead form checkbox, /terms opt-in disclosure, and Twilio submission.
 */

export const SMS_SENDER_NAME = "XRP Roofing";

export const SMS_OPT_IN_DISCLOSURE =
  "I consent to receive non-marketing text messages from XRP Roofing regarding appointment scheduling, project updates, service notifications, technician arrival updates, and job-related communications. Consent is not a condition of purchase or service.";

export const NON_MARKETING_SMS_CONSENT = SMS_OPT_IN_DISCLOSURE;

export const MARKETING_SMS_CONSENT =
  "I also consent to receive marketing text messages from XRP Roofing, including promotions, seasonal offers, and special deals. Consent is not a condition of purchase or service.";

/**
 * A2P 10DLC required standalone disclosure — must appear visibly near the opt-in checkbox.
 * Per Twilio/CTIA guidelines this must be a separate, clearly readable notice.
 */
export const SMS_REQUIRED_DISCLOSURE =
  "Message frequency varies. Msg & data rates may apply. Reply STOP to opt out. Reply HELP for assistance.";
