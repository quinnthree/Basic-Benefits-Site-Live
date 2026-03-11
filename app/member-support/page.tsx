"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CreditCard, MapPin, Pill, Video, Phone, Mail, ArrowRight, ExternalLink, Smartphone, CheckCircle2, FileText, Download } from "lucide-react"
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
  {
    title: "HealthWallet App",
    description: "Download the app for ID cards, benefits, and virtual care.",
    icon: Smartphone,
    anchor: "#healthwallet",
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
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
                        <a href="https://www.multiplan.com/sbmapreventiveservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Wellcare MEC <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.multiplan.com/sbmaspecificservices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Flexcare, Keycare, Vitalcare MEC <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.multiplan.com/sbmapa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Essential, Premium, and Max MVP <ExternalLink className="w-3 h-3" />
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
                        <a href="https://www.sbmabenefits.com/purerx-standard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Flexcare, Keycare, Vitalcare MEC <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.sbmabenefits.com/purerx-base" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          Essential, Premium, and Max MVP <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <span className="text-gray-700">Wellcare — PureRx Discount Program (up to 80% off, not a copay plan)</span>
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
                <AccordionItem value="docs-3" className="bg-white rounded-lg shadow-sm border-0 px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    How do I submit a claim?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Download the Claim Form or Out-of-Network Claim Form from the Submit a Claim section below. Complete all four sections and attach your Statement of Services from your provider. Email the completed form to{" "}
                      <a href="mailto:claims@sbmamec.com" className="text-blue-600 hover:underline">claims@sbmamec.com</a>. 
                      Allow 5–10 business days for processing.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Submit a Claim Section */}
      <section id="submit-claim" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">Submit a Claim</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Download the appropriate form, complete all sections, and email it with your Statement of Services to{" "}
                <a href="mailto:claims@sbmamec.com" className="text-blue-600 hover:underline">claims@sbmamec.com</a>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {/* Card 1 - Claim Form */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Claim Form</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Use for standard benefit claims covered under your plan's in-network services.
                </p>
                <a
                  href="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/SBMA%20Claim%20Forms/SBMA%20-%20Claim_Form%201.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Form
                </a>
              </div>

              {/* Card 2 - Out-of-Network Claim Form */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Out-of-Network Claim Form</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Use when your provider is not in the PHCS network and you paid out of pocket.
                </p>
                <a
                  href="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/SBMA%20Claim%20Forms/SBMA%20-%20Out_of_Network_Claim_Form.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Form
                </a>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-gray-500 mt-6 text-center max-w-[900px] mx-auto">
              Completed forms can be emailed to <a href="mailto:claims@sbmamec.com" className="text-blue-600 hover:underline">claims@sbmamec.com</a> or mailed to: SBMA, Attn: Member Claims, 2307 Fenton Parkway #107-126, San Diego, CA 92108.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* HealthWallet Section */}
      <section id="healthwallet" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HealthWallet App</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your benefits, ID cards, and care options — all in one place.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - How To Get Started */}
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                    How To Get Started
                  </h3>
                  
                  {/* Steps */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Download the App</p>
                        <a 
                          href="http://get.thehealthwallet.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline inline-flex items-center gap-1 mb-3"
                        >
                          Visit get.thehealthwallet.com <ExternalLink className="w-3 h-3" />
                        </a>
                        <p className="text-sm text-gray-600 mb-2">Or download from your app store:</p>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href="https://play.google.com/store/apps/details?id=healthwallet.thehealthwallet.com&hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                            </svg>
                            Google Play
                          </a>
                          <a 
                            href="https://itunes.apple.com/us/app/the-health-wallet/id1178462674?mt=8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            App Store
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Log In</p>
                        <p className="text-gray-600 text-sm">Choose your login option as instructed by your benefit plan.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Get Started!</p>
                        <p className="text-gray-600 text-sm">Access your Health Wallet services and features.</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="mt-8 pt-6 border-t border-blue-200">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GFtikWXeflYtOnZ8ppe6lWBC0cQ6DD.png"
                        alt="Scan to download HealthWallet app"
                        width={80}
                        height={80}
                        className="rounded-lg bg-white p-1"
                      />
                      <p className="text-sm text-gray-600">Scan the QR code to download the app</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Features & Support */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {/* Features List */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">In HealthWallet you'll have access to:</h3>
                  <ul className="space-y-3">
                    {[
                      "Digital ID Cards",
                      "Explanations of Benefits",
                      "Provider Searches",
                      "Prescription Benefits",
                      "Virtual Care Options",
                      "and more..."
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Contact */}
                <div className="bg-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-lg font-semibold mb-4">Need Help with the HealthWallet App?</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:1-866-918-7735" 
                      className="flex items-center gap-3 hover:text-blue-200 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>1-866-918-7735</span>
                    </a>
                    <a 
                      href="mailto:support@thehealthwallet.com" 
                      className="flex items-center gap-3 hover:text-blue-200 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>support@thehealthwallet.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
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
