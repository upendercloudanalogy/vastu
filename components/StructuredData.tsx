interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  pageType?: "home" | "payments" | "ratings" | "book";
}

export default function StructuredData({ breadcrumbs, pageType = "home" }: StructuredDataProps) {
  const BASE_URL = "https://www.shivohamguidance.com";

  // 1. ProfessionalService — more specific than LocalBusiness, ranks better for consultants
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#business`,
    name: "Shivoham Guidance",
    alternateName: "Monika Vastu Consultant",
    description:
      "Certified Vastu Shastra consultant and numerologist in Faridabad, Haryana. Expert in numerology readings by date of birth, name correction, home Vastu, new construction Vastu, and commercial Vastu for hotels, hospitals and offices. Serving clients across Serving clients across Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata and all of India online via WhatsApp.",
    url: BASE_URL,
    telephone: "+917027510541",
    email: "nikhilkhatkar34@gmail.com",
    priceRange: "₹₹–₹₹₹",
    image: `${BASE_URL}/avatar.svg`,
    logo: `${BASE_URL}/avatar.svg`,
    foundingDate: "2019",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Faridabad",
      addressLocality: "Faridabad",
      addressRegion: "Haryana",
      postalCode: "121001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4089",
      longitude: "77.3178",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Kolkata" }
    ],
    serviceArea: {
      "@type": "GeoShape",
      name: "Pan India — all consultations available online via WhatsApp",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Vastu Shastra",
      "Numerology",
      "Name Correction",
      "Destiny Analysis",
      "Life Path Number",
      "Vastu for Home",
      "Vastu for Office",
      "New Home Vastu",
      "Commercial Vastu",
      "Feng Shui Energy Alignment",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vastu Shastra & Numerology Services — Faridabad",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Numerology Consultation",
            description: "30-minute WhatsApp numerology call — Life Path Number, lucky numbers & dates, one specific query answered. Available online for clients in Faridabad and across India.",
          },
          price: "2100",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Detailed Numerology Session",
            description: "60-minute in-depth numerology reading — Life Path, Destiny & Soul Number, Personal Year Forecast, career and relationship insights. Online via WhatsApp for Faridabad & all India.",
          },
          price: "5100",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Vastu Guidance Session",
            description: "45-minute online Vastu Shastra consultation — home energy assessment, room direction analysis, Vastu remedies without major renovation. Serving Faridabad, Delhi NCR & pan India.",
          },
          price: "11000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Old Home Vastu Shastra",
            description: "Complete Vastu assessment and remedies for existing homes — room-by-room analysis, main door & kitchen direction, bedroom placement. Available in Faridabad, Haryana.",
          },
          price: "25000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Home Vastu Shastra",
            description: "Full Vastu planning for new construction — blueprint review, complete layout optimization, direction & materials guidance, detailed written report. Serving Faridabad & Haryana.",
          },
          price: "45000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Vastu Shastra",
            description: "Vastu Shastra for hotels, hospitals, restaurants, clinics, offices and farmhouses. Business energy optimization, entry & cash counter direction. Available in Faridabad & Delhi NCR.",
          },
          price: "71000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/book`,
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",  // ← Use your actual average
      reviewCount: "6",    // ← Use your ACTUAL number of real reviews
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Priya Sharma", address: { "@type": "PostalAddress", addressLocality: "Mumbai" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Monika's numerology reading was incredibly accurate. She identified exactly the challenges I was facing and gave me a clear roadmap. My life has truly transformed after following her guidance.",
        datePublished: "2024-11-15",
        publisher: { "@type": "Organization", name: "Shivoham Guidance" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar", address: { "@type": "PostalAddress", addressLocality: "Delhi" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "The Vastu consultation for my home was life-changing. After implementing Monika's suggestions, the energy in our house completely shifted. Business has improved and family harmony is at its best.",
        datePublished: "2024-12-01",
        publisher: { "@type": "Organization", name: "Shivoham Guidance" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Anita Verma", address: { "@type": "PostalAddress", addressLocality: "Pune" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "After Monika's name correction, I started getting better opportunities at work within 3 months. Truly amazed by the accuracy and practical guidance!",
        datePublished: "2025-01-10",
        publisher: { "@type": "Organization", name: "Shivoham Guidance" },
      },
    ],
    sameAs: [
      "https://wa.me/917027510541",
    ],
  };

  // 2. Person schema — E-E-A-T authority signal for Monika
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#monika`,
    name: "Monika",
    jobTitle: "Vastu Shastra Consultant & Numerologist",
    description: "Certified Vastu Shastra consultant and numerologist based in Faridabad, Haryana with a Masters in Numerology and Vastu Shastra. Expert in personal numerology readings, name correction, and complete Vastu consultations for homes and businesses across India.",
    url: BASE_URL,
    telephone: "+917027510541",
    email: "nikhilkhatkar34@gmail.com",
    image: `${BASE_URL}/avatar.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faridabad",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Masters in Numerology & Vastu Shastra",
    },
    knowsAbout: [
      "Vastu Shastra",
      "Numerology",
      "Name Correction",
      "Destiny Analysis",
      "Life Path Numbers",
      "Energy Alignment",
      "Feng Shui",
    ],
    worksFor: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#business`,
      name: "Monika Numerology & Vastu",
    },
    sameAs: [
      "https://wa.me/917027510541",
    ],
  };

  // 3. WebSite schema — enables Google Sitelinks Search Box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Monika Numerology & Vastu",
    url: BASE_URL,
    description: "Certified Vastu Shastra consultant and numerologist in Faridabad, Haryana",
    publisher: {
      "@id": `${BASE_URL}/#business`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/book?service={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  // 4. FAQ schema — powers "People Also Ask" boxes on Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best Vastu consultant in Faridabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monika is a highly rated Vastu Shastra consultant in Faridabad, Haryana with 100+ satisfied clients and a 4.9/5 average rating. She offers online Vastu consultations for homes, new construction, old homes, and commercial properties, serving clients across Faridabad, Delhi NCR, and all of India.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of a Vastu consultation in Faridabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vastu consultation fees with Monika in Faridabad start at ₹11,000 for an online Vastu guidance session. Old Home Vastu is ₹25,000, New Home Vastu Shastra is ₹45,000, and Commercial Vastu (hotels, hospitals, offices) is ₹71,000. All sessions are available online via WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "What is Vastu Shastra and how does it help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vastu Shastra is the ancient Indian science of architecture and energy alignment. It helps arrange your home or office to maximize positive energy, prosperity, health, and harmony. Monika's Vastu consultations in Faridabad identify energy blockages and provide practical remedies to attract success.",
        },
      },
      {
        "@type": "Question",
        name: "How does a numerology reading work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A numerology reading uses your date of birth and full name to calculate your Life Path Number, Destiny Number, and Soul Urge Number. These numbers reveal your personality, strengths, life challenges, and the best timing for major decisions. Sessions with Monika are conducted via WhatsApp call from Faridabad.",
        },
      },
      {
        "@type": "Question",
        name: "What is name correction in numerology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Name correction aligns the vibration of your name with your birth number. A misaligned name can cause career delays, relationship issues, and financial struggles. Monika analyzes your current name and suggests specific adjustments to attract better luck and opportunities.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Vastu consultation available online or only in Faridabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All Vastu and numerology consultations are available online via WhatsApp video or audio call, so you can book from anywhere in India or abroad. Monika is based in Faridabad, Haryana but serves clients across Delhi NCR, Haryana, and all of India.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a Vastu or numerology session with Monika?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill in the booking form at monika-numerology.com/book with your name, mobile number, city, and the service you need. Monika will contact you via WhatsApp within 24 hours to schedule your session. You can also message directly: +91 7027510541.",
        },
      },
    ],
  };

  // 5. BreadcrumbList schema — for inner pages only
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: crumb.url,
      })),
    ],
  } : null;

  // return (
  //   <>
  //     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
  //     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
  //     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
  //     {pageType === "home" && (
  //       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  //     )}
  //     {breadcrumbSchema && (
  //       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  //     )}
  //   </>
  // );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      professionalService,
      personSchema,
      websiteSchema,
      ...(pageType === "home" ? [faqSchema] : []),
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
