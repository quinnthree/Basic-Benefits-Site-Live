export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Basic Benefits",
    url: "https://www.basicbenefits.com",
    logo: "https://www.basicbenefits.com/BasicBenefits_Logo.svg",
    description: "Basic Benefits provides affordable, customizable employee healthcare solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "917 Lily Creek Rd",
      addressLocality: "Louisville",
      addressRegion: "KY",
      postalCode: "40243",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "855-617-8205",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/basicbenefits/",
      "https://www.facebook.com/profile.php?id=61573522040793",
      "https://www.instagram.com/basicbenefits/",
    ],
  }
}
