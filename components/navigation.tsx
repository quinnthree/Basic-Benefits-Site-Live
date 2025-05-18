"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname, searchParams])

  return (
    <nav className="fixed top-0 left-0 right-0 border-b bg-white z-50">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-40 h-24 relative flex items-center justify-center">
            <Image
              src="https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/BasicBenefits_Logo_Vert-xF15AbbAxmpVQEZWAcaeXRfnDqaBWp.svg"
              alt="Basic Benefits Logo"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-base font-medium">
            Home
          </Link>
          <Link href="/for-employers" className="text-base font-medium">
            For Employers
          </Link>
          <Link href="/solutions" className="text-base font-medium">
            Solutions
          </Link>
          <Link href="/services" className="text-base font-medium">
            Services
          </Link>
          <Link href="/contact" className="text-base font-medium">
            Contact
          </Link>
          <Button variant="default" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-8 w-8" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/for-employers" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              For Employers
            </Link>
            <Link href="/solutions" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="/services" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="block text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Button variant="default" className="w-full" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
