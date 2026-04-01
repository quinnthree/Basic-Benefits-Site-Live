"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Building2, Handshake, User, CheckCircle2, ChevronRight } from "lucide-react"

type InquiryType = 
  | ""
  | "general"
  | "employer"
  | "broker"
  | "member"
  | "billing"
  | "media"
  | "other"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: "" as InquiryType,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          message: formData.message,
          inquiryType: formData.inquiryType,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setSubmitError("Something went wrong. Please email us directly at info@basicbenefits.com")
      }
    } catch {
      setSubmitError("Something went wrong. Please email us directly at info@basicbenefits.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles = {
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #D0D2D8",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  }

  const labelStyles = {
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    fontWeight: 400,
    color: "#828993",
    marginBottom: "6px",
    display: "block",
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* SECTION 1: HERO */}
      <section
        className="pt-20"
        style={{
          backgroundColor: "#000836",
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 24px 24px",
          padding: "64px 0 48px",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Section Label */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "11px",
              color: "#16B2F7",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            GET IN TOUCH
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            <span className="text-white block">Let&apos;s find the right</span>
            <span className="block italic" style={{ color: "#16B2F7" }}>
              solution for you.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "16px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              maxWidth: "480px",
              margin: "0 auto 28px",
            }}
          >
            Whether you&apos;re an employer, a broker, or just exploring — we respond within one business day.
          </p>

          {/* Quick Path Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { label: "Employer / Group →", href: "/proposal" },
              { label: "Broker / GA →", href: "/brokers" },
              { label: "Member Support →", href: "/member-support" },
            ].map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="transition-colors"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "white",
                  backgroundColor: "rgba(22,178,247,0.12)",
                  border: "1px solid rgba(22,178,247,0.35)",
                  padding: "8px 20px",
                  borderRadius: "20px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(22,178,247,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(22,178,247,0.12)")}
              >
                {pill.label}
              </Link>
            ))}
          </div>

          {/* Small Note */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              fontStyle: "italic",
            }}
          >
            Looking to build a proposal?{" "}
            <Link href="/proposal" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>
              Use our proposal builder →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT LAYOUT */}
      <section style={{ backgroundColor: "#F7F8F9", padding: "72px 0" }}>
        <div
          className="container mx-auto px-4"
          style={{ maxWidth: "1100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-16">
            {/* LEFT COLUMN - Contact Info */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#000836",
                  marginBottom: "32px",
                }}
              >
                Contact Information
              </h2>

              <div className="flex flex-col gap-7">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#000836",
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#16B2F7" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: "11px",
                        color: "#16B2F7",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      PHONE
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#000836",
                      }}
                    >
                      855-617-8205
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#828993",
                      }}
                    >
                      Monday – Friday, 9am – 5pm ET
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#000836",
                    }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#16B2F7" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: "11px",
                        color: "#16B2F7",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      EMAIL
                    </p>
                    <a
                      href="mailto:info@basicbenefits.com"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#000836",
                      }}
                    >
                      info@basicbenefits.com
                    </a>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#828993",
                      }}
                    >
                      We respond within one business day
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "#000836",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#16B2F7" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: "11px",
                        color: "#16B2F7",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      ADDRESS
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#000836",
                      }}
                    >
                      917 Lily Creek Rd
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#828993",
                      }}
                    >
                      Louisville, KY 40243
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #D0D2D8", margin: "32px 0" }} />

              {/* Quick Links */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#000836",
                    marginBottom: "16px",
                  }}
                >
                  Looking for something specific?
                </h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Build a Proposal", href: "/proposal" },
                    { label: "Broker Partnership", href: "/brokers" },
                    { label: "Member Support", href: "/member-support" },
                    { label: "View Our Solutions", href: "/solutions" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#16B2F7",
                      }}
                    >
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #D0D2D8",
                borderRadius: "16px",
                padding: "40px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-12">
                  <div
                    className="flex items-center justify-center mx-auto mb-6"
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(22,178,247,0.1)",
                    }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#16B2F7" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 800,
                      fontSize: "24px",
                      color: "#000836",
                      marginBottom: "12px",
                    }}
                  >
                    Message received.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#828993",
                      marginBottom: "24px",
                    }}
                  >
                    We&apos;ll respond to {formData.email} within one business day.
                  </p>
                  <Link
                    href="/"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#16B2F7",
                    }}
                  >
                    Return to home →
                  </Link>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#000836",
                      marginBottom: "8px",
                    }}
                  >
                    Send Us a Message
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#828993",
                      marginBottom: "28px",
                    }}
                  >
                    Not sure where to start? Use the inquiry type below and we&apos;ll route your message to the right person.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Inquiry Type */}
                    <div>
                      <label style={labelStyles}>
                        Inquiry Type <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        style={{
                          ...inputStyles,
                          cursor: "pointer",
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23828993' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#16B2F7"
                          e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#D0D2D8"
                          e.target.style.boxShadow = "none"
                        }}
                      >
                        <option value="">Select inquiry type...</option>
                        <option value="general">General Inquiry</option>
                        <option value="employer">Employer / Group Quote</option>
                        <option value="broker">Broker or GA Partnership</option>
                        <option value="member">Member Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="media">Media / Press</option>
                        <option value="other">Other</option>
                      </select>

                      {/* Inline suggestions based on inquiry type */}
                      {formData.inquiryType === "employer" && (
                        <div
                          style={{
                            backgroundColor: "rgba(22,178,247,0.06)",
                            borderLeft: "3px solid #16B2F7",
                            borderRadius: "0 6px 6px 0",
                            padding: "10px 14px",
                            marginTop: "12px",
                          }}
                        >
                          <Link
                            href="/proposal"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#0277A8",
                            }}
                          >
                            For a detailed quote, try our Proposal Builder →
                          </Link>
                        </div>
                      )}
                      {formData.inquiryType === "broker" && (
                        <div
                          style={{
                            backgroundColor: "rgba(22,178,247,0.06)",
                            borderLeft: "3px solid #16B2F7",
                            borderRadius: "0 6px 6px 0",
                            padding: "10px 14px",
                            marginTop: "12px",
                          }}
                        >
                          <Link
                            href="/brokers"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#0277A8",
                            }}
                          >
                            Our broker partner page has everything you need →
                          </Link>
                        </div>
                      )}
                      {formData.inquiryType === "member" && (
                        <div
                          style={{
                            backgroundColor: "rgba(22,178,247,0.06)",
                            borderLeft: "3px solid #16B2F7",
                            borderRadius: "0 6px 6px 0",
                            padding: "10px 14px",
                            marginTop: "12px",
                          }}
                        >
                          <Link
                            href="/member-support"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#0277A8",
                            }}
                          >
                            Visit our Member Support page for faster assistance →
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyles}>
                          First Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          style={inputStyles}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#16B2F7"
                            e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#D0D2D8"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                      <div>
                        <label style={labelStyles}>
                          Last Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          style={inputStyles}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#16B2F7"
                            e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#D0D2D8"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyles}>
                          Email Address <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          style={inputStyles}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#16B2F7"
                            e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#D0D2D8"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                      <div>
                        <label style={labelStyles}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={inputStyles}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#16B2F7"
                            e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#D0D2D8"
                            e.target.style.boxShadow = "none"
                          }}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label style={labelStyles}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={inputStyles}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#16B2F7"
                          e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#D0D2D8"
                          e.target.style.boxShadow = "none"
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyles}>
                        Message <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          ...inputStyles,
                          resize: "vertical",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#16B2F7"
                          e.target.style.boxShadow = "0 0 0 3px rgba(22,178,247,0.12)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#D0D2D8"
                          e.target.style.boxShadow = "none"
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      style={{
                        backgroundColor: "#16B2F7",
                        color: "#000836",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        borderRadius: "8px",
                        padding: "14px 0",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </Button>

                    {submitError && (
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          color: "#EF4444",
                          textAlign: "center",
                        }}
                      >
                        {submitError}
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ALTERNATE PATHS BANNER */}
      <section
        style={{
          backgroundColor: "#000836",
          backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
          padding: "64px 0",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                color: "#16B2F7",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              NOT SURE WHERE TO START?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
              }}
            >
              <span className="text-white block">We&apos;ll point you</span>
              <span className="block italic" style={{ color: "#16B2F7" }}>
                in the right direction.
              </span>
            </h2>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                label: "EMPLOYERS",
                title: "Need coverage for your group?",
                body: "Use our proposal builder to spec your plan and request a custom quote.",
                cta: "Build a Proposal →",
                href: "/proposal",
              },
              {
                icon: Handshake,
                label: "BROKERS & GAS",
                title: "Want to add BB to your book?",
                body: "Visit our broker partner page to learn about commissions, support, and getting your first case quoted.",
                cta: "Partner With Us →",
                href: "/brokers",
              },
              {
                icon: User,
                label: "MEMBERS",
                title: "Already enrolled?",
                body: "Access your ID card, coverage details, and support resources through the member portal.",
                cta: "Member Support →",
                href: "/member-support",
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(22,178,247,0.2)",
                  borderTop: "3px solid #16B2F7",
                  borderRadius: "12px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center mx-auto mb-4"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#000836",
                    border: "1px solid rgba(22,178,247,0.3)",
                  }}
                >
                  <card.icon className="w-5 h-5" style={{ color: "#16B2F7" }} />
                </div>

                {/* Label Pill */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "10px",
                    color: "#16B2F7",
                    backgroundColor: "rgba(22,178,247,0.15)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    letterSpacing: "1px",
                    marginBottom: "16px",
                  }}
                >
                  {card.label}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {card.body}
                </p>

                {/* CTA Button */}
                <Link
                  href={card.href}
                  className="inline-block transition-colors"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#16B2F7",
                    border: "1px solid #16B2F7",
                    padding: "8px 20px",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(22,178,247,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
