"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CreditCard, MapPin, Pill, Video, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Animation variants
const customEase = [0.22, 1, 0.36, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: customEase } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

// Quick Links Data
const quickLinks = [
  {
    title: "Get Your ID Card",
    description: "Access your digital ID card anytime in the HealthWallet app.",
    icon: CreditCard,
    anchor: "#id-card",
  },
  {
    title: "Find a Provider",
    description: "Search in-network doctors, specialists, and facilities.",
    icon: MapPin,
    anchor: "#provider",
  },
  {
    title: "View Drug Formulary",
    description: "Check covered medications and your plan's copay tiers.",
    icon: Pill,
    anchor: "#formulary",
  },
  {
    title: "Virtual Care",
    description: "Connect with a doctor 24/7 at no cost through Recuro Health.",
    icon: Video,
    anchor: "#virtual-care",
  },
]

export default function MemberSupportPage() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] via-blue-50 to-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <Image
                src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/BasicBenefits_Logo_Vert-xF15AbbAxmpVQEZWAcaeXRfnDqaBWp.svg"
                alt="Basic Benefits Logo"
                width={160}
                height={80}
                className="max-w-[160px]"
              />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Member Support
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about your benefit plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.anchor}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow p-6 group block"
              >
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <link.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Sections */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[900px] mx-auto px-4">
          
          {/* ID Card & Coverage */}
          <motion.div
            id="id-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 scroll-mt-24"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-blue-800 border-b pb-2 mb-4">
              ID Card & Coverage
            </motion.h3>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="id-card-1" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I access my insurance ID card?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Download the HealthWallet mobile app — search "The HealthWallet" in your app store. Log in using your Social Security number and date of birth to access your ID card, benefit information, and vendor services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="id-card-2" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What information is on my ID card?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Your ID card includes your member ID, group number, plan name, network logo, and contact numbers for your plan administrator and pharmacy benefit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="id-card-3" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    I need a replacement ID card. How do I get one?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Your digital ID card is always available in the HealthWallet app. For additional assistance, contact SBMA member services at 1-888-505-7724 or email updates@sbmamec.com.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

          {/* Finding a Provider */}
          <motion.div
            id="provider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 scroll-mt-24"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-blue-800 border-b pb-2 mb-4">
              Finding a Provider
            </motion.h3>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="provider-1" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I find an in-network provider?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="mb-4">Your provider search link depends on your plan. Look for the PHCS logo on your ID card, then use the link that matches your plan type:</p>
                    <ul className="space-y-2 mb-4">
                      <li>
                        <a href="https://multiplan.com/sbmapreventiveservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          WellCare (MEC Preventive Only) <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://multiplan.com/sbmaspecificservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          VitalCare, EliteCare, PrimeCare <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://multiplan.com/sbmapa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Advantage MV, Premium MV, Max MV <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    </ul>
                    <p>Always confirm with the provider's office before scheduling.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="provider-2" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What does in-network vs. out-of-network mean?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    In-network providers have agreed to contracted rates, which means lower out-of-pocket costs for you. Some plans cover out-of-network services at 40% coinsurance after your deductible. Others are in-network only. Check your plan documents for details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="provider-3" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Do I need a referral to see a specialist?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Most plans under Basic Benefits do not require a referral. Contact SBMA member services at 1-888-505-7724 to confirm your specific plan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

          {/* Prescription Coverage */}
          <motion.div
            id="formulary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 scroll-mt-24"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-blue-800 border-b pb-2 mb-4">
              Prescription Coverage
            </motion.h3>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="formulary-1" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Where can I find my drug formulary?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="mb-4">Your formulary link depends on your plan:</p>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://sbmabenefits.com/purerx-standard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          VitalCare, EliteCare, PrimeCare <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://sbmabenefits.com/purerx-base" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Advantage MV, Premium MV, Max MV <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <span className="text-gray-700">WellCare — PureRx Discount Program (up to 80% off, not a copay plan)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="formulary-2" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What are my prescription copays?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="mb-3">Copays vary by plan:</p>
                    <ul className="space-y-2 mb-3">
                      <li><strong>PureRx Base plans:</strong> Tier 1 generics $10. Higher tiers and brands: discount only.</li>
                      <li><strong>PureRx Standard plans:</strong> Tier 1 $15 / Tier 2 $30 / Tier 3 $50 / Tier 4 $75.</li>
                      <li><strong>WellCare:</strong> Discount program only, no copay structure.</li>
                    </ul>
                    <p>Check your Summary of Benefits for your specific plan.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="formulary-3" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I fill a prescription?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Present your medical ID card at any of 60,000+ retail pharmacies. For reimbursement on covered drugs, visit{" "}
                      <a href="https://sbmabenefits.com/rxreimbursement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                        sbmabenefits.com/rxreimbursement <ExternalLink className="w-3 h-3" />
                      </a>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

          {/* Virtual Care — Recuro Health */}
          <motion.div
            id="virtual-care"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 scroll-mt-24"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-blue-800 border-b pb-2 mb-4">
              Virtual Care — Recuro Health
            </motion.h3>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="virtual-1" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I access virtual care?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    All Basic Benefits plans include virtual care through Recuro Health. Access via the HealthWallet app or call 1-855-673-2876. Virtual Urgent Care is available 24/7 at $0 copay.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="virtual-2" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    What conditions can virtual urgent care treat?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Common conditions include cold/flu/cough, fever, headache, nausea, allergies, rashes, GI issues, respiratory issues, UTIs, and more. Prescriptions are sent directly to your pharmacy after your visit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="virtual-3" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Is behavioral health available virtually?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes. Recuro Health connects members with licensed counselors and therapists via secure video or phone. Coverage and cost vary by plan — some plans include behavioral health at $0 copay; others charge $50 per visit for the first 3 sessions, then $85 thereafter. Check your plan documents for details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="virtual-4" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Is virtual care available 24/7?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Virtual Urgent Care is available 24/7 via phone, video, or messaging. Behavioral health appointments are scheduled, typically between 7am–7pm.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

          {/* Plan Documents & Disclosures */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-blue-800 border-b pb-2 mb-4">
              Plan Documents & Disclosures
            </motion.h3>
            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="docs-1" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Where do I find my COBRA notice, privacy policy, or other plan documents?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Visit{" "}
                      <a href="https://sbmabenefits.com/coverage-details" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                        sbmabenefits.com/coverage-details <ExternalLink className="w-3 h-3" />
                      </a>{" "}
                      to view, download, or print your Non-Creditable Coverage Disclosure, COBRA Rights Notice, and General Notice of Privacy Practices. You may also call SBMA at 1-888-505-7724 to request documents by mail.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="docs-2" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I request a prescription drug reimbursement?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Submit your request online at{" "}
                      <a href="https://sbmabenefits.com/rxreimbursement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                        sbmabenefits.com/rxreimbursement <ExternalLink className="w-3 h-3" />
                      </a>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-blue-100 mb-10">
              Our team typically responds within one business day.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:855-617-8205"
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 text-white flex items-center gap-4 min-w-[280px] transition-colors"
              >
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Call Member Support</p>
                  <p className="text-blue-100">855-617-8205</p>
                </div>
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 text-white flex items-center gap-4 min-w-[280px] transition-colors"
              >
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Send a Message</p>
                  <p className="text-blue-100">Contact form</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-[#F8FAFC] border-t">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Basic Benefits LLC · 917 Lily Creek Rd, Louisville, KY 40243<br />
            support@basicbenefits.com · 855-617-8205<br />
            Plan administration provided by SBMA Benefits · 1-888-505-7724
          </p>
        </div>
      </section>
    </main>
  )
}
