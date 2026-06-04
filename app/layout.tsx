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
  metadataBase: new URL("https://monika-numerology.com"),
  title: {
    default: "Vastu Consultant & Numerologist in Faridabad | Monika",
    template: "%s | Monika Faridabad",
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
  authors: [{ name: "Monika", url: "https://monika-numerology.com" }],
  creator: "Monika",
  publisher: "Monika Numerology & Vastu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://monika-numerology.com",
    siteName: "Monika Numerology & Vastu",
    title: "Monika | Vastu Consultant & Numerologist, Faridabad",
    description:
      "Certified Vastu & numerology consultant in Faridabad, Haryana. Numerology readings, name correction & Vastu for homes/business across India.",
  },
  twitter: {
    card: "summary",
    title: "Monika | Vastu Consultant & Numerologist, Faridabad",
    description:
      "Certified Vastu & numerology consultant in Faridabad, Haryana. Book your personal session via WhatsApp — serving all of India online.",
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