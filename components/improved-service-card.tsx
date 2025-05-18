import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  subtitle: string
  description: string
  features: string[]
  note: string
  link?: string
  isPopular?: boolean
}

export function ImprovedServiceCard({
  title,
  icon,
  subtitle,
  description,
  features,
  note,
  link = "/solutions",
  isPopular = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg ${isPopular ? "col-span-2 md:col-span-1 bg-blue-50" : "bg-white"}`}
    >
      <CardHeader>
        {isPopular && <Badge className="mb-2 bg-blue-500">Most Popular</Badge>}
        <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">{icon}</div>
        <CardTitle className="flex items-center gap-2">{title}</CardTitle>
        <CardDescription className="font-semibold text-blue-600">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <p className="text-sm text-gray-600">
          <span className="text-blue-500 mr-2">🔹</span>
          {note}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Learn More →</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
