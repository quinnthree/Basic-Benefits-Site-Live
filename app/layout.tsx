import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Basic Benefits - Healthcare Solutions for Every Business",
  description: "Simplified healthcare solutions for every workforce",
  icons: {
    icon: [
      {
        url: "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/BasicBenefits_Logo_Favicon-8S86BojaU40BLbFDj2c57ovddnSP52.ico",
        sizes: "any",
      },
    ],
    shortcut: [
      {
        url: "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/BasicBenefits_Logo_Favicon-8S86BojaU40BLbFDj2c57ovddnSP52.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/BasicBenefits_Logo_Favicon-8S86BojaU40BLbFDj2c57ovddnSP52.ico",
        sizes: "180x180",
        type: "image/x-icon",
      },
    ],
  },
  verification: {
    google: "UUxkYFKmX5bV1fKkx3OQpKTv3RegYvjbaUFpVGNWkFw",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
