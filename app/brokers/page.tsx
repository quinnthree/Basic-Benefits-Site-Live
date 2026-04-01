"use client"

import { Button } from "@/components/ui/button"
import { Handshake, Layers, Headset, TrendingUp, Building2, Shield } from "lucide-react"
import { useState } from "react"

export default function BrokersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    vertical: "",
    volume: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="pt-24">
      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden min-h-[80vh] flex flex-col justify-center"
        style={{
          backgroundColor: "#000836",
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 24px 24px",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Section Label */}
            <p
              className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
              style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
            >
              BROKER & GA PARTNERSHIP
            </p>

            {/* Headline */}
            <h1
              className="text-white font-extrabold"
              style={{
                fontSize: "clamp(40px, 5.5vw, 68px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="block">Your clients are already</span>
              <span className="block italic text-[#16B2F7]">looking.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 font-light max-w-[580px]"
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                fontSize: "1.125rem",
                fontFamily: "var(--font-sans)",
              }}
            >
              Employers in staffing, PEOs, hospitality, and home health are actively searching for MEC and MV
              alternatives at every renewal cycle. Be the broker who brings it to them first — before someone else does.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                asChild
              >
                <a href="#partner-form">Become a Distribution Partner</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
              >
                Download the Broker Overview
              </Button>
            </div>
          </div>
        </div>

        {/* Stat Bar */}
        <div
          className="w-full"
          style={{
            backgroundColor: "rgba(22,178,247,0.08)",
            borderTop: "1px solid rgba(22,178,247,0.2)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { number: "4", label: "MEC plan tiers — WellCare through VitalCare" },
                { number: "3", label: "MV plan tiers — Essential, Premium, and Max" },
                { number: "6+", label: "Ancillary add-ons including dental, vision, and critical care" },
                { number: "1", label: "Dedicated account contact — not a ticket queue" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p
                    className="text-[#16B2F7] font-extrabold"
                    style={{ fontSize: "42px", fontFamily: "var(--font-sans)" }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: URGENCY STRIP */}
      <section className="bg-[#16B2F7]" style={{ padding: "32px 0" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-[560px]">
              <h2
                className="text-[#000836] font-extrabold"
                style={{ fontSize: "28px", fontFamily: "var(--font-sans)" }}
              >
                The DTC door is open.
              </h2>
              <p
                className="mt-2"
                style={{
                  color: "rgba(0,8,54,0.8)",
                  fontSize: "15px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Employers can access Basic Benefits directly. The brokers who partner with us make sure that
                conversation happens through them — not around them.
              </p>
            </div>
            <Button
              className="bg-[#000836] hover:bg-[#0a1445] text-white font-semibold px-6 py-3 rounded-lg w-fit"
              asChild
            >
              <a href="#partner-form">Protect Your Client Relationships →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PARTNER WITH BB */}
      <section className="bg-[#F7F8F9]" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
              style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
            >
              THE BROKER ADVANTAGE
            </p>
            <h2
              className="text-[#000836] font-extrabold"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="block">Built for brokers.</span>
              <span className="block italic text-[#16B2F7]">Not around them.</span>
            </h2>
            <p
              className="mt-6 mx-auto max-w-2xl"
              style={{
                color: "#828993",
                fontSize: "1rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-sans)",
              }}
            >
              We operate as a wholesale extension of your practice. You own the client relationship. We provide the
              product depth, the compliance infrastructure, and the support to help you win and keep complex cases.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Handshake,
                title: "You Own the Relationship",
                body: "Your name stays on the case. We work behind the scenes as your benefits infrastructure — never direct to your client without you.",
              },
              {
                icon: Layers,
                title: "A Menu Your Clients Can't Find Elsewhere",
                body: "Four MEC tiers, three MV tiers, Delta Dental, VSP Vision, Critical Care, Hospital Indemnity, and a full virtual care bundle. Build the right stack for every case size and industry.",
              },
              {
                icon: Headset,
                title: "Hands-On Support. Real Access.",
                body: "Dedicated account contact from day one. Quick turnaround on quotes. Direct line when you need answers — not a support ticket.",
              },
              {
                icon: TrendingUp,
                title: "Competitive Commissions",
                body: "Structured commission splits built for sustainable recurring revenue. We're transparent on margins so you can price confidently and win more cases.",
              },
              {
                icon: Building2,
                title: "Specialized in Your Hardest Cases",
                body: "PEOs, staffing firms, hospitality groups, and home health operators. We know these verticals — and we know how to structure compliant, competitive plans for variable and hourly workforces.",
              },
              {
                icon: Shield,
                title: "Backed by Proven Infrastructure",
                body: "Our MEC and MV plans are administered by one of the nation's largest ACA compliance plan administrators — giving you institutional credibility behind every proposal.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8"
                style={{
                  border: "1px solid #D0D2D8",
                  borderTop: "3px solid #16B2F7",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#000836" }}
                >
                  <card.icon className="w-6 h-6 text-[#16B2F7]" />
                </div>
                <h3
                  className="text-[#000836] font-semibold mb-2"
                  style={{ fontSize: "18px", fontFamily: "var(--font-sans)" }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#828993", fontSize: "14px", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VERTICAL CALLOUTS */}
      <section
        style={{
          backgroundColor: "#000836",
          backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
          padding: "80px 0",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
              style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
            >
              INDUSTRIES WE KNOW
            </p>
            <h2
              className="text-white font-extrabold"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="block">Where we win</span>
              <span className="block italic text-[#16B2F7]">the most cases.</span>
            </h2>
            <p
              className="mt-6 mx-auto max-w-xl"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-sans)",
              }}
            >
              Our plan structure was built for workforces that traditional insurance ignores. If your book includes any
              of these verticals, we should talk.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                badge: "STAFFING",
                title: "Staffing Firms",
                body: "High turnover, variable hours, and ACA exposure on every large account. MEC coverage closes the compliance gap without blowing the cost model.",
              },
              {
                badge: "PEO",
                title: "PEOs & HR Outsourcing",
                body: "PEO clients expect benefits depth. Our full plan stack — MEC through MV plus ancillaries — gives you a complete benefits story at a competitive PEPM.",
              },
              {
                badge: "HOSPITALITY",
                title: "Hospitality Groups",
                body: "Restaurants, hotels, and entertainment venues with hourly workforces need ACA compliance at scale. We've structured these cases before. We know the margins.",
              },
              {
                badge: "HOME HEALTH",
                title: "Home Health & Care Agencies",
                body: "Caregiver workforces need real benefits — not just compliance paperwork. Virtual care plus MEC gives them daily-use value and keeps you sticky at renewal.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-xl p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(22,178,247,0.2)",
                  borderTop: "3px solid #16B2F7",
                }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-[#16B2F7] font-bold mb-4"
                  style={{
                    backgroundColor: "rgba(22,178,247,0.15)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {card.badge}
                </span>
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontSize: "18px", fontFamily: "var(--font-sans)" }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PLAN DEPTH PREVIEW */}
      <section className="bg-[#F7F8F9]" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
              style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
            >
              THE PRODUCT STACK
            </p>
            <h2
              className="text-[#000836] font-extrabold"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="block">More plan options.</span>
              <span className="block italic text-[#16B2F7]">More cases you can win.</span>
            </h2>
            <p
              className="mt-6 mx-auto max-w-xl"
              style={{
                color: "#828993",
                fontSize: "1rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-sans)",
              }}
            >
              Every plan below is available to broker and GA partners. Mix and match to build the right proposal for
              each group.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT COLUMN - Compliance Plans */}
            <div>
              <p
                className="text-[#16B2F7] text-xs font-bold uppercase mb-6"
                style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
              >
                COMPLIANCE PLANS
              </p>

              {/* MEC Plans */}
              <div className="mb-6">
                <h3
                  className="text-[#000836] font-semibold mb-3"
                  style={{ fontSize: "18px", fontFamily: "var(--font-sans)" }}
                >
                  Acute Care (MEC) Plans
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["WellCare", "KeyCare", "FlexCare", "VitalCare"].map((tier) => (
                    <span
                      key={tier}
                      className="px-3 py-1 rounded-full text-[#16B2F7] text-sm"
                      style={{
                        backgroundColor: "rgba(22,178,247,0.1)",
                        border: "1px solid rgba(22,178,247,0.3)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {tier}
                    </span>
                  ))}
                </div>
                <p style={{ color: "#828993", fontSize: "14px", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                  Four tiers from preventive-only through urgent care and behavioral health. Satisfies ACA Employer
                  Penalty A. Minimum 10 enrolled lives.
                </p>
              </div>

              <div className="border-t border-[#D0D2D8] my-6" />

              {/* MV Plans */}
              <div>
                <h3
                  className="text-[#000836] font-semibold mb-3"
                  style={{ fontSize: "18px", fontFamily: "var(--font-sans)" }}
                >
                  Restricted Medical (MV) Plans
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Essential", "Premium", "Max"].map((tier) => (
                    <span
                      key={tier}
                      className="px-3 py-1 rounded-full text-[#16B2F7] text-sm"
                      style={{
                        backgroundColor: "rgba(22,178,247,0.1)",
                        border: "1px solid rgba(22,178,247,0.3)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {tier}
                    </span>
                  ))}
                </div>
                <p style={{ color: "#828993", fontSize: "14px", lineHeight: 1.6, fontFamily: "var(--font-sans)" }}>
                  Bronze-level major medical. Hospitalization, surgery, specialist visits, and Rx. Satisfies ACA minimum
                  value threshold. Minimum 5 enrolled lives.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Ancillary Add-Ons */}
            <div>
              <p
                className="text-[#16B2F7] text-xs font-bold uppercase mb-6"
                style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
              >
                ANCILLARY ADD-ONS
              </p>

              <div className="space-y-3">
                {[
                  { title: "Delta Preventive Dental", sub: "Cleanings & X-rays covered 100%" },
                  { title: "Delta Dental 1000 / 1500", sub: "Full coverage including basic & major services" },
                  { title: "VSP Vision", sub: "$10 copay exams, $130 frame allowance" },
                  { title: "Critical Care — $10K / $25K", sub: "Cancer, heart attack, stroke lump-sum benefit" },
                  { title: "ExtraCare Hospital Indemnity — Low / High", sub: "Hospital admission, surgery, and ER benefits" },
                  {
                    title: "Virtual Care Bundle",
                    sub: "Primary, urgent, behavioral health + EAP, Rx, GLP-1, dental, pet care, lifestyle",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg px-5 py-4"
                    style={{
                      border: "1px solid #D0D2D8",
                      borderLeft: "3px solid #16B2F7",
                    }}
                  >
                    <p
                      className="text-[#000836] font-semibold"
                      style={{ fontSize: "14px", fontFamily: "var(--font-sans)" }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: "#828993", fontSize: "13px", fontFamily: "var(--font-sans)" }}>{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p
            className="mt-10 text-center italic"
            style={{ color: "#828993", fontSize: "14px", fontFamily: "var(--font-sans)" }}
          >
            Pricing is custom-quoted based on group size, industry, and selected components. No published rate sheets —
            every proposal is built for the case.
          </p>
        </div>
      </section>

      {/* SECTION 6: PARTNER FORM */}
      <section
        id="partner-form"
        style={{
          backgroundColor: "#000836",
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 24px 24px",
          padding: "80px 0",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <p
              className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
              style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
            >
              GET STARTED
            </p>
            <h2
              className="text-white font-extrabold"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="block">Let&apos;s build your</span>
              <span className="block italic text-[#16B2F7]">book together.</span>
            </h2>
            <p
              className="mt-6 mx-auto max-w-xl"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-sans)",
              }}
            >
              Tell us about your practice and we&apos;ll reach out within one business day to discuss plan options,
              commission structure, and how to get your first case quoted.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-[560px] mx-auto">
            <div
              className="bg-white rounded-2xl p-10"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#16B2F7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#16B2F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#000836] font-semibold text-lg" style={{ fontFamily: "var(--font-sans)" }}>
                    Thanks — we&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[#000836] text-sm mb-1.5"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#000836] text-sm mb-1.5"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[#000836] text-sm mb-1.5"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[#000836] text-sm mb-1.5"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="block text-[#000836] text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                      Company / Agency Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{
                        border: "1px solid #D0D2D8",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block text-[#000836] text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                      style={{
                        border: "1px solid #D0D2D8",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      <option value="">Select your role</option>
                      <option value="independent">Independent Broker</option>
                      <option value="ga">General Agent / MGA</option>
                      <option value="peo">PEO / HR Outsourcing</option>
                      <option value="consultant">Benefits Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Row 5 */}
                  <div>
                    <label className="block text-[#000836] text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                      Primary Vertical
                    </label>
                    <select
                      name="vertical"
                      value={formData.vertical}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                      style={{
                        border: "1px solid #D0D2D8",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      <option value="">Select your primary vertical</option>
                      <option value="staffing">Staffing</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="homehealth">Home Health / Care</option>
                      <option value="peo">PEO</option>
                      <option value="general">General Employer Groups</option>
                      <option value="mixed">Mixed / Multiple Verticals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Row 6 */}
                  <div>
                    <label className="block text-[#000836] text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                      Estimated Monthly Case Volume
                    </label>
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white"
                      style={{
                        border: "1px solid #D0D2D8",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      <option value="">Select volume</option>
                      <option value="1-5">1–5 cases per month</option>
                      <option value="6-15">6–15 cases per month</option>
                      <option value="16-30">16–30 cases per month</option>
                      <option value="30+">30+ cases per month</option>
                    </select>
                  </div>

                  {/* Row 7 */}
                  <div>
                    <label className="block text-[#000836] text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                      Message / Notes
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current book, target markets, or any specific plan questions."
                      className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                      style={{
                        border: "1px solid #D0D2D8",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold py-3.5 rounded-lg"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {isSubmitting ? "Submitting..." : "Request Partnership Access →"}
                  </Button>
                </form>
              )}
            </div>

            {/* Below form text */}
            <p
              className="mt-4 text-center"
              style={{ color: "#828993", fontSize: "12px", fontFamily: "var(--font-sans)" }}
            >
              Your information is never shared. No spam. Direct response only.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
