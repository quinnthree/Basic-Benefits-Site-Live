import { Button } from "@/components/ui/button"
import { ImprovedServiceCard } from "@/components/improved-service-card"
import { ServiceCarousel } from "@/components/service-carousel"
import { TestimonialSection } from "@/components/testimonial-section"
import { RequestProposal } from "@/components/request-proposal"
import Link from "next/link"
import { Briefcase, HeartPulse, PiggyBank } from "lucide-react"
import Script from "next/script"
import { generateOrganizationSchema } from "@/components/structured-data"

const services = [
  {
    title: "Virtual Care",
    icon: <HeartPulse className="w-6 h-6 text-blue-500" />,
    subtitle: "24/7 Access to Healthcare Professionals",
    description:
      "Give employees on-demand access to virtual healthcare providers for primary care, urgent care, and behavioral health—all from the convenience of their devices.",
    features: [
      "Virtual Primary Care with a dedicated doctor",
      "24/7 Virtual Urgent Care for immediate concerns",
      "Mental Health & Therapy Support",
    ],
    note: "No appointments needed. No long waits. Just care when you need it.",
  },
  {
    title: "MEC & MV Plans",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    subtitle: "ACA-Compliant Coverage for Every Business",
    description:
      "Ensure compliance while offering essential, cost-effective healthcare coverage that meets federal requirements.",
    features: [
      "MEC Plans covering preventive care & wellness",
      "MEC+ Plans with added benefits like urgent care",
      "Minimum Value Plans (MV) with hospitalization & specialist visits",
    ],
    note: "Flexible, affordable plans designed to protect employees & businesses.",
    isPopular: true,
  },
  {
    title: "ICHRA Plans",
    icon: <PiggyBank className="w-6 h-6 text-blue-500" />,
    subtitle: "Flexible Health Reimbursement for Employees",
    description:
      "Empower employees to choose the health plan that works best for them, while businesses enjoy tax advantages and cost control.",
    features: [
      "Reimbursement-based health benefits",
      "Employees choose their preferred ACA-compliant plan",
      "Seamless administration & virtual card payments",
    ],
    note: "A smarter way to offer healthcare—cost-effective & customizable.",
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
      <div className="relative overflow-hidden bg-[#1B2741] pt-20">
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#1e2b47"
              fillOpacity="0.8"
              d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <path
              fill="#232f4c"
              fillOpacity="0.6"
              d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,181.3C672,171,768,149,864,160C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <path
              fill="#283352"
              fillOpacity="0.4"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6">
          <div className="mx-auto text-center max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Affordable Healthcare Benefits</span>
              <span className="block text-[#7EB6FF]">for Every Business</span>
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Plans that cut costs, reduce risk, and make healthcare a breeze—for teams of any size.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8" asChild>
                <Link href="/for-employers">See Our Plans</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-400 hover:bg-gray-700 hover:text-gray-200 px-8"
                asChild
              >
                <Link href="/services">Learn More</Link>
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
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
