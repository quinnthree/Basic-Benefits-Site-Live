"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Stethoscope, 
  Clock, 
  Brain, 
  Pill, 
  Heart, 
  Syringe,
  Users,
  SmilePlus,
  PawPrint,
  Percent,
  Shield,
  Building2,
  Check,
  ArrowRight
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

// Product Suite Data
const virtualCareCards = [
  {
    title: "Virtual Primary Care",
    badge: "VIRTUAL CARE",
    badgeColor: "bg-teal-100 text-teal-700",
    icon: Stethoscope,
    description: "Dedicated PCP, at-home labs, genomics, chronic care management, annual wellness — $0 copay."
  },
  {
    title: "Virtual Urgent Care",
    badge: "VIRTUAL CARE",
    badgeColor: "bg-teal-100 text-teal-700",
    icon: Clock,
    description: "24/7 board-certified doctors, avg. 10-min wait, NCQA licensed. Video, phone, or message. Consult transcripts included."
  },
  {
    title: "Virtual Behavioral Health",
    badge: "VIRTUAL CARE",
    badgeColor: "bg-teal-100 text-teal-700",
    icon: Brain,
    description: "Therapy, counseling, psychiatry, medication management, PGx testing. Available within 48 hours. $0 copay."
  }
]

const rxWellnessCards = [
  {
    title: "Prescription Benefit",
    badge: "RX & WELLNESS",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Pill,
    description: "$0 acute / $15 chronic. 800+ generics. National card accepted at 65K+ pharmacies. Home delivery via member portal."
  },
  {
    title: "Digital Wellness Hub",
    badge: "RX & WELLNESS",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Heart,
    description: "Cardiometabolic optimization, personalized wellness journeys, nutrition coaching, habit-building, and activity programs."
  },
  {
    title: "GLP-1 & Peptide Access",
    badge: "RX & WELLNESS",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Syringe,
    description: "Low-cost marketplace for weight-loss and wellness peptides. Dedicated virtual clinical team. Personalized or self-guided paths."
  }
]

const supportCards = [
  {
    title: "Employee Assistance Program",
    badge: "SUPPORT",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: Users,
    description: "Counseling for work, family & personal challenges. Legal & financial guidance. 8 on-demand sessions per condition."
  },
  {
    title: "Virtual Dental",
    badge: "SUPPORT",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: SmilePlus,
    description: "AI-powered diagnostics, virtual checkups, treatment validation, 70K+ provider discount network. Save 25–85%."
  },
  {
    title: "Virtual Pet Care",
    badge: "SUPPORT",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: PawPrint,
    description: "24/7 licensed vet & technician access in all 50 states. A standout enrollment differentiator for employees with pets."
  }
]

const savingsTags = [
  "Concerts & Shows",
  "Hotels 10–60% Off",
  "Movies 55% Off",
  "Cash Back Rewards",
  "Rental Cars",
  "Theme Parks",
  "Gift Cards",
  "Shop at Home"
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-cyan-600 text-sm font-semibold tracking-wider uppercase mb-3 block">
              OUR PLATFORM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Build the Right Bundle for Your Workforce
            </h1>
            <p className="text-lg text-gray-600 text-balance">
              Every component below can be deployed employer-paid or voluntary — standalone or bundled. No tiered access, no upsells, no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Product Suite Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-cyan-600 text-sm font-semibold tracking-wider uppercase mb-3 block">
              PRODUCT SUITE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything included. One flat rate.
            </h2>
          </motion.div>

          {/* Product Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Virtual Care Cards */}
            {virtualCareCards.map((card, index) => (
              <ProductCard key={`virtual-${index}`} {...card} />
            ))}
            
            {/* RX & Wellness Cards */}
            {rxWellnessCards.map((card, index) => (
              <ProductCard key={`rx-${index}`} {...card} />
            ))}
            
            {/* Support Cards */}
            {supportCards.map((card, index) => (
              <ProductCard key={`support-${index}`} {...card} />
            ))}
          </motion.div>

          {/* Savings Row - Full Width */}
          <motion.div 
            className="mt-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 mb-3">
                    SAVINGS
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Percent className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Healthcare Discounts + Lifestyle Savings
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Imaging, labs, surgery, chiropractic, vision, pharmacy (up to 65% off, 59K+ locations), and hearing — plus full lifestyle perks platform.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {savingsTags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Plan Anchors */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-cyan-600 text-sm font-semibold tracking-wider uppercase mb-3 block">
              COMPLIANCE PLANS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The coverage foundation. Built to scale.
            </h2>
            <p className="text-lg text-gray-600">
              MEC and Minimum Value Plans serve as the compliance and coverage base. Layer any product suite components on top — or deploy standalone.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* MEC Plans Block */}
            <motion.div 
              className="bg-[#0F172A] rounded-2xl p-8 text-white"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                  MINIMUM ESSENTIAL COVERAGE
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Satisfy the ACA employer mandate.
              </h3>
              <p className="text-gray-300 mb-6">
                Preventive care and wellness coverage at a fixed, predictable PEPM. No utilization volatility. Protects employers from federal penalties while delivering real value to employees.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Preventive care & wellness visits covered",
                  "Satisfies ACA employer mandate for applicable large employers",
                  "Fixed $35 PEPM — no claims exposure",
                  "Flexible minimum group size"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Minimum Value Plans Block */}
            <motion.div 
              className="bg-[#0F172A] rounded-2xl p-8 text-white"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                  BRONZE-LEVEL MAJOR MEDICAL
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Real major medical. At a price that works.
              </h3>
              <p className="text-gray-300 mb-6">
                Step up from MEC with a true Minimum Value Plan — hospitalization, specialist visits, and expanded coverage that satisfies the ACA's minimum value threshold. Standalone bronze-level major medical for cost-conscious employers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hospitalization & specialist visit coverage",
                  "Satisfies ACA minimum value threshold (60%)",
                  "Standalone bronze-level major medical coverage",
                  "Fixed PEPM pricing — predictable cost structure"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which bundle is right for you?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team will build the right stack for your workforce, your budget, and your distribution model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Product Card Component
function ProductCard({ 
  title, 
  badge, 
  badgeColor, 
  icon: Icon, 
  description 
}: { 
  title: string
  badge: string
  badgeColor: string
  icon: React.ElementType
  description: string
}) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      variants={fadeInUp}
    >
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} mb-4`}>
        {badge}
      </span>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
