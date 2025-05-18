import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At <strong>Basic Benefits</strong>, we specialize in designing, distributing, and administering affordable and
          innovative benefit solutions. Our services ensure businesses, brokers, and associations can provide meaningful
          health coverage and ancillary benefits while simplifying administration.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Comprehensive Benefit Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Virtual Primary Care Bundles"
              description="Convenient and affordable access to essential healthcare services."
              items={[
                "Virtual Primary Care with dedicated providers",
                "Virtual Urgent Care, available 24/7",
                "Virtual Behavioral Health",
                "Prescription plans with cost-saving options",
                "Discount programs for dental, vision, and lifestyle benefits",
              ]}
            />
            <ServiceCard
              title="MEC & MV Plans"
              description="ACA-compliant health plans that meet employer mandate requirements."
              items={[
                "Standalone MEC plans focusing on preventive care and wellness",
                "MEC+ Plans with added benefits",
                "Minimum Value Plans (MV) providing comprehensive coverage",
              ]}
            />
            <ServiceCard
              title="ICHRA Plan Options"
              description="Tax-advantaged health coverage with employee flexibility."
              items={[
                "Cost-effective alternatives to traditional group plans",
                "ACA-compliant individual coverage",
                "Simplified quoting and agent-assisted enrollment",
                "Virtual card payment solutions",
              ]}
            />
            <ServiceCard
              title="Prescription Benefits"
              description="Cost-effective access to medications."
              items={[
                "$0 copay formulary options for chronic and urgent care needs",
                "Extensive 65,000+ pharmacy network",
                "International sourcing for high-cost specialty medications",
              ]}
            />
            <ServiceCard
              title="Lifestyle & Ancillary Benefits"
              description="Additional savings and benefits to enhance members' overall well-being."
              items={[
                "Discount Dental, Vision, Hearing, Imaging, and Lab Services",
                "Diabetic Supply Savings and Home Delivery",
                "Fitness Discounts at major gyms",
                "Lifestyle Savings for travel, entertainment, and recreation",
                "Pet Programs for comprehensive pet care and insurance",
              ]}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Administrative Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Enrollment & Eligibility Management"
              description="Streamlined enrollment processes and management."
              items={[
                "Self-Replicating Enrollment Websites",
                "Automated Eligibility Management",
                "EDI Processing for seamless vendor integration",
              ]}
            />
            <ServiceCard
              title="Benefit Consulting & Custom Program Development"
              description="Expert guidance and tailored solutions."
              items={[
                "Designing and implementing benefit programs",
                "Development of custom programs",
                "Association Plan Design",
              ]}
            />
            <ServiceCard
              title="Billing & Commission Management"
              description="Simplified billing and structured commission payouts."
              items={["Consolidated Billing", "Tiered Commission Management"]}
            />
            <ServiceCard
              title="Cost Containment & Advocacy"
              description="Strategies to reduce healthcare expenses and support members."
              items={[
                "Care Navigation & Bill Negotiation",
                "501(R) Hospital Discounts and financial assistance guidance",
                "Custom Cost Containment Strategies",
              ]}
            />
          </div>
        </section>

        <div className="text-center">
          <p className="text-lg mb-6">
            We are committed to{" "}
            <strong>simplifying benefits administration, reducing costs, and delivering high-value solutions</strong> to
            employers, associations, and individuals.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
