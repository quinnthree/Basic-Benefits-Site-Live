"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { motion } from "framer-motion"
import {
  Building2,
  Shield,
  Laptop,
  HeartPulse,
  Stethoscope,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Clock,
  DollarSign,
  FileCheck,
} from "lucide-react"

// Animation variants - standardized for premium polish
const customEase = [0.22, 1, 0.36, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: customEase } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: customEase } },
}

// Insurance option cards data
const insuranceOptions = [
  {
    id: "traditional",
    icon: Building2,
    title: "Traditional Group Health Insurance",
    description: "Fully insured group plans through traditional carriers.",
    details: {
      whenItMakesSense: ["Stable full-time workforce", "Broad network requirements", "Predictable participation levels"],
      limitations: ["Premium volatility year-over-year", "Limited part-time coverage", "Participation constraints"],
    },
    color: "blue",
  },
  {
    id: "mec",
    icon: Shield,
    title: "Minimum Essential Coverage (MEC)",
    description: "Preventive and primary-care oriented coverage designed to meet MEC requirements.",
    details: {
      typicallyIncludes: ["Preventive care services", "Access to primary care", "Telemedicine options"],
      typicallyDoesNotInclude: ["Major medical hospitalization", "Inpatient services"],
      bestFor: ["Hourly/variable-hour employees", "Affordable entry point", "Compliance + access needs"],
    },
    color: "green",
  },
  {
    id: "mv",
    icon: FileCheck,
    title: "Minimum Value (MV) Plans",
    description: "Plans designed to meet ACA minimum value/affordability standards.",
    details: {
      whyEmployersUseIt: ["Support employer mandate strategy", "Lower cost alternative to richer plans", "Balance cost and compliance"],
      bestFor: ["ACA-applicable employers", "Cost-conscious organizations", "Compliance-focused businesses"],
    },
    color: "purple",
  },
  {
    id: "virtual",
    icon: Laptop,
    title: "Virtual-First Health Solutions",
    description: "Virtual primary care, urgent care, behavioral health, Rx support and navigation.",
    details: {
      benefits: ["24/7 access to care", "Reduced absenteeism", "Stronger employee engagement", "Convenient remote access"],
    },
    color: "teal",
  },
  {
    id: "preventive",
    icon: Stethoscope,
    title: "Preventive & Diagnostic Benefits",
    description: "Screenings and lab access that support early detection and proactive health management.",
    details: {
      benefits: ["Complements insurance and virtual care", "Supports workforce wellness strategy", "Early detection savings"],
    },
    color: "orange",
  },
]

// Steps data
const steps = [
  {
    number: 1,
    title: "Choose compliance foundation",
    description: "Select MEC or MV as your base",
    icon: Shield,
  },
  {
    number: 2,
    title: "Add access layer",
    description: "Integrate virtual care options",
    icon: Laptop,
  },
  {
    number: 3,
    title: "Add prevention layer",
    description: "Include diagnostics and wellness",
    icon: HeartPulse,
  },
  {
    number: 4,
    title: "Simplify admin",
    description: "Streamline billing and reporting",
    icon: Briefcase,
  },
]

// Value points data
const valuePoints = [
  { icon: Shield, title: "Employer-focused health insurance alternatives" },
  { icon: FileCheck, title: "ACA-aware plan design and compliance support" },
  { icon: Laptop, title: "Virtual care + preventive integration" },
  { icon: Briefcase, title: "Simplified administration, billing, reporting" },
  { icon: Users, title: "Broker- and GA-friendly distribution" },
]

// FAQ data
const faqs = [
  {
    question: "Are MEC plans considered health insurance?",
    answer:
      "MEC plans provide coverage that satisfies the Affordable Care Act's individual mandate requirements. While they offer essential preventive care benefits, they differ from traditional major medical insurance in scope. MEC plans are designed to meet specific compliance requirements while providing valuable preventive care access to employees.",
  },
  {
    question: "Do MV plans satisfy ACA requirements?",
    answer:
      "Yes, Minimum Value (MV) plans are designed to meet ACA affordability and minimum value standards. They must cover at least 60% of the total allowed cost of benefits and provide substantial coverage for inpatient and physician services to satisfy employer mandate requirements.",
  },
  {
    question: "Can small businesses combine benefit options?",
    answer:
      "Absolutely. Many employers use a modular approach, combining a compliance foundation (MEC or MV) with virtual care access and preventive benefits. This layered strategy allows businesses to customize coverage based on workforce needs and budget constraints.",
  },
  {
    question: "What types of employers are a good fit for these solutions?",
    answer:
      "These solutions work well for small to mid-sized employers (10-500 employees), businesses with part-time, seasonal, or variable-hour workforces, and industries like hospitality, staffing, logistics, manufacturing, and franchise groups. They're also ideal for first-time benefits buyers or employers looking to supplement existing coverage.",
  },
]

// Industry chips
const industries = ["Hospitality", "Staffing", "Logistics", "Manufacturing", "Franchise", "Retail", "Healthcare"]

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HealthInsuranceSmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1B2741] pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/smallbus_hero_w.jpg"
            alt="Small business leaders discussing employee health benefit options"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2741] via-[#1B2741]/95 to-[#1B2741]/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
              <motion.h1 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Health Insurance Options for Small Businesses
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                Affordable, compliant benefit solutions for employers with 10-500 employees
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-3 text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
                Designed for employers navigating ACA requirements, rising costs, and mixed workforces.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    Talk to a Benefits Advisor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white px-8 w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <Link href="#options">Explore Options</Link>
                </Button>
              </motion.div>
              <motion.p variants={fadeInUp} className="mt-6 text-sm text-gray-400">
                Built for employers, brokers, and partner distribution.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/smallbus_hero_w.jpg"
                alt="Small business leaders discussing employee health benefit options"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-6">
              The Challenge Facing Small Businesses Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Small and mid-sized employers face unique challenges when it comes to providing health benefits. Understanding
              these pain points is the first step toward finding the right solution.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <ul className="space-y-4">
                  {[
                    { icon: DollarSign, text: "Rising premiums making traditional coverage unaffordable" },
                    { icon: Clock, text: "Limited flexibility for part-time and hourly workers" },
                    { icon: FileCheck, text: "ACA compliance confusion and penalty concerns" },
                    { icon: Briefcase, text: "Administrative complexity in billing, eligibility, and reporting" },
                    { icon: Laptop, text: "Growing employee demand for virtual healthcare access" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 pt-2">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Understanding Options Section */}
      <section id="options" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-4">
              Understanding Your Health Insurance Options
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
              Explore the range of benefit solutions available to small businesses, each designed to address specific needs
              and compliance requirements.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-700 text-center mb-8 max-w-2xl mx-auto font-medium">
              These options can be offered individually or combined into a single, integrated benefit strategy.
            </motion.p>

            {/* Category Bar */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
              {["Compliance", "Access", "Prevention", "Administration"].map((category) => (
                <span key={category} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </motion.div>

            {/* Option Cards */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {insuranceOptions.map((option) => (
                <motion.div key={option.id} variants={cardVariant}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                          option.color === "blue"
                            ? "bg-blue-100"
                            : option.color === "green"
                              ? "bg-green-100"
                              : option.color === "purple"
                                ? "bg-purple-100"
                                : option.color === "teal"
                                  ? "bg-teal-100"
                                  : "bg-orange-100"
                        }`}
                      >
                        <option.icon
                          className={`w-6 h-6 ${
                            option.color === "blue"
                              ? "text-blue-600"
                              : option.color === "green"
                                ? "text-green-600"
                                : option.color === "purple"
                                  ? "text-purple-600"
                                  : option.color === "teal"
                                    ? "text-teal-600"
                                    : "text-orange-600"
                          }`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>

                      {option.details.whenItMakesSense && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">When it makes sense:</p>
                          <ul className="space-y-1">
                            {option.details.whenItMakesSense.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {option.details.typicallyIncludes && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Typically includes:</p>
                          <ul className="space-y-1">
                            {option.details.typicallyIncludes.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {option.details.bestFor && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Best for:</p>
                          <ul className="space-y-1">
                            {option.details.bestFor.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {option.details.whyEmployersUseIt && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Why employers use it:</p>
                          <ul className="space-y-1">
                            {option.details.whyEmployersUseIt.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {option.details.benefits && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Benefits:</p>
                          <ul className="space-y-1">
                            {option.details.benefits.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who These Options Are For Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Who These Options Are Designed For
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeInUp}>
                <p className="text-gray-600 mb-6">
                  These solutions are designed for employers who need flexibility, compliance awareness, and cost control — without forcing a one-size-fits-all plan.
                </p>
                <p className="text-gray-600">
                  Whether you're a growing startup or an established mid-sized company, we have solutions that scale with your business needs.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <ul className="space-y-3 mb-6">
                  {[
                    "Small and mid-sized employers (10-500 employees)",
                    "Part-time, seasonal, hourly or variable-hour workforces",
                    "First-time benefits buyers",
                    "Employers supplementing or replacing traditional coverage",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-4">
              A Flexible Approach to Employer Benefits
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our modular stacking approach allows you to build a benefits package that fits your specific needs and budget.
              Start with a foundation and add layers as needed.
            </motion.p>

            {/* Steps */}
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div key={step.number} variants={cardVariant}>
                  <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {step.number}
                      </div>
                      <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Why Employers Choose Basic Benefits
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuePoints.map((point, index) => (
                <motion.div key={index} variants={cardVariant}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="font-medium text-gray-800">{point.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B2741]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
              Talk to a Benefits Advisor
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 mb-8">
              We'll help you compare compliant, cost-effective options tailored to your workforce.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 w-full sm:w-auto" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white px-8 w-full sm:w-auto bg-transparent"
                asChild
              >
                <Link href="mailto:info@basicbenefits.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
