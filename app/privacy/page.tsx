export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-16">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Privacy Policy & Conditions of Disclosure</h1>
        <p className="text-center text-gray-600 mb-8">Basic Benefits, LLC</p>
        <div className="prose prose-blue max-w-none">
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their &apos;Personally
            Identifiable Information&apos; (PII) and Protected Health Information (PHI) are being used online. Please read
            our policy carefully to get a clear understanding of how we collect, use, protect, or otherwise handle your
            information in accordance with our website and insurance services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 01: Information Collection</h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">What information do we collect?</h3>
          <p>
            When registering or ordering on our site, you may be asked to enter your name, email address, phone number,
            Social Security Number, or other details relevant to your insurance enrollment and health benefit experience.
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2">When do we collect information?</h3>
          <p>
            We collect information from you when you register on our site, fill out an enrollment form, use Live Chat,
            or enter information during a benefit selection process.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 02: Use of Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Service your requests for insurance enrollment and customer support.</li>
            <li>Process payments for insurance premiums (such as Zion or MEC plans).</li>
            <li>Follow up after correspondence via live chat, email, or phone.</li>
            <li>Comply with state and federal regulations regarding insurance administration and public health reporting.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 03: Financial Data & Payment Authorization</h2>
          <p>
            As we facilitate the payment of insurance premiums, specific financial protections and authorizations apply:
          </p>
          <ul>
            <li>
              <strong>Payment Processing:</strong> All transactions are processed through secure gateway providers. We do
              not store or process raw bank account or credit card numbers on our local servers.
            </li>
            <li>
              <strong>Authorization:</strong> By providing your bank information, you authorize us to initiate electronic
              debits (ACH) for agreed-upon premiums. These transactions are governed by NACHA operating rules.
            </li>
            <li>
              <strong>Security:</strong> Sensitive/credit information is encrypted via Secure Socket Layer (SSL)
              technology and contained behind secured networks accessible only by a limited number of persons with
              special access rights.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 04: Health Information (PHI)</h2>
          <p>We are required by law to maintain the confidentiality of your health information.</p>
          <ul>
            <li>
              <strong>Treatment & Payment:</strong> We may share your health information with healthcare providers to
              facilitate treatment or with financial institutions to facilitate payment for services rendered.
            </li>
            <li>
              <strong>Operations:</strong> Your information may be used for administrative functions to improve our
              benefit offerings.
            </li>
            <li>
              <strong>Your Rights:</strong> You have the right to inspect your records, request amendments to inaccurate
              data, and receive notification in the event of a data breach.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 05: Text Messaging & Mobile Privacy</h2>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing/promotional purposes.
            All the above categories exclude text messaging originator opt-in data and consent; this information will
            not be shared with any third parties, excluding aggregators and providers of the Text Message services
            necessary to facilitate your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 06: Third-Party Disclosure & Links</h2>
          <p>
            We do not sell, trade, or otherwise transfer your PII to outside parties for marketing purposes. This does
            not include website hosting partners and other parties who assist us in operating our website or conducting
            our business (such as insurance underwriters and payment clearinghouses), so long as those parties agree to
            keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 07: Cookies & Tracking</h2>
          <p>We use cookies to help remember and process enrollment selections and understand user preferences.</p>
          <ul>
            <li>
              <strong>Google:</strong> We use Google Analytics and first-party cookies to compile data regarding user
              interactions on our site.
            </li>
            <li>
              <strong>Do Not Track:</strong> We honor Do Not Track (DNT) signals and do not plant cookies or use
              advertising when a DNT browser mechanism is in place.
            </li>
            <li>
              <strong>Behavioral Tracking:</strong> We do not allow third-party behavioral tracking.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 08: COPPA (Children Online Privacy Protection Act)</h2>
          <p>
            We do not specifically market to children under the age of 13 years old. We comply with COPPA requirements
            regarding the collection of personal information from minors.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 09: Contacting Us</h2>
          <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
          <p>
            <strong>Basic Benefits, LLC</strong>
            <br />
            917 Lily Creek Rd, Louisville, KY 40243
            <br />
            <a href="https://www.basicbenefits.com" className="text-[#16B2F7] hover:underline">www.basicbenefits.com</a>
            <br />
            <a href="mailto:info@basicbenefits.com" className="text-[#16B2F7] hover:underline">info@basicbenefits.com</a>
            <br />
            <a href="tel:855-617-8205" className="text-[#16B2F7] hover:underline">855-617-8205</a>
          </p>
        </div>
      </div>
    </div>
  )
}
