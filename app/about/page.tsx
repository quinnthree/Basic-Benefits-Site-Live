import { CardTitle } from "@/components/ui/card"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Phone, Mail, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-2xl font-semibold text-blue-600">Simplifying Benefits, Maximizing Value</p>
        </div>

        {/* Main Content */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* About Us */}
          <section>
            <p className="text-lg text-gray-700 mb-6">
              At Basic Benefits, we specialize in designing and delivering cost-effective, innovative, and scalable
              healthcare solutions that empower businesses, brokers, and associations. Our mission is to provide
              affordable health benefits that meet the needs of today's diverse workforce while streamlining the
              administrative burden for employers.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              We believe that everyone deserves access to quality healthcare without complexity. Our goal is to:
            </p>
            <ul className="space-y-2">
              {[
                "Simplify the benefits process for businesses and employees.",
                "Enhance affordability without compromising coverage.",
                "Provide flexible solutions tailored to the unique needs of each organization.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Through our innovative Virtual Care, MEC & MV Plans, and ICHRA solutions, we bridge the gap between
              affordability and comprehensive healthcare access.
            </p>
          </section>

          {/* Why Choose Basic Benefits */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Why Choose Basic Benefits?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Affordable & Compliant Plans",
                  description:
                    "We ensure that businesses stay ACA-compliant while keeping costs predictable and manageable.",
                },
                {
                  title: "Tech-Driven Enrollment & Administration",
                  description:
                    "We leverage cutting-edge technology to simplify eligibility management, billing, and quoting, ensuring a seamless experience.",
                },
                {
                  title: "Flexible & Scalable Solutions",
                  description:
                    "From small businesses to large enterprises, our solutions scale to meet your needs, offering everything from telemedicine to self-funded plan options.",
                },
                {
                  title: "Nationwide Provider Access",
                  description:
                    "Our network extends across the U.S., ensuring that employees have access to virtual and in-person healthcare whenever they need it.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-600">🔹 {item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Story */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded with the belief that health benefits should be simple, accessible, and affordable, Basic Benefits
              was created by industry experts who saw a need for more flexible, modern healthcare solutions.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience in health benefits consulting, plan administration, and technology integration,
              we built a company that helps businesses navigate the complex world of employee benefits with ease.
            </p>
          </section>

          {/* Join Us */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Simplifying Healthcare Benefits</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Basic Benefits, we're committed to reshaping the future of healthcare benefits. Whether you're a
              business looking for cost-effective coverage or a broker seeking scalable solutions, we're here to help.
            </p>
            <div className="space-y-4">
              <p className="font-semibold">Contact Us to learn more about how we can support your business.</p>
              <div className="flex items-center justify-center space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>855-617-8205</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>info@basicbenefits.com</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <span>www.basicbenefits.com</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Plan?</h2>
            <p className="text-lg mb-6">Get a Free Consultation</p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Now</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
