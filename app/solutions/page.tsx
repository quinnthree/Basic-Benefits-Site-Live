import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Video, Shield, CreditCard } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Healthcare Solutions</h1>
          <p className="text-gray-600">
            Comprehensive healthcare benefits designed to meet the needs of your business and employees.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Virtual Primary Care */}
          <section className="scroll-mt-24" id="virtual-primary-care">
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
                    anytime, eliminating the hassle of in-person doctor visits.
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
          </section>

          {/* MEC & MV Plans */}
          <section className="scroll-mt-24" id="mec-mv-plans">
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
                  <div className="flex justify-start">
                    <Button variant="default" size="lg" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* ICHRA Plans */}
          <section className="scroll-mt-24" id="ichra-plans">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold">ICHRA Plans</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600">Personalized Health Plans with Tax Benefits</h3>
                  <p className="text-gray-600">
                    The Individual Coverage Health Reimbursement Arrangement (ICHRA) allows employers to reimburse
                    employees for their individual health plans while offering tax advantages.
                  </p>
                  <h4 className="font-semibold">How ICHRA Works:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Employers set a fixed reimbursement amount per employee.</li>
                    <li>Employees choose their own individual ACA-compliant health plan.</li>
                    <li>Employers get tax advantages while employees gain flexibility.</li>
                  </ol>
                  <h4 className="font-semibold">ICHRA Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-purple-600" />
                      Tax-free health coverage for both employer and employee
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-purple-600" />
                      Customizable contribution amounts based on employee type
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-purple-600" />
                      Employees choose their preferred ACA-compliant plan
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <CheckIcon className="h-5 w-5 text-purple-600" />
                      No network restrictions – nationwide provider access
                    </li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Why Switch to ICHRA?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Reduce administrative burdens of managing a group health plan.</li>
                      <li>Cost control – Employers can set a budget without surprises.</li>
                      <li>Flexible plan choices for employees instead of one-size-fits-all.</li>
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
                    src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/office_image600-01-01-iKhMusjwW17RKFBQmjibwdV8fybjgX.jpg"
                    alt="ICHRA Plans"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </section>
        </div>

        {/* Testimonials */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg italic mb-4">
              "With Basic Benefits, we reduced our healthcare costs by 30% while ensuring our employees have access to
              quality care."
            </p>
            <p className="font-semibold">— HR Director, Comfort Keepers</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right for You?</h2>
          <p className="text-xl mb-6">Let's Find the Best Solution for Your Business!</p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </section>
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
