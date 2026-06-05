import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import CosmicBackground from "@/components/CosmicBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shivohamguidance.com"),
  title: {
   default: "Shivoham Guidance | Vastu Consultant & Numerologist in Faridabad",
    template: "%s | Shivoham Guidance",
  },
  description:
    "Certified Vastu & numerology consultant in Faridabad, Haryana. Numerology readings, name correction & home Vastu — serving all of India online.",
  keywords: [
    // Local keywords (highest conversion)
    "vastu consultant faridabad",
    "vastu shastra expert faridabad",
    "numerologist faridabad haryana",
    "vastu consultant haryana",
    "best numerologist in faridabad",
    // Service keywords (high intent)
    "vastu shastra for home",
    "vastu for new home construction",
    "vastu for office",
    "numerology reading online india",
    "name correction numerology",
    "numerology by date of birth",
    "vastu shastra consultant online",
    "vastu remedies for home",
    // Brand keywords
    "monika numerology",
    "monika vastu shastra",
    // Broad keywords (long tail)
    "best numerologist india",
    "vastu shastra expert india",
    "online vastu consultation",
    "destiny number analysis",
    "life path number reading",
    "numerology for career",
    "vastu for business",
    "commercial vastu consultant",
  ],
  authors: [
  {
    name: "Monika",
    url: "https://www.shivohamguidance.com",
  },
],
  creator: "Monika",
  publisher: "Shivoham Guidance",
  openGraph: {
    type: "website",
    locale: "en_IN",
     url: "https://www.shivohamguidance.com",
    siteName: "Shivoham Guidance",
     title: "Shivoham Guidance | Vastu Consultant & Numerologist, Faridabad",
    description:
      "Certified Vastu & numerology consultant in Faridabad, Haryana. Numerology readings, name correction & Vastu for homes/business across India.",
      images: ["/og-image.png"],
  },
 twitter: {
  card: "summary_large_image",
  title: "Shivoham Guidance | Vastu Consultant, Faridabad",
  description:
    "Certified Vastu & numerology consultant in Faridabad, Haryana. Book your session online.",
  images: ["/og-image.png"],
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <CosmicBackground />
        <Navbar />
        <div style={{ position: "relative", zIndex: 1 }}>
          <StructuredData />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}