"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B2741] text-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Basic Benefits</h3>
          <p className="text-sm text-gray-300">Simplified healthcare solutions for every workforce</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/solutions#virtual-primary-care">Virtual Primary Care</Link>
            </li>
            <li>
              <Link href="/solutions#mec-mv-plans">MEC & MV Plans</Link>
            </li>
            <li>
              <Link href="/solutions#ichra-plans">ICHRA Plans</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61573522040793"
              className="text-gray-300 hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/basicbenefits/" className="text-gray-300 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/basicbenefits/" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container py-4 text-sm text-gray-300">© 2025 Basic Benefits. All rights reserved.</div>
      </div>
    </footer>
  )
}
