"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Video, Shield, Building2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16">
      <div className="container py-12">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Healthcare Solutions</h1>
          <p className="text-gray-600">
            Comprehensive healthcare benefits designed to meet the needs of your business and employees.
          </p>
        </motion.div>

        {/* Solutions */}
        <motion.div 
          className="space-y-16 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* NEW: Health Insurance Options for Small Businesses - Primary Solution */}
          <motion.section 
            className="scroll-mt-24" 
            id="health-insurance-small-business"
            variants={fadeInUp}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Featured Solution</span>
                      <h2 className="text-2xl font-bold">Health Insurance Options for Small Businesses</h2>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Affordable, compliant health benefit strategies for employers
                  </h3>
                  <p className="text-gray-600">
                    Discover a range of healthcare solutions including MEC, Minimum Value plans, virtual care, and preventive options — all designed to help small and mid-sized businesses offer meaningful coverage while controlling costs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      ACA-aware options for employers with 10–500 employees
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      Flexible coverage for hourly and variable-hour workforces
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      Modular approach combining insurance, virtual care, and diagnostics
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button variant="default" size="lg" asChild className="group">
                      <Link href="/solutions/health-insurance-small-business">
                        Explore Options
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="bg-transparent">
                      <Link href="/contact">Talk to a Benefits Advisor</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-2 relative h-[350px] md:h-full">
                  <Image
                    src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/smallbus_hero_w.jpg"
                    alt="Health Insurance Options for Small Businesses"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Virtual Primary Care */}
          <motion.section 
            className="scroll-mt-24" 
            id="virtual-primary-care"
            variants={fadeInUp}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Virtual Primary Care</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">24/7 Healthcare Access – Anytime, Anywhere</h3>
                  <p className="text-gray-600">
                    Our Virtual Primary Care service ensures that employees can access licensed medical professionals
                    anytime, eliminating the hassle of in-person doctor visits. Often offered as part of broader{" "}
                    <Link href="/solutions/health-insurance-small-business" className="text-blue-600 hover:underline font-medium">
                      health insurance options for small businesses
                    </Link>.
                  </p>
                  <h4 className="font-semibold">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Unlimited virtual consultations with primary care doctors
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      24/7 urgent care for immediate health concerns
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Behavioral health therapy & mental health counseling
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Prescription services with easy digital prescriptions
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Chronic condition management (e.g., diabetes, hypertension)
                    </li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Why Choose Virtual Care?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Reduce employee absenteeism due to in-person visits.</li>
                      <li>Save on healthcare costs by minimizing ER visits.</li>
                      <li>Convenient remote access for telemedicine, improving satisfaction.</li>
                    </ul>
                  </div>
                  <div className="flex justify-start">
                    <Button variant="default" size="lg" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-2 relative h-[400px] md:h-full">
                  <Image
                    src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/telemedicine_image600-01-qS59XuwwMh07KsOTLCGN79UHoDyN2o.jpg"
                    alt="Virtual Primary Care"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </motion.section>

          {/* MEC & MV Plans */}
          <motion.section 
            className="scroll-mt-24" 
            id="mec-mv-plans"
            variants={fadeInUp}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-2 relative h-[400px] md:h-full order-2 md:order-1">
                  <Image
                    src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/insurance_image600-01-ilvpVJPGvwxONSrFreTPiGFKAdhDQI.jpg"
                    alt="MEC & MV Plans"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-3 space-y-6 order-1 md:order-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">MEC & MV Plans</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600">
                    ACA-Compliant Coverage to Protect Your Workforce
                  </h3>
                  <p className="text-gray-600">
                    Ensure your business stays compliant with the Affordable Care Act (ACA) while offering
                    cost-effective healthcare coverage for your employees.
                  </p>
                  <h4 className="font-semibold">Plan Options:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>
                        <strong>Minimum Essential Coverage (MEC)</strong> – Covers preventive care, wellness visits,
                        immunizations, and screenings.
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>
                        <strong>MEC+ Plans</strong> – Adds urgent care, specialist visits, and behavioral health
                        support.
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>
                        <strong>Minimum Value Plans (MV)</strong> – Comprehensive coverage including hospitalization,
                        surgery, and prescriptions.
                      </span>
                    </li>
                  </ul>
                  <h4 className="font-semibold">What's Included?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      100% coverage for preventive services (as per ACA)
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Low-cost doctor and specialist visits
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Urgent care & prescription benefits
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                      Customizable add-ons for dental, vision, and telemedicine
                    </li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Why This Matters?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Avoid federal penalties while providing essential healthcare.</li>
                      <li>Help retain employees by offering affordable health benefits.</li>
                      <li>Give employees a valuable safety net for medical needs.</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    <Link href="/solutions/health-insurance-small-business" className="text-blue-600 hover:underline font-medium">
                      See how MEC and MV plans fit into a complete small business health insurance strategy
                    </Link>.
                  </p>
                  <div className="flex justify-start">
                    <Button variant="default" size="lg" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>
        </motion.div>

        {/* Testimonials */}
        <motion.section 
          className="my-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-lg italic mb-4">
              "With Basic Benefits, we reduced our healthcare costs by 30% while ensuring our employees have access to
              quality care."
            </p>
            <p className="font-semibold">— HR Director, ABC Corporation</p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="my-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right for You?</h2>
          <p className="text-xl mb-6">Let's Find the Best Solution for Your Business!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </motion.section>
      </div>
    </div>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
