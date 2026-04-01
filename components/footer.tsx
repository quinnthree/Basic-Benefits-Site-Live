"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B2741] text-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Basic Benefits</h3>
          <p className="text-sm text-gray-300">Modern benefits built for the way people work today.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/solutions#virtual-care">Virtual Primary Care</Link>
            </li>
            <li>
              <Link href="/solutions#mec-plans">MEC Plans</Link>
            </li>
            <li>
              <Link href="/solutions#mvp-plans">Minimum Value Plans</Link>
            </li>
            <li>
              <Link href="/solutions#wellness">GLP-1 & Wellness</Link>
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
          <h4 className="font-semibold mb-4">Member Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/member-support">Member Support</Link>
            </li>
            <li>
              <Link href="/member-support#id-card">ID Card & Coverage</Link>
            </li>
            <li>
              <Link href="/member-support#provider">Find a Provider</Link>
            </li>
            <li>
              <Link href="/member-support#virtual-care">Virtual Care</Link>
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
        <div className="container py-4 text-sm text-gray-300">© 2026 Basic Benefits. All rights reserved.</div>
      </div>
    </footer>
  )
}
