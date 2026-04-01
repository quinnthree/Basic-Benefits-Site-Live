import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_EMAIL = "Basic Benefits <onboarding@basicbenefits.com>";
const TO_EMAIL = "info@basicbenefits.com";

const INQUIRY_LABELS: Record<string, string> = {
  general: "General Inquiry",
  employer_quote: "Employer / Group Quote",
  broker_partnership: "Broker or GA Partnership",
  member_support: "Member Support",
  billing: "Billing Question",
  media: "Media / Press",
  other: "Other",
};

function buildEmailHtml({
  inquiryType,
  firstName,
  lastName,
  email,
  phone,
  companyName,
  message,
  timestamp,
}: {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
  timestamp: string;
}) {
  const inquiryLabel =
    INQUIRY_LABELS[inquiryType] || inquiryType || "Not specified";

  const priorityFlag =
    inquiryType === "broker_partnership" || inquiryType === "employer_quote"
      ? `
    <tr>
      <td style="padding: 12px 32px 0;">
        <div style="
          background: #FEF9C3;
          border: 1px solid #854D0E;
          border-radius: 6px;
          padding: 10px 16px;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: bold;
          color: #854D0E;
        ">
          ⚡ ${
            inquiryType === "broker_partnership"
              ? "BROKER PARTNERSHIP INQUIRY"
              : "EMPLOYER QUOTE REQUEST"
          } — prioritize response
        </div>
      </td>
    </tr>`
      : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="
  margin: 0;
  padding: 0;
  background-color: #F7F8F9;
  font-family: Arial, sans-serif;
">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="
          max-width: 600px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        ">

          <!-- HEADER -->
          <tr>
            <td style="
              background-color: #000836;
              padding: 24px 32px;
              border-bottom: 3px solid #16B2F7;
            ">
              <div style="
                color: #16B2F7;
                font-size: 11px;
                font-weight: bold;
                letter-spacing: 3px;
                text-transform: uppercase;
                margin-bottom: 6px;
              ">BASIC BENEFITS</div>
              <div style="
                color: #ffffff;
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 4px;
              ">Contact Form Submission</div>
              <div style="
                color: rgba(255,255,255,0.45);
                font-size: 12px;
              ">${timestamp}</div>
            </td>
          </tr>

          <!-- PRIORITY FLAG -->
          ${priorityFlag}

          <!-- INQUIRY TYPE BADGE -->
          <tr>
            <td style="padding: 20px 32px 0;">
              <div style="
                display: inline-block;
                background: #E0F5FE;
                border: 1px solid #0277A8;
                border-radius: 6px;
                padding: 8px 16px;
                font-size: 13px;
                font-weight: bold;
                color: #0277A8;
              ">RE: ${inquiryLabel}</div>
            </td>
          </tr>

          <!-- SUMMARY BLOCK -->
          <tr>
            <td style="padding: 16px 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: #ffffff;
                border: 1px solid #D0D2D8;
                border-radius: 8px;
                overflow: hidden;
              ">
                <tr>
                  <td style="padding: 24px;">
                    <!-- Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" 
                      style="margin-bottom: 12px;">
                      <tr>
                        <td width="140" style="
                          color: #828993;
                          font-size: 13px;
                          vertical-align: top;
                          padding-right: 16px;
                        ">Name</td>
                        <td style="
                          color: #000836;
                          font-size: 13px;
                          font-weight: bold;
                        ">${firstName} ${lastName}</td>
                      </tr>
                    </table>
                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-bottom: 12px;">
                      <tr>
                        <td width="140" style="
                          color: #828993;
                          font-size: 13px;
                          vertical-align: top;
                          padding-right: 16px;
                        ">Email</td>
                        <td style="
                          color: #000836;
                          font-size: 13px;
                          font-weight: bold;
                        ">
                          <a href="mailto:${email}" style="
                            color: #16B2F7;
                            text-decoration: none;
                          ">${email}</a>
                        </td>
                      </tr>
                    </table>
                    <!-- Phone -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-bottom: 12px;">
                      <tr>
                        <td width="140" style="
                          color: #828993;
                          font-size: 13px;
                          vertical-align: top;
                          padding-right: 16px;
                        ">Phone</td>
                        <td style="
                          color: #000836;
                          font-size: 13px;
                          font-weight: bold;
                        ">${phone || "Not provided"}</td>
                      </tr>
                    </table>
                    <!-- Company -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-bottom: 0;">
                      <tr>
                        <td width="140" style="
                          color: #828993;
                          font-size: 13px;
                          vertical-align: top;
                          padding-right: 16px;
                        ">Company</td>
                        <td style="
                          color: #000836;
                          font-size: 13px;
                          font-weight: bold;
                        ">${companyName || "Not provided"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE BLOCK -->
          <tr>
            <td style="padding: 16px 32px 0;">
              <div style="
                background: #F0F9FF;
                border-left: 3px solid #16B2F7;
                border-radius: 0 6px 6px 0;
                padding: 20px 24px;
              ">
                <div style="
                  color: #16B2F7;
                  font-size: 11px;
                  font-weight: bold;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  margin-bottom: 10px;
                ">MESSAGE</div>
                <div style="
                  color: #000836;
                  font-size: 14px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                ">${message}</div>
              </div>
            </td>
          </tr>

          <!-- ACTION BLOCK -->
          <tr>
            <td style="padding: 16px 32px 24px;">
              <div style="
                background: #000836;
                border-radius: 0 0 8px 8px;
                padding: 20px 24px;
              ">
                <div style="
                  color: rgba(255,255,255,0.65);
                  font-size: 13px;
                  margin-bottom: 12px;
                ">Reply directly to this email 
                to respond to ${firstName}.</div>
                <a href="mailto:${email}" style="
                  display: inline-block;
                  background: #16B2F7;
                  color: #000836;
                  font-size: 13px;
                  font-weight: bold;
                  padding: 10px 24px;
                  border-radius: 6px;
                  text-decoration: none;
                ">Reply to ${firstName} →</a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="
              padding: 16px 32px;
              border-top: 1px solid #D0D2D8;
              text-align: center;
            ">
              <div style="
                color: #828993;
                font-size: 11px;
                margin-bottom: 4px;
              ">
                Basic Benefits LLC · 
                basicbenefits.com · 
                855-617-8205
              </div>
              <div style="color: #828993; font-size: 11px;">
                Submitted via basicbenefits.com/contact
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      inquiryType,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      message,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const inquiryLabel =
      INQUIRY_LABELS[inquiryType] || inquiryType || "General Inquiry";

    const subject = `New Contact: ${inquiryLabel} — ${firstName} ${lastName}${
      companyName ? ` | ${companyName}` : ""
    }`;

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = buildEmailHtml({
      inquiryType,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      message,
      timestamp,
    });

    if (!resend) {
      console.warn("Resend API key not configured.");
      return NextResponse.json({
        success: false,
        error: "Email service not configured",
      }, { status: 500 });
    }

    try {
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        html,
        reply_to: email,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json({
          success: false,
          error: error.message || "Failed to send email",
        }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError);
      return NextResponse.json({
        success: false,
        error: emailError instanceof Error ? emailError.message : "Failed to send email",
      }, { status: 500 });
    }

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
