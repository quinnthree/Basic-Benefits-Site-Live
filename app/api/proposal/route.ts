import { NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.companyName) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing" },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })

    const basePlanName = data.basePlanName || "None selected"
    const addOnsDisplay = data.addOnsDisplay || "None selected"
    const groupTypeLabel = data.groupTypeLabel || "Not specified"

    const emailSubject = `New Proposal Request — ${data.companyName} | ${basePlanName}`

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #F7F8F9; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F7F8F9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- HEADER BLOCK -->
          <tr>
            <td style="background-color: #000836; padding: 24px 32px; border-bottom: 3px solid #16B2F7; border-radius: 8px 8px 0 0;">
              <p style="margin: 0 0 8px 0; color: #16B2F7; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 3px;">
                BASIC BENEFITS
              </p>
              <p style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: bold;">
                New Proposal Request
              </p>
            </td>
          </tr>
          
          <!-- SUMMARY BLOCK -->
          <tr>
            <td style="background-color: #FFFFFF; border: 1px solid #D0D2D8; border-top: none; padding: 24px 32px;">
              
              <!-- Group Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Submitted</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${timestamp}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Group Type</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${groupTypeLabel}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Industry</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.industry || "Not specified"}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Group Size</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.groupSize || "Not specified"}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Effective Date</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.effectiveDate || "Not specified"}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Current Situation</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.currentSituation || "Not specified"}</td>
                </tr>
              </table>
              
              <!-- Divider -->
              <div style="border-top: 1px solid #E5E7EB; margin: 16px 0;"></div>
              
              <!-- Plan Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Base Plan Selected</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${basePlanName}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Help Selecting</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.needHelp ? "Yes" : "No"}</td>
                </tr>
              </table>
              
              <!-- Divider -->
              <div style="border-top: 1px solid #E5E7EB; margin: 16px 0;"></div>
              
              <!-- Add-Ons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Add-Ons Selected</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${addOnsDisplay}</td>
                </tr>
              </table>
              
              <!-- Divider -->
              <div style="border-top: 1px solid #E5E7EB; margin: 16px 0;"></div>
              
              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">First Name</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.firstName}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Last Name</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.lastName}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Company</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.companyName}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Email</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">
                    <a href="mailto:${data.email}" style="color: #16B2F7; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Phone</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Working with Broker</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.hasBroker || "Not specified"}</td>
                </tr>
                <tr>
                  <td width="160" style="color: #828993; font-size: 13px; padding: 6px 0; vertical-align: top;">Broker Name</td>
                  <td style="color: #000836; font-size: 13px; font-weight: bold; padding: 6px 0;">${data.brokerName || "N/A"}</td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          ${data.notes ? `
          <!-- NOTES BLOCK -->
          <tr>
            <td style="background-color: #FFFFFF; border: 1px solid #D0D2D8; border-top: none; padding: 0 32px 24px;">
              <div style="background-color: #F0F9FF; border-left: 3px solid #16B2F7; padding: 16px 20px;">
                <p style="margin: 0 0 8px 0; color: #16B2F7; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                  NOTES / QUESTIONS
                </p>
                <p style="margin: 0; color: #000836; font-size: 14px; line-height: 1.6;">
                  ${data.notes}
                </p>
              </div>
            </td>
          </tr>
          ` : ""}
          
          <!-- ACTION BLOCK -->
          <tr>
            <td style="background-color: #000836; padding: 20px 32px; border-radius: 0 0 8px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color: rgba(255,255,255,0.65); font-size: 13px; padding-bottom: 12px;">
                    Reply directly to this email to respond to ${data.firstName} at ${data.companyName}.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="mailto:${data.email}" style="display: inline-block; background-color: #16B2F7; color: #000836; padding: 10px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 14px;">
                      Reply to ${data.firstName} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td style="padding: 24px 0; text-align: center;">
              <p style="margin: 0; color: #828993; font-size: 12px;">
                Basic Benefits LLC · basicbenefits.com · 855-617-8205
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    if (!resend) {
      console.warn("Resend API key not configured.")
      return NextResponse.json({
        success: false,
        error: "Email service not configured",
      }, { status: 500 })
    }

    try {
      const { error } = await resend.emails.send({
        from: "Basic Benefits <onboarding@basicbenefits.com>",
        to: ["info@basicbenefits.com"],
        subject: emailSubject,
        html: emailHtml,
        reply_to: data.email,
      })

      if (error) {
        console.error("Resend API error:", error)
        return NextResponse.json({
          success: false,
          error: error.message || "Failed to send email",
        }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "Proposal request submitted successfully",
      })
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError)
      return NextResponse.json({
        success: false,
        error: emailError instanceof Error ? emailError.message : "Failed to send email",
      }, { status: 500 })
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
