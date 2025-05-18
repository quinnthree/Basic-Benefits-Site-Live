import { Check } from "lucide-react"

export default function ForEmployersPage() {
  return (
    <div className="min-h-screen bg-[#000836] pt-20 pb-16">
      <div className="container py-12">
        <h1 className="text-5xl font-bold mb-12 text-white text-center">Plan Comparisons</h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#000836] text-white">
                  <th className="py-4 px-6 text-left">Plan</th>
                  <th className="py-4 px-6 text-center">Core Health</th>
                  <th className="py-4 px-6 text-center">Total Care</th>
                  <th className="py-4 px-6 text-center">Basic MEC</th>
                  <th className="py-4 px-6 text-center">EliteCare MEC</th>
                  <th className="py-4 px-6 text-center">Minimum Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#000836] text-white border-t border-gray-700">
                  <td className="py-4 px-6 font-semibold">Plan Description</td>
                  <td className="py-4 px-6 text-center">Virtual Care Bundle</td>
                  <td className="py-4 px-6 text-center">Virtual Primary Care Bundle</td>
                  <td className="py-4 px-6 text-center">ACA Preventive Plan</td>
                  <td className="py-4 px-6 text-center">Enhanced ACA Preventive Plan</td>
                  <td className="py-4 px-6 text-center">Bronze Level ACA Medical Plan</td>
                </tr>
                <tr className="bg-[#000836] text-white border-t border-gray-700">
                  <td className="py-4 px-6 font-semibold">Sample Pricing</td>
                  <td className="py-4 px-6 text-center">$9.99</td>
                  <td className="py-4 px-6 text-center">$24.99</td>
                  <td className="py-4 px-6 text-center">$45.00</td>
                  <td className="py-4 px-6 text-center">$139.00</td>
                  <td className="py-4 px-6 text-center">$399.00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Telemedicine</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Prescription Benefit</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Access to Counseling and Psychiatry</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Discount Card</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Primary Care Visits</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Annual Wellness Visit</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">ACA Compliant Coverage</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Urgent Care Visits</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Laboratory Services</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Dedicated providers</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">Medication Management</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Hospital Coverage</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">Optional</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-700">
                    Other Services (Chiropractic, Home Health, Emergency Medical Ground Transportation, Chemotherapy,
                    Radiation, Dialysis and physical, speech or Occupational Therapy)
                  </td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-medium text-gray-700">Maternity Coverage</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-lg mb-6">
            Contact us today to find the right plan for your business and employees
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
