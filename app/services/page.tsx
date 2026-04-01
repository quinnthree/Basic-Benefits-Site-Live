"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  FileText, 
  Headphones, 
  DollarSign, 
  Shield, 
  Laptop, 
  BarChart3,
  FileCheck,
  Zap,
  GraduationCap,
  Lock,
  Check,
  Building2,
  Users,
  UserCircle
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: "var(--font-sans)" }}>
      
      {/* SECTION 1: HERO */}
      <section
        className="relative"
        style={{
          backgroundColor: "#000836",
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 24px 24px",
          padding: "72px 0 56px",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Label */}
          <p
            className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            HOW WE WORK
          </p>

          {/* Headline */}
          <h1
            className="text-white font-extrabold mb-6"
            style={{
              fontSize: "clamp(36px, 4.5vw, 58px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            <span className="block">The infrastructure behind</span>
            <span className="block italic text-[#16B2F7]">your benefits program.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mx-auto mb-12"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
              maxWidth: "600px",
              lineHeight: 1.75,
              fontSize: "1rem",
            }}
          >
            Basic Benefits operates as a wholesale benefits platform — not a broker, not a carrier. 
            We sit between the plan administrator and your distribution channel, handling the 
            operational infrastructure that makes benefits programs run.
          </p>

          {/* Stat Callouts */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
            {[
              { number: "One", label: "Dedicated account contact per partner — not a support queue" },
              { number: "24/7", label: "Member portal and support access for enrolled employees" },
              { number: "1 Day", label: "Target turnaround on new case quotes and submissions" },
            ].map((stat, index) => (
              <div key={index} className="text-center max-w-[160px]">
                <p
                  className="text-[#16B2F7] font-extrabold mb-2"
                  style={{ fontSize: "36px" }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHOLESALE MODEL */}
      <section style={{ backgroundColor: "#F7F8F9", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              THE WHOLESALE MODEL
            </p>
            <h2
              className="font-extrabold mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "-1.5px",
                color: "#000836",
              }}
            >
              <span className="block">We work behind the scenes.</span>
              <span className="block italic text-[#16B2F7]">You own the relationship.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                color: "#828993",
                maxWidth: "640px",
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              Basic Benefits functions as the operational backbone of your benefits program. 
              Brokers, GAs, PEOs, and employer groups access our plan stack and infrastructure — 
              while we handle the complexity behind every enrollment, eligibility file, and compliance requirement.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN - Flow Diagram */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-col items-center">
                {/* Node 1 */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#000836" }}
                  >
                    <Building2 className="w-7 h-7 text-[#16B2F7]" />
                  </div>
                  <p className="font-semibold text-[#000836] text-[15px] mb-1">Plan Administrator</p>
                  <p className="text-[#828993] text-[13px] max-w-[200px]">
                    TPA infrastructure, plan documents, claims management
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-[2px] h-8 bg-[#16B2F7] my-2" />

                {/* Node 2 - Basic Benefits (highlighted) */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#16B2F7" }}
                  >
                    <Shield className="w-9 h-9 text-white" />
                  </div>
                  <p className="font-semibold text-[#000836] text-[16px] mb-1">Basic Benefits</p>
                  <p className="text-[#828993] text-[13px] max-w-[220px]">
                    Wholesale platform, eligibility, billing, compliance
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-[2px] h-8 bg-[#16B2F7] my-2" />

                {/* Node 3 */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#000836" }}
                  >
                    <Users className="w-7 h-7 text-[#16B2F7]" />
                  </div>
                  <p className="font-semibold text-[#000836] text-[15px] mb-1">Broker / GA / PEO</p>
                  <p className="text-[#828993] text-[13px] max-w-[200px]">
                    Distribution, client relationship, commission
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-[2px] h-8 bg-[#16B2F7] my-2" />

                {/* Node 4 */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#000836" }}
                  >
                    <UserCircle className="w-7 h-7 text-[#16B2F7]" />
                  </div>
                  <p className="font-semibold text-[#000836] text-[15px] mb-1">Employer Group / Member</p>
                  <p className="text-[#828993] text-[13px] max-w-[200px]">
                    Enrolled, covered, supported
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Value Statements */}
            <div className="flex flex-col">
              {[
                {
                  title: "Backed by institutional infrastructure.",
                  body: "Our MEC and MV plans are administered by one of the nation's largest ACA compliance plan administrators — giving every proposal institutional credibility and operational depth.",
                },
                {
                  title: "No carrier risk. No utilization exposure.",
                  body: "Fixed PEPM pricing means employers know their cost. Brokers know their margin. Nobody is surprised at renewal.",
                },
                {
                  title: "Custom-quoted. Never off-the-shelf.",
                  body: "Every case is priced for the group — group size, industry, selected components, and distribution model all factor in. No published rate sheets.",
                },
              ].map((statement, index) => (
                <div
                  key={index}
                  className="mb-8 last:mb-0"
                  style={{
                    borderLeft: "3px solid #16B2F7",
                    paddingLeft: "20px",
                  }}
                >
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#000836", fontSize: "16px" }}
                  >
                    {statement.title}
                  </p>
                  <p
                    style={{
                      color: "#828993",
                      fontSize: "14px",
                      lineHeight: 1.75,
                    }}
                  >
                    {statement.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section style={{ backgroundColor: "#F7F8F9", padding: "0 0 80px" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              WHAT WE HANDLE
            </p>
            <h2
              className="font-extrabold mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "-1.5px",
                color: "#000836",
              }}
            >
              Six operational pillars.
            </h2>
            <p
              className="mx-auto"
              style={{
                color: "#828993",
                maxWidth: "520px",
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              Every service below is included in the Basic Benefits wholesale relationship — 
              no add-on fees, no per-service billing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Enrollment & Eligibility Management",
                body: "Streamlined enrollment flows for employer groups and individual members. Automated eligibility feeds, 834 file processing, and real-time member record management via our clearinghouse infrastructure.",
                bullets: [
                  "Employer group and individual enrollment",
                  "Automated eligibility file generation",
                  "Real-time member record updates",
                  "EDI processing and vendor integration",
                ],
              },
              {
                icon: Headphones,
                title: "Member Support",
                body: "Enrolled members have direct access to support through the member portal, inbound email, and phone support. ID cards, coverage verification, and claims guidance handled directly.",
                bullets: [
                  "Member portal at basicbenefits.com",
                  "ID card and coverage documentation",
                  "Inbound support via phone and email",
                  "Claims guidance and provider lookup",
                ],
              },
              {
                icon: DollarSign,
                title: "Billing & Commission Management",
                body: "Self-billing architecture gives distribution partners control over payment timing and structure. Consolidated billing, funds-collected support, and structured commission splits built for recurring revenue.",
                bullets: [
                  "Self-billing and funds-collected structures",
                  "Consolidated employer billing",
                  "Tiered commission split management",
                  "Transparent margin reporting",
                ],
              },
              {
                icon: Shield,
                title: "Compliance & Plan Administration",
                body: "ACA compliance is built into every plan we offer. Plan documents, COBRA administration, summary plan descriptions, and regulatory reporting handled by our TPA infrastructure.",
                bullets: [
                  "ACA Employer Penalty A & B compliance",
                  "Plan documents and SPDs",
                  "COBRA administration",
                  "Regulatory reporting support",
                ],
              },
              {
                icon: Laptop,
                title: "Technology & Member Portal",
                body: "Employer groups and individual members access their benefits through a dedicated portal — plan information, ID cards, provider lookup, and support resources all in one place. Group admin access available.",
                bullets: [
                  "Individual member portal",
                  "Employer group admin module",
                  "Digital ID cards and coverage docs",
                  "Provider and pharmacy lookup",
                ],
              },
              {
                icon: BarChart3,
                title: "Reporting & Account Management",
                body: "Dedicated account contact for every broker and employer partner. Enrollment reporting, eligibility reconciliation, and case support available directly — no ticket queue, no automated responses.",
                bullets: [
                  "Dedicated account contact per partner",
                  "Enrollment and eligibility reporting",
                  "Case support and plan change management",
                  "Direct line for broker and GA partners",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8"
                style={{
                  border: "1px solid #D0D2D8",
                  borderTop: "3px solid #16B2F7",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#000836" }}
                >
                  <service.icon className="w-6 h-6 text-[#16B2F7]" />
                </div>
                <h3
                  className="font-semibold mb-3"
                  style={{ color: "#000836", fontSize: "17px" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    color: "#828993",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {service.body}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#16B2F7] mt-0.5 flex-shrink-0" />
                      <span style={{ color: "#828993", fontSize: "13px" }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPLIANCE CALLOUT */}
      <section
        style={{
          backgroundColor: "#000836",
          backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
          padding: "80px 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              ACA COMPLIANCE
            </p>
            <h2
              className="text-white font-extrabold mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "-1.5px",
              }}
            >
              <span className="block">We know the mandate.</span>
              <span className="block italic text-[#16B2F7]">Inside and out.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: "600px",
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              Every plan we offer is designed around ACA compliance requirements. Whether your 
              client needs Employer Penalty A protection, minimum value threshold coverage, or 
              both — we structure the plan to satisfy the requirement and document it correctly.
            </p>
          </div>

          {/* Compliance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MEC Card */}
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(22,178,247,0.2)",
                borderTop: "3px solid #16B2F7",
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold mb-4"
                style={{
                  backgroundColor: "rgba(22,178,247,0.15)",
                  color: "#16B2F7",
                }}
              >
                PENALTY A PROTECTION
              </span>
              <h3
                className="text-white font-semibold mb-3"
                style={{ fontSize: "18px" }}
              >
                Minimum Essential Coverage
              </h3>
              <p
                className="mb-5"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                Our MEC plan tiers — WellCare, KeyCare, FlexCare, and VitalCare — satisfy the 
                ACA Employer Mandate Penalty A requirement. Employers with 50+ full-time 
                equivalent employees avoid federal penalties while providing employees with 
                meaningful coverage.
              </p>
              <ul className="space-y-2">
                {[
                  "Satisfies ACA Employer Penalty A",
                  "Four plan tiers from preventive-only to full MEC+",
                  "Minimum 10 enrolled lives",
                  "Plan documents and SPDs included",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16B2F7] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MV Card */}
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(22,178,247,0.2)",
                borderTop: "3px solid #16B2F7",
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold mb-4"
                style={{
                  backgroundColor: "rgba(22,178,247,0.15)",
                  color: "#16B2F7",
                }}
              >
                MINIMUM VALUE
              </span>
              <h3
                className="text-white font-semibold mb-3"
                style={{ fontSize: "18px" }}
              >
                Restricted Medical — MV Plans
              </h3>
              <p
                className="mb-5"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                Our MV plan tiers — Essential, Premium, and Max — satisfy the ACA minimum value 
                threshold (60% actuarial value). Bronze-level major medical designed for 
                cost-conscious employers who need both compliance and real coverage depth.
              </p>
              <ul className="space-y-2">
                {[
                  "Satisfies ACA minimum value threshold (60%)",
                  "Three tiers — Essential, Premium, Max",
                  "Hospitalization, surgery, and specialist visits",
                  "Minimum 5 enrolled lives",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16B2F7] mt-0.5 flex-shrink-0" />
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DISTRIBUTION SUPPORT */}
      <section style={{ backgroundColor: "#F7F8F9", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              DISTRIBUTION SUPPORT
            </p>
            <h2
              className="font-extrabold mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "-1.5px",
                color: "#000836",
              }}
            >
              <span className="block">Built to help brokers</span>
              <span className="block italic text-[#16B2F7]">win more cases.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                color: "#828993",
                maxWidth: "480px",
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              We don&apos;t just provide a plan — we provide the materials, support, and 
              infrastructure to help you close and retain business.
            </p>
          </div>

          {/* 4-Column Support Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileCheck,
                title: "Proposal Materials",
                body: "Branded benefit summaries, plan comparison sheets, and employer ROI narratives for every plan tier.",
              },
              {
                icon: Zap,
                title: "Fast Quote Turnaround",
                body: "Submit a case and receive a custom quote within one business day.",
              },
              {
                icon: GraduationCap,
                title: "Product Training",
                body: "Direct access to plan details, compliance requirements, and objection handling.",
              },
              {
                icon: Lock,
                title: "Your Brand on the Relationship",
                body: "Your name stays on the client. We never go direct without you.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#000836" }}
                >
                  <item.icon className="w-6 h-6 text-[#16B2F7]" />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "#000836", fontSize: "16px" }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#828993",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DUAL CTA BANNER */}
      <section 
        className="w-full"
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Left - Employer Path */}
        <div
          className="flex flex-col justify-center max-md:col-span-2"
          style={{ backgroundColor: "#16B2F7", padding: "48px", minHeight: "240px" }}
        >
          <p
            className="font-bold uppercase mb-3"
            style={{
              color: "#000836",
              opacity: 0.6,
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            FOR EMPLOYERS
          </p>
          <h3
            className="font-extrabold mb-3"
            style={{ color: "#000836", fontSize: "26px" }}
          >
            Ready to get your group covered?
          </h3>
          <p
            className="mb-6"
            style={{
              color: "#000836",
              opacity: 0.75,
              fontSize: "14px",
              maxWidth: "400px",
            }}
          >
            Custom-quoted for your group size, industry, and selected components.
          </p>
          <div>
            <Button
              asChild
              className="bg-[#000836] hover:bg-[#000836]/90 text-white font-semibold px-6 py-3 rounded-lg"
            >
              <Link href="/proposal">Build a Proposal →</Link>
            </Button>
          </div>
        </div>

        {/* Right - Broker Path */}
        <div
          className="flex flex-col justify-center max-md:col-span-2"
          style={{
            backgroundColor: "#000836",
            backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
            padding: "48px",
            minHeight: "240px",
          }}
        >
          <p
            className="text-[#16B2F7] font-bold uppercase mb-3"
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            FOR BROKERS & GAS
          </p>
          <h3
            className="text-white font-extrabold mb-1"
            style={{ fontSize: "26px" }}
          >
            Want to add this to your book?
          </h3>
          <h3
            className="italic text-[#16B2F7] font-extrabold mb-3"
            style={{ fontSize: "26px" }}
          >
            Let&apos;s talk.
          </h3>
          <p
            className="mb-6"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              maxWidth: "400px",
            }}
          >
            Commission-based partnership. Dedicated support. Fast quotes.
          </p>
          <div>
            <Button
              asChild
              className="bg-[#16B2F7] hover:bg-[#16B2F7]/90 text-[#000836] font-semibold px-6 py-3 rounded-lg"
            >
              <Link href="/brokers">Become a Distribution Partner →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
