import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Health Insurance Options for Small Businesses | Basic Benefits",
  description:
    "Explore affordable, compliant health insurance options for small businesses, including MEC, minimum value plans, and virtual-first benefits.",
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
      "Explore affordable, compliant health insurance options for small businesses, including MEC, minimum value plans, and virtual-first benefits.",
    url: "https://www.basicbenefits.com/solutions/health-insurance-small-business",
    siteName: "Basic Benefits",
    type: "website",
    images: [
      {
        url: "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/smallbus_hero_w.jpg",
        width: 1200,
        height: 630,
        alt: "Small business leaders discussing employee health benefit options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insurance Options for Small Businesses | Basic Benefits",
    description:
      "Explore affordable, compliant health insurance options for small businesses, including MEC, minimum value plans, and virtual-first benefits.",
    images: [
      "https://3ximsxvnhk4ndbe8.public.blob.vercel-storage.com/smallbus_hero_w.jpg",
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
