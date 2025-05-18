"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function RequestProposal() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      companyName: formData.get("companyName"),
      employees: formData.get("employees"),
      additionalInfo: formData.get("additionalInfo"),
    }

    try {
      console.log("Submitting proposal request:", data)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log("API response:", result)

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`)
      }

      // Reset form using the ref
      if (formRef.current) {
        formRef.current.reset()
      }

      // Show success message
      toast.success(result.message || "Thank you for your request. We'll be in touch soon!")
    } catch (error) {
      console.error("Proposal request submission error:", error instanceof Error ? error.message : String(error))
      toast.error("There was an error submitting your request. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" name="companyName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="employees">Number of Employees</Label>
          <Input id="employees" name="employees" type="number" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea id="additionalInfo" name="additionalInfo" rows={4} placeholder="Tell us more about your needs..." />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request a Proposal"}
      </Button>
    </form>
  )
}
