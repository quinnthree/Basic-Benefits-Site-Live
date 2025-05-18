import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "For Employers - Basic Benefits Healthcare Solutions",
  description: "Compare our healthcare plans and find the right solution for your business and employees.",
}

export default function ForEmployersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
