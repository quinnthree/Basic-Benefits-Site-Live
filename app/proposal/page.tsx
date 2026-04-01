"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Building2, Users, User, Check, ChevronRight } from "lucide-react"

// Types
interface FormData {
  // Step 1
  groupType: string
  industry: string
  groupSize: string
  effectiveDate: string
  currentSituation: string
  // Step 2
  basePlan: string
  needHelp: boolean
  // Step 3
  addOns: string[]
  // Step 4
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  hasBroker: string
  brokerName: string
  notes: string
}

const initialFormData: FormData = {
  groupType: "",
  industry: "",
  groupSize: "",
  effectiveDate: "",
  currentSituation: "",
  basePlan: "",
  needHelp: false,
  addOns: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  hasBroker: "",
  brokerName: "",
  notes: "",
}

const steps = [
  { id: 1, label: "Your Group" },
  { id: 2, label: "Base Plan" },
  { id: 3, label: "Add-Ons" },
  { id: 4, label: "Contact" },
]

const industries = [
  "Staffing",
  "Hospitality & Food Service",
  "Home Health & Care",
  "PEO / HR Outsourcing",
  "Construction & Trades",
  "Retail",
  "Healthcare",
  "Non-Profit",
  "General Business",
  "Other",
]

const groupSizes = [
  "1–10 employees",
  "11–25 employees",
  "26–50 employees",
  "51–100 employees",
  "101–250 employees",
  "251–500 employees",
  "500+ employees",
]

const effectiveDates = [
  "As soon as possible",
  "30 days",
  "60 days",
  "90 days",
  "Next plan year",
]

const currentSituations = [
  "No current coverage",
  "Replacing existing major medical",
  "Adding to existing major medical",
  "Replacing a MEC plan",
  "Adding MEC to an existing plan",
  "Not sure — need guidance",
]

const mecPlans = [
  {
    id: "wellcare",
    name: "WellCare",
    badge: "MEC — PREVENTIVE ONLY",
    description: "100% preventive & wellness coverage. $0 virtual urgent care. Discount-only Rx. ACA Penalty A compliant.",
    highlight: "Entry-level compliance",
  },
  {
    id: "keycare",
    name: "KeyCare",
    badge: "MEC — ENHANCED",
    description: "Adds $25 copay primary care, $0 virtual behavioral health, and tiered Rx benefits.",
    highlight: "Most popular for small groups",
  },
  {
    id: "flexcare",
    name: "FlexCare",
    badge: "MEC+ — EXPANDED",
    description: "Adds urgent care, specialist visits, lab & radiology network discounts, and full behavioral health.",
    highlight: "Best for mid-size employers",
  },
  {
    id: "vitalcare",
    name: "VitalCare",
    badge: "MEC+ — COMPREHENSIVE",
    description: "Full MEC+ coverage — primary, specialist, urgent care, labs, behavioral health, and tiered Rx. Maximum MEC depth.",
    highlight: "Maximum MEC coverage",
  },
]

const mvPlans = [
  {
    id: "mv-essential",
    name: "Essential",
    badge: "MV — ENTRY",
    description: "$2,500 deductible. $15 copay primary & specialist. $50 urgent care & labs. Hospitalization & surgery covered.",
    highlight: "Lowest premium MV option",
  },
  {
    id: "mv-premium",
    name: "Premium",
    badge: "MV — MID",
    description: "$0 deductible. $15 copay primary & specialist. Full hospitalization, surgery, and maternity.",
    highlight: "Most popular MV plan",
  },
  {
    id: "mv-max",
    name: "Max",
    badge: "MV — COMPREHENSIVE",
    description: "$0 deductible. Broadest surgery and hospitalization limits. Enhanced imaging, therapy, and Rx tiers.",
    highlight: "Maximum MV coverage",
  },
]

const addOnOptions = [
  {
    id: "virtual-care-eap",
    category: "VIRTUAL CARE",
    categoryColor: "bg-[#DCFCE7] text-[#166534]",
    title: "Virtual Care + EAP Bundle",
    description: "$0 copay primary, urgent & behavioral health. Dedicated PCP, 24/7 urgent care, therapy, psychiatry, medication management. Plus EAP — counseling, legal & financial guidance.",
  },
  {
    id: "prescription",
    category: "RX & WELLNESS",
    categoryColor: "bg-[#E0F5FE] text-[#0277A8]",
    title: "Prescription Benefit",
    description: "$0 acute / $15 chronic. 800+ generics. 65K+ pharmacy locations nationwide. Home delivery via member portal.",
  },
  {
    id: "glp1",
    category: "RX & WELLNESS",
    categoryColor: "bg-[#E0F5FE] text-[#0277A8]",
    title: "GLP-1 & Peptide Access",
    description: "Low-cost marketplace for weight-loss and wellness peptides. Dedicated virtual clinical team. Personalized or self-guided paths.",
  },
  {
    id: "wellness-hub",
    category: "RX & WELLNESS",
    categoryColor: "bg-[#E0F5FE] text-[#0277A8]",
    title: "Digital Wellness Hub",
    description: "Cardiometabolic optimization, personalized wellness journeys, nutrition coaching, habit-building, and activity programs.",
  },
  {
    id: "delta-preventive",
    category: "DENTAL",
    categoryColor: "bg-[#F3E8FF] text-[#7C3AED]",
    title: "Delta Preventive Dental",
    description: "Cleanings & X-rays covered 100%. No deductible. $1,000 annual maximum. Visit any Delta Dental PPO provider.",
  },
  {
    id: "delta-1000",
    category: "DENTAL",
    categoryColor: "bg-[#F3E8FF] text-[#7C3AED]",
    title: "Delta Dental 1000",
    description: "Preventive 100%, basic services 80%, major services 50%. $1,000 annual max. No waiting periods.",
  },
  {
    id: "delta-1500",
    category: "DENTAL",
    categoryColor: "bg-[#F3E8FF] text-[#7C3AED]",
    title: "Delta Dental 1500",
    description: "Preventive 100%, basic services 80%, major services 50%. $1,500 annual max. No waiting periods.",
  },
  {
    id: "vsp-vision",
    category: "VISION",
    categoryColor: "bg-[#FEF3C7] text-[#92400E]",
    title: "VSP Vision",
    description: "$10 copay comprehensive exam. $130 frame allowance. $25 copay lenses. Once every 12 months.",
  },
  {
    id: "critical-10k",
    category: "SUPPLEMENTAL",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "Critical Care — $10,000",
    description: "Lump-sum benefit for cancer, heart attack, stroke, and end-stage renal failure. $10K employee / $10K spouse / $5K children.",
  },
  {
    id: "critical-25k",
    category: "SUPPLEMENTAL",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "Critical Care — $25,000",
    description: "Same covered conditions at $25K employee / $25K spouse / $12.5K children benefit amounts.",
  },
  {
    id: "hospital-low",
    category: "SUPPLEMENTAL",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "ExtraCare Hospital Indemnity — Low",
    description: "$2,000 hospital admission benefit. $50/day confinement. Inpatient surgery coverage. Underwritten by Mutual of Omaha.",
  },
  {
    id: "hospital-high",
    category: "SUPPLEMENTAL",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "ExtraCare Hospital Indemnity — High",
    description: "$2,500 hospital admission. $200/day confinement. Outpatient surgery, ER, and ambulance benefits included.",
  },
]

export default function ProposalPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const toggleAddOn = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.groupType) newErrors.groupType = "Please select who you are"
      if (!formData.industry) newErrors.industry = "Please select an industry"
      if (!formData.groupSize) newErrors.groupSize = "Please select group size"
      if (!formData.effectiveDate) newErrors.effectiveDate = "Please select effective date"
      if (!formData.currentSituation) newErrors.currentSituation = "Please select current situation"
    }

    if (step === 4) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (validateStep(4)) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }

  const goToStep = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step)
    }
  }

  const getSelectedPlanName = () => {
    const allPlans = [...mecPlans, ...mvPlans]
    const plan = allPlans.find((p) => p.id === formData.basePlan)
    return plan ? plan.name : "None selected"
  }

  const getSelectedAddOns = () => {
    if (formData.addOns.length === 0) return "None selected"
    return formData.addOns
      .map((id) => addOnOptions.find((a) => a.id === id)?.title)
      .filter(Boolean)
      .join(", ")
  }

  const getGroupTypeLabel = () => {
    const labels: Record<string, string> = {
      employer: "Employer / HR",
      association: "Association / Chamber",
      individual: "Individual / DTC",
    }
    return labels[formData.groupType] || "None selected"
  }

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#000836",
          backgroundImage: `
            radial-gradient(ellipse 600px 600px at 85% 15%, rgba(22,178,247,0.18), transparent),
            radial-gradient(circle 1.5px at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 24px 24px",
          padding: "72px 0 48px",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p
            className="text-[#16B2F7] text-xs font-bold uppercase mb-4"
            style={{ letterSpacing: "3px", fontFamily: "var(--font-sans)" }}
          >
            BUILD YOUR PROPOSAL
          </p>

          <h1
            className="text-white font-extrabold"
            style={{
              fontSize: "clamp(36px, 4.5vw, 58px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              fontFamily: "var(--font-sans)",
            }}
          >
            <span className="block">The right benefits stack</span>
            <span className="block italic text-[#16B2F7]">for your workforce.</span>
          </h1>

          <p
            className="mt-6 mx-auto"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
              maxWidth: "540px",
              lineHeight: 1.75,
              fontSize: "1.125rem",
              fontFamily: "var(--font-sans)",
            }}
          >
            Tell us about your group and select the components you need. We&apos;ll build a custom quote — no published rate sheets, no pressure.
          </p>

          <p
            className="mt-4 mx-auto italic"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              fontFamily: "var(--font-sans)",
            }}
          >
            Already working with a broker? Have them submit on your behalf at basicbenefits.com/brokers
          </p>
        </div>
      </section>

      {/* SECTION 2: PROPOSAL BUILDER */}
      <section style={{ backgroundColor: "#F7F8F9", padding: "72px 0" }}>
        <div className="max-w-[760px] mx-auto px-4">
          {isSubmitted ? (
            /* SUCCESS STATE */
            <div
              className="bg-white text-center"
              style={{
                borderRadius: "16px",
                padding: "48px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="mx-auto mb-6 flex items-center justify-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(22,178,247,0.1)",
                }}
              >
                <Check className="w-10 h-10 text-[#16B2F7]" />
              </div>
              <h2
                className="text-[#000836] font-semibold mb-4"
                style={{ fontSize: "24px", fontFamily: "var(--font-sans)" }}
              >
                Your proposal request is submitted.
              </h2>
              <p
                className="mx-auto mb-6"
                style={{
                  color: "#828993",
                  fontSize: "15px",
                  maxWidth: "420px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                We&apos;ll review your selections and reach out within one business day. Check your email for a confirmation.
              </p>
              <Link
                href="/solutions"
                className="text-[#16B2F7] font-semibold hover:underline"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                In the meantime, explore our solutions →
              </Link>
            </div>
          ) : (
            /* FORM */
            <div
              className="bg-white"
              style={{
                borderRadius: "16px",
                padding: "48px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* STEP INDICATOR */}
              <div className="flex items-center justify-between mb-10">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => goToStep(step.id)}
                        disabled={step.id > currentStep}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors"
                        style={{
                          backgroundColor:
                            step.id < currentStep
                              ? "#000836"
                              : step.id === currentStep
                                ? "#16B2F7"
                                : "transparent",
                          border:
                            step.id > currentStep ? "2px solid #D0D2D8" : "none",
                          color:
                            step.id <= currentStep ? "white" : "#828993",
                          cursor: step.id < currentStep ? "pointer" : "default",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {step.id < currentStep ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step.id
                        )}
                      </button>
                      <span
                        className="mt-2 text-xs text-center"
                        style={{
                          color: step.id === currentStep ? "#000836" : "#828993",
                          fontWeight: step.id === currentStep ? 600 : 400,
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className="flex-1 h-0.5 mx-2 mt-[-20px]"
                        style={{
                          backgroundColor:
                            step.id < currentStep ? "#16B2F7" : "#D0D2D8",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* STEP 1: YOUR GROUP */}
              {currentStep === 1 && (
                <div>
                  <p
                    className="text-[#16B2F7] text-[11px] font-bold uppercase mb-2"
                    style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                  >
                    STEP 1 OF 4
                  </p>
                  <h2
                    className="text-[#000836] font-semibold mb-6"
                    style={{ fontSize: "22px", fontFamily: "var(--font-sans)" }}
                  >
                    Tell us about your group.
                  </h2>

                  {/* Group Type Cards */}
                  <div className="mb-6">
                    <Label
                      className="block mb-3 text-sm font-medium text-[#000836]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Who are you?
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          id: "employer",
                          icon: Building2,
                          title: "Employer / HR",
                          sub: "I'm buying for my company",
                        },
                        {
                          id: "association",
                          icon: Users,
                          title: "Association / Chamber",
                          sub: "I represent a member organization",
                        },
                        {
                          id: "individual",
                          icon: User,
                          title: "Individual / DTC",
                          sub: "I'm buying for myself or my family",
                        },
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => updateFormData("groupType", option.id)}
                          className="p-5 text-center transition-all"
                          style={{
                            backgroundColor:
                              formData.groupType === option.id
                                ? "rgba(22,178,247,0.06)"
                                : "white",
                            border:
                              formData.groupType === option.id
                                ? "2px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderTop:
                              formData.groupType === option.id
                                ? "3px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderRadius: "12px",
                            cursor: "pointer",
                          }}
                        >
                          <option.icon
                            className="w-8 h-8 mx-auto mb-3"
                            style={{
                              color:
                                formData.groupType === option.id
                                  ? "#16B2F7"
                                  : "#828993",
                            }}
                          />
                          <p
                            className="font-semibold text-[#000836] text-sm"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {option.title}
                          </p>
                          <p
                            className="text-[#828993] text-xs mt-1"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {option.sub}
                          </p>
                        </button>
                      ))}
                    </div>
                    {errors.groupType && (
                      <p className="text-[#EF4444] text-xs mt-2">{errors.groupType}</p>
                    )}
                  </div>

                  {/* Industry Dropdown */}
                  {formData.groupType && (
                    <div className="mb-6">
                      <Label
                        className="block mb-2 text-sm font-medium text-[#000836]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        What industry best describes your group?
                      </Label>
                      <select
                        value={formData.industry}
                        onChange={(e) => updateFormData("industry", e.target.value)}
                        className="w-full p-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                          backgroundColor: "white",
                        }}
                      >
                        <option value="">Select industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="text-[#EF4444] text-xs mt-2">{errors.industry}</p>
                      )}
                    </div>
                  )}

                  {/* Group Size & Effective Date */}
                  {formData.groupType && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Estimated Group Size
                        </Label>
                        <select
                          value={formData.groupSize}
                          onChange={(e) => updateFormData("groupSize", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                            backgroundColor: "white",
                          }}
                        >
                          <option value="">Select size...</option>
                          {groupSizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                        {errors.groupSize && (
                          <p className="text-[#EF4444] text-xs mt-2">{errors.groupSize}</p>
                        )}
                      </div>
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Target Effective Date
                        </Label>
                        <select
                          value={formData.effectiveDate}
                          onChange={(e) => updateFormData("effectiveDate", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                            backgroundColor: "white",
                          }}
                        >
                          <option value="">Select date...</option>
                          {effectiveDates.map((date) => (
                            <option key={date} value={date}>
                              {date}
                            </option>
                          ))}
                        </select>
                        {errors.effectiveDate && (
                          <p className="text-[#EF4444] text-xs mt-2">{errors.effectiveDate}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Current Situation */}
                  {formData.groupType && (
                    <div className="mb-8">
                      <Label
                        className="block mb-2 text-sm font-medium text-[#000836]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        What&apos;s your current benefits situation?
                      </Label>
                      <select
                        value={formData.currentSituation}
                        onChange={(e) => updateFormData("currentSituation", e.target.value)}
                        className="w-full p-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                          backgroundColor: "white",
                        }}
                      >
                        <option value="">Select situation...</option>
                        {currentSituations.map((sit) => (
                          <option key={sit} value={sit}>
                            {sit}
                          </option>
                        ))}
                      </select>
                      {errors.currentSituation && (
                        <p className="text-[#EF4444] text-xs mt-2">{errors.currentSituation}</p>
                      )}
                    </div>
                  )}

                  {/* Next Button */}
                  <div className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Continue to Base Plan <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: BASE PLAN */}
              {currentStep === 2 && (
                <div>
                  <p
                    className="text-[#16B2F7] text-[11px] font-bold uppercase mb-2"
                    style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                  >
                    STEP 2 OF 4
                  </p>
                  <h2
                    className="text-[#000836] font-semibold mb-2"
                    style={{ fontSize: "22px", fontFamily: "var(--font-sans)" }}
                  >
                    Choose your compliance foundation.
                  </h2>
                  <p
                    className="text-[#828993] text-sm mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Select one base plan. You&apos;ll add virtual care and ancillary options in the next step.
                  </p>

                  {/* MEC PLANS */}
                  <div className="mb-8">
                    <div
                      className="pb-2 mb-2"
                      style={{ borderBottom: "1px solid #D0D2D8" }}
                    >
                      <p
                        className="text-[#16B2F7] text-[11px] font-bold uppercase"
                        style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                      >
                        ACUTE CARE — MEC PLANS
                      </p>
                      <p
                        className="text-[#828993] text-[13px] mt-1"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Satisfies ACA Employer Penalty A. Minimum 10 enrolled lives.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mecPlans.map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => updateFormData("basePlan", plan.id)}
                          className="p-6 text-left transition-all"
                          style={{
                            backgroundColor:
                              formData.basePlan === plan.id
                                ? "rgba(22,178,247,0.06)"
                                : "white",
                            border:
                              formData.basePlan === plan.id
                                ? "2px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderTop:
                              formData.basePlan === plan.id
                                ? "3px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderRadius: "12px",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            className="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase mb-3"
                            style={{
                              backgroundColor: "#DCFCE7",
                              color: "#166534",
                              letterSpacing: "1px",
                              fontFamily: "var(--font-sans)",
                            }}
                          >
                            {plan.badge}
                          </span>
                          <p
                            className="font-semibold text-[#000836] mb-2"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {plan.name}
                          </p>
                          <p
                            className="text-[#828993] text-sm mb-3"
                            style={{ fontFamily: "var(--font-sans)", lineHeight: 1.5 }}
                          >
                            {plan.description}
                          </p>
                          <p
                            className="text-[#16B2F7] text-xs font-semibold"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {plan.highlight}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* MV PLANS */}
                  <div className="mb-8">
                    <div
                      className="pb-2 mb-2"
                      style={{ borderBottom: "1px solid #D0D2D8" }}
                    >
                      <p
                        className="text-[#16B2F7] text-[11px] font-bold uppercase"
                        style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                      >
                        RESTRICTED MEDICAL — MV PLANS
                      </p>
                      <p
                        className="text-[#828993] text-[13px] mt-1"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Bronze-level major medical. Satisfies ACA minimum value threshold (60%). Minimum 5 enrolled lives.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {mvPlans.map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => updateFormData("basePlan", plan.id)}
                          className="p-6 text-left transition-all"
                          style={{
                            backgroundColor:
                              formData.basePlan === plan.id
                                ? "rgba(22,178,247,0.06)"
                                : "white",
                            border:
                              formData.basePlan === plan.id
                                ? "2px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderTop:
                              formData.basePlan === plan.id
                                ? "3px solid #16B2F7"
                                : "1px solid #D0D2D8",
                            borderRadius: "12px",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            className="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase mb-3"
                            style={{
                              backgroundColor: "#E0F5FE",
                              color: "#0277A8",
                              letterSpacing: "1px",
                              fontFamily: "var(--font-sans)",
                            }}
                          >
                            {plan.badge}
                          </span>
                          <p
                            className="font-semibold text-[#000836] mb-2"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {plan.name}
                          </p>
                          <p
                            className="text-[#828993] text-sm mb-3"
                            style={{ fontFamily: "var(--font-sans)", lineHeight: 1.5 }}
                          >
                            {plan.description}
                          </p>
                          <p
                            className="text-[#16B2F7] text-xs font-semibold"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {plan.highlight}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Need Help Checkbox */}
                  <label
                    className="flex items-center gap-3 cursor-pointer mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.needHelp}
                      onChange={(e) => updateFormData("needHelp", e.target.checked)}
                      className="w-5 h-5 rounded border-[#D0D2D8] text-[#16B2F7] focus:ring-[#16B2F7]"
                    />
                    <span className="text-[#828993] text-[13px]">
                      I need help selecting the right base plan — please advise.
                    </span>
                  </label>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-lg"
                      style={{
                        border: "1px solid #D0D2D8",
                        color: "#828993",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Continue to Add-Ons <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: ADD-ONS */}
              {currentStep === 3 && (
                <div>
                  <p
                    className="text-[#16B2F7] text-[11px] font-bold uppercase mb-2"
                    style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                  >
                    STEP 3 OF 4
                  </p>
                  <h2
                    className="text-[#000836] font-semibold mb-2"
                    style={{ fontSize: "22px", fontFamily: "var(--font-sans)" }}
                  >
                    Build your full benefits stack.
                  </h2>
                  <p
                    className="text-[#828993] text-sm mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Select any combination of add-ons. All are optional. All are custom-quoted.
                  </p>

                  {/* Add-On Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {addOnOptions.map((addon) => (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddOn(addon.id)}
                        className="p-5 text-left transition-all flex gap-4"
                        style={{
                          backgroundColor: formData.addOns.includes(addon.id)
                            ? "rgba(22,178,247,0.04)"
                            : "white",
                          border: formData.addOns.includes(addon.id)
                            ? "2px solid #16B2F7"
                            : "1px solid #D0D2D8",
                          borderRadius: "12px",
                          cursor: "pointer",
                        }}
                      >
                        {/* Checkbox */}
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5"
                          style={{
                            border: formData.addOns.includes(addon.id)
                              ? "none"
                              : "2px solid #D0D2D8",
                            backgroundColor: formData.addOns.includes(addon.id)
                              ? "#16B2F7"
                              : "transparent",
                          }}
                        >
                          {formData.addOns.includes(addon.id) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2 ${addon.categoryColor}`}
                            style={{
                              letterSpacing: "1px",
                              fontFamily: "var(--font-sans)",
                            }}
                          >
                            {addon.category}
                          </span>
                          <p
                            className="font-semibold text-[#000836] text-sm mb-1"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {addon.title}
                          </p>
                          <p
                            className="text-[#828993] text-xs"
                            style={{ fontFamily: "var(--font-sans)", lineHeight: 1.5 }}
                          >
                            {addon.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p
                    className="text-center text-[#828993] text-[13px] italic pt-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Not sure what to add? Leave everything unchecked and note your questions in Step 4. We&apos;ll recommend the right stack for your group.
                  </p>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-lg"
                      style={{
                        border: "1px solid #D0D2D8",
                        color: "#828993",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Continue to Contact <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT */}
              {currentStep === 4 && (
                <div>
                  <p
                    className="text-[#16B2F7] text-[11px] font-bold uppercase mb-2"
                    style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                  >
                    STEP 4 OF 4
                  </p>
                  <h2
                    className="text-[#000836] font-semibold mb-2"
                    style={{ fontSize: "22px", fontFamily: "var(--font-sans)" }}
                  >
                    Almost done.
                  </h2>
                  <p
                    className="text-[#828993] text-sm mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    We&apos;ll review your selections and reach out within one business day with a custom proposal.
                  </p>

                  {/* Proposal Summary */}
                  <div
                    className="mb-8 p-5"
                    style={{
                      backgroundColor: "rgba(22,178,247,0.06)",
                      border: "1px solid rgba(22,178,247,0.2)",
                      borderLeft: "3px solid #16B2F7",
                      borderRadius: "12px",
                    }}
                  >
                    <p
                      className="text-[#16B2F7] text-[11px] font-bold uppercase mb-4"
                      style={{ letterSpacing: "2px", fontFamily: "var(--font-sans)" }}
                    >
                      YOUR SELECTIONS
                    </p>
                    <div className="space-y-3 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                      <div className="flex justify-between">
                        <span className="text-[#828993]">Group Type:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#000836]">{getGroupTypeLabel()}</span>
                          <button
                            onClick={() => goToStep(1)}
                            className="text-[#16B2F7] text-xs hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#828993]">Industry:</span>
                        <span className="text-[#000836]">{formData.industry || <span className="italic text-[#828993]">None selected</span>}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#828993]">Group Size:</span>
                        <span className="text-[#000836]">{formData.groupSize || <span className="italic text-[#828993]">None selected</span>}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#828993]">Base Plan:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#000836]">{getSelectedPlanName()}</span>
                          <button
                            onClick={() => goToStep(2)}
                            className="text-[#16B2F7] text-xs hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#828993]">Add-Ons:</span>
                        <div className="flex items-center gap-2 text-right max-w-[60%]">
                          <span className="text-[#000836]">{getSelectedAddOns()}</span>
                          <button
                            onClick={() => goToStep(3)}
                            className="text-[#16B2F7] text-xs hover:underline flex-shrink-0"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          First Name *
                        </Label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: errors.firstName ? "1px solid #EF4444" : "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                        {errors.firstName && (
                          <p className="text-[#EF4444] text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Last Name *
                        </Label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: errors.lastName ? "1px solid #EF4444" : "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                        {errors.lastName && (
                          <p className="text-[#EF4444] text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Work Email *
                        </Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: errors.email ? "1px solid #EF4444" : "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                        {errors.email && (
                          <p className="text-[#EF4444] text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        className="block mb-2 text-sm font-medium text-[#000836]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Company Name *
                      </Label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                        className="w-full p-3 rounded-lg text-sm"
                        style={{
                          border: errors.companyName ? "1px solid #EF4444" : "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                      {errors.companyName && (
                        <p className="text-[#EF4444] text-xs mt-1">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <Label
                        className="block mb-2 text-sm font-medium text-[#000836]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Are you working with a broker or agent?
                      </Label>
                      <div className="flex gap-6">
                        {["Yes", "No", "Not sure"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="hasBroker"
                              value={option}
                              checked={formData.hasBroker === option}
                              onChange={(e) => updateFormData("hasBroker", e.target.value)}
                              className="w-4 h-4 text-[#16B2F7] focus:ring-[#16B2F7]"
                            />
                            <span
                              className="text-sm text-[#000836]"
                              style={{ fontFamily: "var(--font-sans)" }}
                            >
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {formData.hasBroker === "Yes" && (
                      <div>
                        <Label
                          className="block mb-2 text-sm font-medium text-[#000836]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Broker / Agent Name or Agency
                        </Label>
                        <Input
                          value={formData.brokerName}
                          onChange={(e) => updateFormData("brokerName", e.target.value)}
                          className="w-full p-3 rounded-lg text-sm"
                          style={{
                            border: "1px solid #D0D2D8",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                      </div>
                    )}

                    <div>
                      <Label
                        className="block mb-2 text-sm font-medium text-[#000836]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Additional notes or questions
                      </Label>
                      <Textarea
                        value={formData.notes}
                        onChange={(e) => updateFormData("notes", e.target.value)}
                        rows={4}
                        placeholder="Any specific questions about plan design, compliance requirements, or group structure?"
                        className="w-full p-3 rounded-lg text-sm"
                        style={{
                          border: "1px solid #D0D2D8",
                          fontFamily: "var(--font-sans)",
                          resize: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-lg"
                      style={{
                        border: "1px solid #D0D2D8",
                        color: "#828993",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="bg-[#16B2F7] hover:bg-[#14a0dc] text-[#000836] font-semibold px-8 py-3 rounded-lg"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Submit Proposal Request <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>

                  <p
                    className="text-center text-[#828993] text-[12px] italic mt-6"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    No commitment required. Custom quote only. No spam.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
