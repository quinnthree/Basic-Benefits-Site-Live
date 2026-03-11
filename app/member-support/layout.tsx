import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Member Support | Basic Benefits",
  description:
    "Find answers to common questions about your Basic Benefits health plan. Access your ID card, find providers, view drug formulary, and get virtual care support.",
  keywords: [
    "member support",
    "health benefits FAQ",
    "ID card",
    "find a provider",
    "drug formulary",
    "virtual care",
    "Basic Benefits",
    "SBMA",
  ],
  openGraph: {
    title: "Member Support | Basic Benefits",
    description:
      "Find answers to common questions about your Basic Benefits health plan. Access your ID card, find providers, view drug formulary, and get virtual care support.",
    url: "https://www.basicbenefits.com/member-support",
    siteName: "Basic Benefits",
    type: "website",
  },
}

export default function MemberSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
