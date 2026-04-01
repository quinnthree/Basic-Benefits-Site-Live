import { Button } from "@/components/ui/button"
import { ImprovedServiceCard } from "@/components/improved-service-card"
import { ServiceCarousel } from "@/components/service-carousel"
import { TestimonialSection } from "@/components/testimonial-section"
import { RequestProposal } from "@/components/request-proposal"
import Link from "next/link"
import { Stethoscope, Shield, Building2, Sparkles } from "lucide-react"
import Script from "next/script"
import { generateOrganizationSchema } from "@/components/structured-data"

const services = [
  {
    title: "Virtual Care + EAP",
    icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
    subtitle: "Complete Care. Zero Copay.",
    description:
      "Complete virtual care with $0 copay — primary, urgent, and behavioral health. Plus EAP support for counseling, legal, and financial guidance.",
    features: [
      "Virtual Primary Care with dedicated PCP & at-home labs",
      "24/7 Urgent Care — avg. 10-min wait, NCQA licensed",
      "Behavioral Health, Therapy & Psychiatry — $0 copay",
      "EAP: Counseling, Legal & Financial Guidance",
    ],
    note: "No appointments. No wait rooms. No copay.",
  },
  {
    title: "MEC Plans",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    subtitle: "ACA-Compliant Coverage for Every Employer",
    description:
      "Meet your federal mandate obligation without overpaying. Minimum Essential Coverage plans deliver preventive care and wellness benefits at a predictable, fixed cost — protecting your business and your employees.",
    features: [
      "Preventive care & wellness coverage",
      "Satisfies ACA employer mandate requirements",
      "Fixed PEPM pricing — no utilization volatility",
      "Flexible minimum group size",
    ],
    note: "Compliant, affordable, and built to scale.",
    isPopular: true,
  },
  {
    title: "Minimum Value Plans",
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    subtitle: "Broader Coverage. Still Affordable.",
    description:
      "Step up from MEC with a true Minimum Value Plan — hospitalization, specialist visits, and expanded coverage that satisfies the ACA's minimum value threshold. Bronze-level major medical designed for cost-conscious employers.",
    features: [
      "Hospitalization & specialist visit coverage",
      "Satisfies ACA minimum value threshold",
      "Pairs with Virtual Care bundle for full coverage story",
      "Standalone bronze-level major medical coverage",
    ],
    note: "Real major medical coverage. At a price that works.",
  },
  {
    title: "Wellness, Weight Loss & Lifestyle",
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    subtitle: "Built for the Whole Person",
    description:
      "The benefits your employees actually talk about. GLP-1 and peptide access, cardiometabolic coaching, digital wellness tools, and generic Rx coverage at $0–$15 copay across 65K+ pharmacy locations. Add virtual dental, virtual pet care, and a full lifestyle savings platform.",
    features: [
      "GLP-1 & Peptide Access + Cardiometabolic Coaching",
      "Prescription Benefit — $0–$15 generic copay, 65K+ locations",
      "Virtual Dental + Virtual Pet Care",
      "Lifestyle Discounts — pharmacy, imaging, concerts, hotels, retail",
    ],
    note: "Not just healthcare. A platform your employees will actually use.",
  },
]

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  return (
    <div className="min-h-screen">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden pt-20 min-h-[92vh]"
        style={{
          backgroundColor: '#000836',
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100% 100%, 24px 24px',
        }}
      >
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:py-24">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1 max-w-xl">
              {/* Section Label */}
              <p 
                className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
                style={{ letterSpacing: '3px', fontFamily: 'var(--font-sans)' }}
              >
                2026 BENEFITS PROGRAM
              </p>
              
              {/* Headline */}
              <h1 
                className="text-white font-extrabold"
                style={{ 
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  letterSpacing: '-1.5px',
                  lineHeight: 1.1,
                  fontFamily: 'var(--font-sans)'
                }}
              >
                <span className="block">Benefits Built for the</span>
                <span className="block italic text-[#16B2F7]">Modern Workforce</span>
              </h1>
              
              {/* Subheadline */}
              <p 
                className="mt-6 text-white/75 font-light max-w-[520px]"
                style={{ 
                  lineHeight: 1.75,
                  fontSize: '1.125rem',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                A complete virtual care and benefits platform — built for employer groups, associations, and the modern workforce.
              </p>
              
              {/* Audience Pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {['Employer Groups', 'Associations', 'Chamber Groups', 'Direct-to-Consumer'].map((pill) => (
                  <span 
                    key={pill}
                    className="px-4 py-1.5 rounded-full text-white text-[13px]"
                    style={{
                      border: '1px solid rgba(22,178,247,0.35)',
                      backgroundColor: 'rgba(22,178,247,0.08)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10"
                  style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}
                  asChild
                >
                  <Link href="/contact">Build a Proposal →</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Stat Cards */}
            <div className="flex-1 max-w-lg">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '$0', label: 'Copay for virtual primary, urgent & behavioral care' },
                  { number: '9', label: 'Fully integrated benefit components — one platform' },
                  { number: '65K+', label: 'Retail pharmacy locations nationwide' },
                  { number: '10 min', label: 'Average wait time for urgent care consult' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(22,178,247,0.2)',
                      borderTop: '3px solid #16B2F7',
                    }}
                  >
                    <p 
                      className="text-[#16B2F7] font-extrabold"
                      style={{ fontSize: '42px', fontFamily: 'var(--font-sans)' }}
                    >
                      {stat.number}
                    </p>
                    <p 
                      className="text-white/65 mt-2"
                      style={{ 
                        fontSize: '13px', 
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-sans)'
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
        
        {/* Proposal Strip */}
        <div 
          className="relative z-10 mt-8"
          style={{
            backgroundColor: 'rgba(22,178,247,0.08)',
            borderTop: '1px solid rgba(22,178,247,0.2)',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-center lg:text-left">
              <div className="max-w-[560px]">
                <p 
                  className="text-[#16B2F7] text-[11px] font-bold uppercase mb-1"
                  style={{ letterSpacing: '2px', fontFamily: 'var(--font-sans)' }}
                >
                  CUSTOM PRICING AVAILABLE
                </p>
                <p 
                  className="text-white/65 text-[13px]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Employer groups, associations, and large cases receive tailored quotes based on group size, selected components, and distribution model.
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-transparent text-[#16B2F7] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#16B2F7]/10 mx-auto lg:mx-0"
                style={{ border: '1.5px solid #16B2F7' }}
                asChild
              >
                <Link href="/contact">Build a Proposal →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Improved Services Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for your business
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ImprovedServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="md:hidden">
            <ServiceCarousel services={services} />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <p className="mt-4 text-sm text-gray-600">Start your journey to better healthcare today</p>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Request Proposal Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Request a Proposal</h2>
              <p className="text-gray-600">Find the perfect healthcare solution for your business</p>
            </div>
            <RequestProposal />
          </div>
        </div>
      </section>
    </div>
  )
}
