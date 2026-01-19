import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Health Insurance Options for Small Businesses | Basic Benefits",
  description:
    "Discover affordable, ACA-compliant health insurance options for small businesses with 10-500 employees. Explore MEC, MV, virtual care, and preventive benefit solutions.",
  keywords: [
    "small business health insurance",
    "health insurance for small businesses",
    "ACA compliant health plans",
    "MEC plans",
    "minimum essential coverage",
    "MV plans",
    "minimum value plans",
    "virtual care benefits",
    "employee health benefits",
    "affordable health coverage",
    "small business benefits",
    "employer health insurance",
  ],
  openGraph: {
    title: "Health Insurance Options for Small Businesses | Basic Benefits",
    description:
      "Affordable, compliant benefit solutions for employers with 10-500 employees. Explore MEC, MV, virtual care, and preventive benefits.",
    url: "https://www.basicbenefits.com/solutions/health-insurance-small-business",
    siteName: "Basic Benefits",
    type: "website",
    images: [
      {
        url: "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/office_image600-01-01-iKhMusjwW17RKFBQmjibwdV8fybjgX.jpg",
        width: 600,
        height: 900,
        alt: "Small business leaders discussing employee health benefit options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insurance Options for Small Businesses | Basic Benefits",
    description:
      "Affordable, compliant benefit solutions for employers with 10-500 employees. Explore MEC, MV, virtual care, and preventive benefits.",
    images: [
      "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/office_image600-01-01-iKhMusjwW17RKFBQmjibwdV8fybjgX.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.basicbenefits.com/solutions/health-insurance-small-business",
  },
}

export default function HealthInsuranceSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
