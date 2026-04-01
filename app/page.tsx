import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Stethoscope, Shield, Building2, Sparkles, Users, DollarSign, Heart, Check } from "lucide-react"
import Script from "next/script"
import { generateOrganizationSchema } from "@/components/structured-data"

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  return (
    <div className="min-h-screen">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden pt-20"
        style={{
          backgroundColor: '#000836',
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100% 100%, 24px 24px',
          minHeight: '95vh',
        }}
      >
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:py-20">
          {/* Section Label */}
          <p
            className="text-center text-[#16B2F7] font-bold uppercase mb-4"
            style={{ fontSize: '12px', letterSpacing: '3px', fontFamily: 'var(--font-sans)' }}
          >
            2026 BENEFITS PROGRAM
          </p>

          {/* Headline */}
          <h1
            className="text-center text-white font-extrabold"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span className="block">Benefits Built for the</span>
            <span className="block italic text-[#16B2F7]">Modern Workforce</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-center mt-6 mx-auto font-light"
            style={{
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '520px',
              lineHeight: 1.75,
              fontSize: '1.125rem',
              fontFamily: 'var(--font-sans)',
            }}
          >
            A complete virtual care and benefits platform — built for employer groups, associations, and the modern workforce.
          </p>

          {/* Audience Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Employer Groups', 'Associations', 'Chamber Groups', 'Direct-to-Consumer'].map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full text-white"
                style={{
                  fontSize: '13px',
                  border: '1px solid rgba(22,178,247,0.35)',
                  backgroundColor: 'rgba(22,178,247,0.08)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* DUAL PATH CARDS */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10 mx-auto" style={{ maxWidth: '720px' }}>
            {/* Card A - Employer Path */}
            <div
              className="flex-1 p-7"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(22,178,247,0.3)',
                borderTop: '3px solid #16B2F7',
                borderRadius: '12px',
              }}
            >
              <p
                className="text-[#16B2F7] font-bold uppercase mb-2"
                style={{ fontSize: '10px', letterSpacing: '2px', fontFamily: 'var(--font-sans)' }}
              >
                FOR EMPLOYERS & GROUPS
              </p>
              <p className="text-white font-semibold mb-2" style={{ fontSize: '18px', fontFamily: 'var(--font-sans)' }}>
                Build your benefits stack.
              </p>
              <p
                className="mb-4"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Choose from MEC, MV, virtual care, and ancillary options. Custom-quoted for your group size.
              </p>
              <Button
                className="w-full bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold"
                style={{ borderRadius: '8px', padding: '12px', fontFamily: 'var(--font-sans)' }}
                asChild
              >
                <Link href="/contact">Build a Proposal →</Link>
              </Button>
            </div>

            {/* Card B - Broker Path */}
            <div
              className="flex-1 p-7"
              style={{
                backgroundColor: 'rgba(22,178,247,0.08)',
                border: '1.5px solid rgba(22,178,247,0.4)',
                borderTop: '3px solid #16B2F7',
                borderRadius: '12px',
              }}
            >
              <p
                className="text-[#16B2F7] font-bold uppercase mb-2"
                style={{ fontSize: '10px', letterSpacing: '2px', fontFamily: 'var(--font-sans)' }}
              >
                FOR BROKERS & GENERAL AGENTS
              </p>
              <p className="text-white font-semibold mb-2" style={{ fontSize: '18px', fontFamily: 'var(--font-sans)' }}>
                Your clients are already looking.
              </p>
              <p
                className="mb-4"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Partner with us before they find us without you. Commission-based, fully supported, broker-first.
              </p>
              <Button
                className="w-full bg-transparent hover:bg-[#16B2F7]/10 text-[#16B2F7] font-semibold"
                style={{
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1.5px solid #16B2F7',
                  fontFamily: 'var(--font-sans)',
                }}
                asChild
              >
                <Link href="/brokers">Become a Distribution Partner →</Link>
              </Button>
            </div>
          </div>

          {/* STAT GRID */}
          <div
            className="mt-12"
            style={{
              backgroundColor: 'rgba(22,178,247,0.08)',
              borderTop: '1px solid rgba(22,178,247,0.2)',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 text-center">
                {[
                  { number: '$0', label: 'Copay for virtual primary, urgent & behavioral care' },
                  { number: '9', label: 'Fully integrated benefit components — one platform' },
                  { number: '65K+', label: 'Retail pharmacy locations nationwide' },
                  { number: '10 min', label: 'Average wait time for urgent care consult' },
                ].map((stat, index) => (
                  <div key={index}>
                    <p
                      className="text-[#16B2F7] font-extrabold"
                      style={{ fontSize: '42px', fontFamily: 'var(--font-sans)' }}
                    >
                      {stat.number}
                    </p>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BROKER URGENCY STRIP */}
      <section className="bg-[#16B2F7]" style={{ padding: '24px 48px' }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div style={{ maxWidth: '500px' }}>
              <p
                className="font-bold uppercase"
                style={{
                  color: '#000836',
                  opacity: 0.6,
                  fontSize: '11px',
                  letterSpacing: '2px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                FOR BROKERS
              </p>
              <p
                className="font-extrabold mt-1"
                style={{ color: '#000836', fontSize: '22px', fontFamily: 'var(--font-sans)' }}
              >
                Your clients can access this directly.
              </p>
              <p
                className="mt-2"
                style={{
                  color: '#000836',
                  opacity: 0.75,
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                The brokers who partner with us make sure that conversation happens through them — not around them.
              </p>
            </div>
            <Button
              className="bg-[#000836] hover:bg-[#0a1445] text-white font-semibold px-6 py-3"
              style={{ borderRadius: '8px', fontFamily: 'var(--font-sans)' }}
              asChild
            >
              <Link href="/brokers">Partner With Us →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY BB */}
      <section style={{ backgroundColor: '#F7F8F9', padding: '80px 0' }}>
        <div className="container mx-auto px-4">
          {/* Section Label */}
          <p
            className="text-center text-[#16B2F7] font-bold uppercase mb-4"
            style={{ fontSize: '12px', letterSpacing: '3px', fontFamily: 'var(--font-sans)' }}
          >
            THE CASE FOR CHANGE
          </p>

          {/* Headline */}
          <h2
            className="text-center font-extrabold"
            style={{
              color: '#000836',
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span className="block font-light">Most benefit plans</span>
            <span className="block italic text-[#16B2F7]">underperform.</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-center mt-6 mx-auto"
            style={{
              color: '#828993',
              maxWidth: '640px',
              fontSize: '16px',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Traditional insurance leaves employees underserved and employers overpaying. Basic Benefits flips the model — putting comprehensive, on-demand care within reach of every employee at a fixed, predictable cost.
          </p>

          {/* 3-Column Stat Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto text-center">
            {[
              { number: '$0', label: 'Per-visit copay for virtual primary, urgent, and behavioral care' },
              { number: '$800', label: 'In generic prescription coverage included with every membership' },
              { number: '48 hrs', label: 'Average time to access behavioral health and therapy services' },
            ].map((stat, index) => (
              <div key={index}>
                <p
                  className="text-[#16B2F7] font-extrabold"
                  style={{ fontSize: '52px', fontFamily: 'var(--font-sans)' }}
                >
                  {stat.number}
                </p>
                <p
                  className="mt-2 mx-auto"
                  style={{
                    color: '#828993',
                    fontSize: '14px',
                    maxWidth: '180px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* 3-Column Icon Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Employee Engagement',
                body: "From $0 copay primary care to lifestyle discounts and pet telehealth — benefits your employees actually use every month, not just when they're sick.",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Cost Containment',
                body: 'Virtual-first care, generic Rx coverage, and healthcare discounts cut downstream costs. Fixed PEPM pricing eliminates utilization volatility.',
              },
              {
                icon: <Heart className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Modern Lifestyle Platform',
                body: 'GLP-1 access, cardiometabolic coaching, virtual dental, EAP, and retail savings — built for the whole person, not just the patient.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-8"
                style={{
                  border: '1px solid #D0D2D8',
                  borderRadius: '12px',
                  borderTop: '3px solid #16B2F7',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#000836' }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: '#000836', fontSize: '18px', fontFamily: 'var(--font-sans)' }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#828993', fontSize: '14px', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT SUITE */}
      <section style={{ backgroundColor: '#F7F8F9', padding: '80px 0' }}>
        <div className="container mx-auto px-4">
          {/* Section Label */}
          <p
            className="text-center text-[#16B2F7] font-bold uppercase mb-4"
            style={{ fontSize: '12px', letterSpacing: '3px', fontFamily: 'var(--font-sans)' }}
          >
            OUR SERVICES
          </p>

          {/* Headline */}
          <h2
            className="text-center font-extrabold"
            style={{
              color: '#000836',
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span className="block font-light">Comprehensive healthcare</span>
            <span className="block italic text-[#16B2F7]">solutions.</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-center mt-6 mx-auto"
            style={{
              color: '#828993',
              maxWidth: '560px',
              fontSize: '16px',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Every component below can be deployed employer-paid or voluntary — standalone or bundled. No tiered access, no upsells, no hidden fees.
          </p>

          {/* 4 Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
            {[
              {
                badge: { text: 'VIRTUAL CARE', bg: '#DCFCE7', color: '#166534' },
                icon: <Stethoscope className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Virtual Care + EAP',
                subtitle: 'Complete Care. Zero Copay.',
                body: 'Complete virtual care with $0 copay — primary, urgent, and behavioral health. Plus EAP support for counseling, legal, and financial guidance.',
                bullets: [
                  'Virtual Primary Care with dedicated PCP',
                  '24/7 Urgent Care — avg. 10-min wait',
                  'Behavioral Health & Psychiatry — $0 copay',
                  'EAP: Counseling, Legal & Financial Guidance',
                ],
                tagline: 'No appointments. No wait rooms. No copay.',
                isPopular: false,
              },
              {
                badge: { text: 'MEC PLANS', bg: '#E0F5FE', color: '#0277A8' },
                icon: <Shield className="w-6 h-6 text-[#16B2F7]" />,
                title: 'MEC Plans',
                subtitle: 'ACA-Compliant Coverage for Every Employer',
                body: 'Meet your federal mandate obligation without overpaying. Preventive care and wellness benefits at a predictable, fixed cost.',
                bullets: [
                  'Preventive care & wellness coverage',
                  'Satisfies ACA employer mandate',
                  'Fixed PEPM pricing — no utilization volatility',
                  'Flexible minimum group size',
                ],
                tagline: 'Compliant, affordable, and built to scale.',
                isPopular: true,
              },
              {
                badge: { text: 'MV PLANS', bg: '#E0F5FE', color: '#0277A8' },
                icon: <Building2 className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Minimum Value Plans',
                subtitle: 'Broader Coverage. Still Affordable.',
                body: "Bronze-level major medical — hospitalization, specialist visits, and expanded coverage that satisfies the ACA minimum value threshold.",
                bullets: [
                  'Hospitalization & specialist visit coverage',
                  'Satisfies ACA minimum value threshold (60%)',
                  'Standalone bronze-level major medical',
                  'Fixed PEPM pricing — predictable cost structure',
                ],
                tagline: 'Real major medical. At a price that works.',
                isPopular: false,
              },
              {
                badge: { text: 'WELLNESS', bg: '#DCFCE7', color: '#166534' },
                icon: <Sparkles className="w-6 h-6 text-[#16B2F7]" />,
                title: 'Wellness, Weight Loss & Lifestyle',
                subtitle: 'Built for the Whole Person',
                body: "The benefits your employees actually talk about — GLP-1 access, cardiometabolic coaching, Rx coverage, and a full lifestyle savings platform.",
                bullets: [
                  'GLP-1 & Peptide Access + Cardiometabolic Coaching',
                  'Prescription Benefit — $0–$15 copay, 65K+ locations',
                  'Virtual Dental + Virtual Pet Care',
                  'Lifestyle Discounts — pharmacy, imaging, concerts, hotels, retail',
                ],
                tagline: "Not just healthcare. A platform they'll actually use.",
                isPopular: false,
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 flex flex-col relative"
                style={{
                  border: '1px solid #D0D2D8',
                  borderRadius: '12px',
                  borderTop: '3px solid #16B2F7',
                }}
              >
                {card.isPopular && (
                  <span
                    className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded"
                    style={{ backgroundColor: '#16B2F7', color: '#000836' }}
                  >
                    Most Popular
                  </span>
                )}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 w-fit"
                  style={{
                    backgroundColor: card.badge.bg,
                    color: card.badge.color,
                    letterSpacing: '1px',
                  }}
                >
                  {card.badge.text}
                </span>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#000836' }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-semibold mb-1"
                  style={{ color: '#000836', fontSize: '18px', fontFamily: 'var(--font-sans)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[#16B2F7] font-medium mb-3"
                  style={{ fontSize: '14px', fontFamily: 'var(--font-sans)' }}
                >
                  {card.subtitle}
                </p>
                <p
                  className="mb-4"
                  style={{ color: '#828993', fontSize: '13px', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}
                >
                  {card.body}
                </p>
                <ul className="space-y-2 mb-4 flex-1">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#16B2F7] mt-0.5 flex-shrink-0" />
                      <span style={{ color: '#000836', fontSize: '13px', fontFamily: 'var(--font-sans)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className="italic mb-4"
                  style={{ color: '#828993', fontSize: '13px', fontFamily: 'var(--font-sans)' }}
                >
                  {card.tagline}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-[#16B2F7] font-semibold"
                  style={{
                    borderRadius: '8px',
                    border: '1.5px solid #16B2F7',
                    fontFamily: 'var(--font-sans)',
                  }}
                  asChild
                >
                  <Link href="/solutions">Learn More →</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Centered CTA */}
          <div className="text-center mt-12">
            <Button
              className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3"
              style={{ borderRadius: '8px', fontFamily: 'var(--font-sans)' }}
              asChild
            >
              <Link href="/solutions">Explore All Solutions →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: VERTICALS */}
      <section
        style={{
          backgroundColor: '#000836',
          backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          padding: '80px 0',
        }}
      >
        <div className="container mx-auto px-4">
          {/* Section Label */}
          <p
            className="text-center text-[#16B2F7] font-bold uppercase mb-4"
            style={{ fontSize: '12px', letterSpacing: '3px', fontFamily: 'var(--font-sans)' }}
          >
            INDUSTRIES WE SERVE
          </p>

          {/* Headline */}
          <h2
            className="text-center font-extrabold text-white"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span className="block font-light">Built for workforces</span>
            <span className="block italic text-[#16B2F7]">others ignore.</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-center mt-6 mx-auto"
            style={{
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              fontSize: '16px',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Our plan structure was designed for the industries where ACA compliance pressure is highest and traditional insurance falls short.
          </p>

          {/* 4 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
            {[
              {
                badge: 'STAFFING',
                title: 'Staffing Firms',
                body: 'High turnover, variable hours, and ACA exposure on every large account. MEC coverage closes the compliance gap without blowing the cost model.',
              },
              {
                badge: 'PEO',
                title: 'PEOs & HR Outsourcing',
                body: 'PEO clients expect benefits depth. Our full plan stack — MEC through MV plus ancillaries — gives you a complete benefits story at a competitive PEPM.',
              },
              {
                badge: 'HOSPITALITY',
                title: 'Hospitality Groups',
                body: "Restaurants, hotels, and entertainment venues with hourly workforces need ACA compliance at scale. We've structured these cases before. We know the margins.",
              },
              {
                badge: 'HOME HEALTH',
                title: 'Home Health & Care Agencies',
                body: 'Caregiver workforces need real benefits — not just compliance paperwork. Virtual care plus MEC gives them daily-use value and keeps you sticky at renewal.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-7"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(22,178,247,0.2)',
                  borderTop: '3px solid #16B2F7',
                  borderRadius: '12px',
                }}
              >
                <span
                  className="inline-block px-5 py-1.5 rounded-full text-[#16B2F7] font-bold uppercase mb-4"
                  style={{
                    backgroundColor: 'rgba(22,178,247,0.15)',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {card.badge}
                </span>
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontSize: '18px', fontFamily: 'var(--font-sans)' }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DUAL CTA BANNER */}
      <section className="flex flex-col lg:flex-row">
        {/* Left Column - Employer Path */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ backgroundColor: '#16B2F7', padding: '60px 48px', minHeight: '280px' }}
        >
          <p
            className="font-bold uppercase mb-2"
            style={{
              color: '#000836',
              opacity: 0.6,
              fontSize: '11px',
              letterSpacing: '2px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            FOR EMPLOYERS
          </p>
          <h3
            className="font-extrabold mb-3"
            style={{
              color: '#000836',
              fontSize: '28px',
              letterSpacing: '-1px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Ready to build your benefits stack?
          </h3>
          <p
            className="mb-6"
            style={{
              color: '#000836',
              opacity: 0.75,
              fontSize: '14px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Custom-quoted. No published rate sheets. Built for your group size and industry.
          </p>
          <Button
            className="bg-[#000836] hover:bg-[#0a1445] text-white font-semibold px-6 py-3 w-fit"
            style={{ borderRadius: '8px', fontFamily: 'var(--font-sans)' }}
            asChild
          >
            <Link href="/contact">Build a Proposal →</Link>
          </Button>
        </div>

        {/* Right Column - Broker Path */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{
            backgroundColor: '#000836',
            backgroundImage: `radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
            padding: '60px 48px',
            minHeight: '280px',
          }}
        >
          <p
            className="text-[#16B2F7] font-bold uppercase mb-2"
            style={{ fontSize: '11px', letterSpacing: '2px', fontFamily: 'var(--font-sans)' }}
          >
            FOR BROKERS & GAS
          </p>
          <h3
            className="font-extrabold text-white mb-1"
            style={{
              fontSize: '28px',
              letterSpacing: '-1px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Win more cases.
          </h3>
          <h3
            className="font-extrabold italic text-[#16B2F7] mb-3"
            style={{
              fontSize: '28px',
              letterSpacing: '-1px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Keep every client.
          </h3>
          <p
            className="mb-6"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Partner with the wholesale benefits platform built to make brokers indispensable.
          </p>
          <Button
            className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-6 py-3 w-fit"
            style={{ borderRadius: '8px', fontFamily: 'var(--font-sans)' }}
            asChild
          >
            <Link href="/brokers">Become a Distribution Partner →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
