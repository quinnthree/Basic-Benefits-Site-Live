"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = {
  "Virtual Care": {
    text: "The virtual care solution has transformed how our employees access healthcare. 24/7 availability means our team gets care when they need it most.",
    author: "Sarah Chen",
    position: "HR Director",
    company: "TechCorp",
  },
  "MEC & MV Plans": {
    text: "Basic Benefits helped us find the perfect MEC & MV plan that meets ACA requirements while keeping costs manageable.",
    author: "Michael Rodriguez",
    position: "Operations Manager",
    company: "Manufacturing Co.",
  },
  "ICHRA Plans": {
    text: "The flexibility of ICHRA plans has been a game-changer for our diverse workforce. Our employees love having choices.",
    author: "Jennifer Smith",
    position: "Benefits Coordinator",
    company: "Global Services Inc.",
  },
}

export function TestimonialSection() {
  const [activeProduct, setActiveProduct] = useState<keyof typeof testimonials>("Virtual Care")

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="space-y-4">
            {Object.keys(testimonials).map((product) => (
              <Button
                key={product}
                variant={activeProduct === product ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveProduct(product as keyof typeof testimonials)}
              >
                {product}
              </Button>
            ))}
          </div>
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-6 space-y-4">
              <p className="text-lg">"{testimonials[activeProduct].text}"</p>
              <div className="text-center">
                <p className="font-semibold">{testimonials[activeProduct].author}</p>
                <p className="text-sm text-blue-200">
                  {testimonials[activeProduct].position}, {testimonials[activeProduct].company}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
