import { NextResponse } from "next/server"
import { Resend } from "resend"
import fs from "fs/promises"
import path from "path"

// Initialize Resend with the API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Simple function to log submissions as a fallback
async function logSubmission(data: any) {
  try {
    console.log("Form submission received:", JSON.stringify(data, null, 2))

    // In development, we could also write to a file
    if (process.env.NODE_ENV === "development") {
      try {
        const logsDir = path.join(process.cwd(), "logs")
        await fs.mkdir(logsDir, { recursive: true })

        const logFile = path.join(logsDir, "form-submissions.log")
        const logEntry = `${new Date().toISOString()} - ${JSON.stringify(data)}\n`

        await fs.appendFile(logFile, logEntry)
      } catch (fileError) {
        console.error("Error writing to log file:", fileError)
      }
    }

    return true
  } catch (error) {
    console.error("Error logging submission:", error)
    return false
  }
}

export async function POST(request: Request) {
  console.log("API route called")
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.fullName || !data.email) {
      return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 })
    }

    // Always log the submission as a fallback
    await logSubmission(data)

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : ""}
      ${data.employees ? `<p><strong>Employees:</strong> ${data.employees}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
      ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ""}
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `

    // Check if Resend is properly initialized
    if (!resend) {
      console.warn("Resend API key not configured. Skipping email sending but recording submission.")
      return NextResponse.json({
        success: true,
        message: "Thank you for your submission. We'll be in touch soon!",
        emailSent: false,
      })
    }

    // Try to send email with Resend
    try {
      console.log("Attempting to send email via Resend...")
      const { data: emailData, error } = await resend.emails.send({
        from: "Quinn Pearl <quinn.pearl@basicbenefits.com>",
        to: ["info@basicbenefits.com"],
        subject: "New Contact Form Submission",
        html: emailContent,
        reply_to: data.email,
      })

      console.log("Resend API response:", { data: emailData, error })

      if (error) {
        console.error("Resend API error:", error)

        // If the error is related to the sender domain not being verified, try with the default sender
        if (error.message?.includes("domain") || error.message?.includes("sender")) {
          console.log("Trying with default Resend sender domain...")
          const fallbackResult = await resend.emails.send({
            from: "Basic Benefits <onboarding@resend.dev>",
            to: ["info@basicbenefits.com"],
            subject: "New Contact Form Submission",
            html: emailContent,
            reply_to: data.email,
          })

          if (!fallbackResult.error) {
            console.log("Email sent successfully with fallback sender")
            return NextResponse.json({
              success: true,
              message: "Thank you for your submission. We'll be in touch soon!",
              emailSent: true,
              note: "Used fallback sender domain",
            })
          }
        }

        return NextResponse.json({
          success: true,
          message: "Thank you for your submission. We'll be in touch soon!",
          emailSent: false,
          error: error.message,
        })
      }

      console.log("Email sent successfully via Resend")
      return NextResponse.json({
        success: true,
        message: "Thank you for your submission. We'll be in touch soon!",
        emailSent: true,
      })
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError)
      return NextResponse.json({
        success: true,
        message: "Thank you for your submission. We'll be in touch soon!",
        emailSent: false,
        error: emailError instanceof Error ? emailError.message : String(emailError),
      })
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json({ success: false, error: "An unexpected error occurred" }, { status: 500 })
  }
}
