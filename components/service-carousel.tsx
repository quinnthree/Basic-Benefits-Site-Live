"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImprovedServiceCard } from "./improved-service-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

interface Service {
  title: string
  icon: React.ReactNode
  subtitle: string
  description: string
  features: string[]
  note: string
  isPopular?: boolean
}

interface ServiceCarouselProps {
  services: Service[]
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  return (
    <div className="relative w-full px-10 overflow-hidden pb-20">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ImprovedServiceCard {...services[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <Button
        variant="outline"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
