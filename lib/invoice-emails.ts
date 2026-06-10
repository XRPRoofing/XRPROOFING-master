export interface InvoiceEmailPayload {
  event: "viewed" | "paid" | "sent";
  customerName: string;
  invoiceNumber: string;
  amount: number;
  customerEmail?: string;
}

export async function sendInternalInvoiceEmail(payload: InvoiceEmailPayload): Promise<void> {
  // Email notifications are handled externally (e.g. via Resend / SendGrid).
  // Replace this stub with your email provider implementation.
  console.log("[invoice-emails] event:", payload.event, "invoice:", payload.invoiceNumber);
}
