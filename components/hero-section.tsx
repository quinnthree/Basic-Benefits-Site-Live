import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#1B2741]">
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
      <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Affordable Healthcare Benefits</span>
            <span className="block text-[#7EB6FF]">for Every Business</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Simplified health plans and cost-saving solutions—customized for all situations
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-300 hover:bg-gray-800 px-8"
              asChild
            >
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
