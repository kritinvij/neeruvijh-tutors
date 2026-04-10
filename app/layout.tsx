import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// TODO: Update metadataBase to custom domain when configured
export const metadata: Metadata = {
  metadataBase: new URL("https://neeruvijhtutors.vercel.app"),
  title: "Neeru Vijh | Maths & Science Tutor | Fulbright Scholar",
  description:
    "Online Maths (Classes 6-12) and Science (Classes 6-10) tutoring by Neeru Vijh — M.Sc. Mathematics (University of Delhi), Fulbright Scholar 2015, Delhi State Teachers' Award 2022, 38 years of teaching experience. CBSE, ICSE, English and Hindi medium.",
  keywords: [
    "Maths tutor online India",
    "Science tutor online India",
    "CBSE Maths tutor",
    "ICSE Maths tutor",
    "Class 10 Maths tutor",
    "Class 12 Maths tutor",
    "Hindi medium Maths tutor",
    "Neeru Vijh",
    "online tutor India",
    "board exam Maths preparation",
    "Class 9 Science tutor",
    "Delhi Maths tutor",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://neeruvijhtutors.vercel.app",
  },
  openGraph: {
    title: "Neeru Vijh | Maths & Science Tutor | Fulbright Scholar",
    description:
      "Online Maths & Science tutoring by Neeru Vijh — M.Sc. Mathematics, Fulbright Scholar 2015, Delhi State Teachers' Award 2022, 38 years of experience.",
    type: "website",
    siteName: "Neeru Vijh Tutoring",
    url: "https://neeruvijhtutors.vercel.app",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Neeru Vijh | Maths & Science Tutor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeru Vijh | Maths & Science Tutor | Fulbright Scholar",
    description:
      "Online Maths & Science tutoring — 38 years of experience, Fulbright Scholar 2015, Delhi State Teachers' Award 2022. CBSE, ICSE, English & Hindi medium.",
    site: "@NeeruVijh",
    images: ["/opengraph-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Neeru Vijh",
  jobTitle: "Private Maths and Science Tutor",
  description:
    "Retired Delhi school teacher offering private online tutoring in Maths (Classes 6-12) and Science (Classes 6-10). CBSE and ICSE.",
  award: ["Delhi State Teachers' Award 2022", "Fulbright Scholar 2015"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Delhi", department: "Mathematics" },
    { "@type": "CollegeOrUniversity", name: "Department of Education (CIE), University of Delhi" },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Master's degree, Mathematics", credentialCategory: "degree" },
    { "@type": "EducationalOccupationalCredential", name: "Bachelor of Education (B.Ed.)", credentialCategory: "degree" },
  ],
  knowsAbout: ["Mathematics", "Science", "CBSE", "ICSE", "Online Tutoring"],
  sameAs: [
    "https://www.youtube.com/c/MathAndMorewithNeeruVijh",
    "https://www.linkedin.com/in/neeruvijh/",
    "https://x.com/NeeruVijh",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Tutoring",
  name: "Online Maths & Science Tutoring by Neeru Vijh",
  provider: { "@type": "Person", name: "Neeru Vijh" },
  areaServed: { "@type": "Country", name: "India" },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Classes 6-12",
  },
  description:
    "Online tutoring for Maths (Classes 6-12) and Science (Classes 6-10) in CBSE and ICSE curriculum, taught in English and Hindi.",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online video call",
  },
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Neeru Vijh - Maths & Science Tutoring",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Parent of Class 10 Student" },
      datePublished: "2023-04-01",
      reviewBody:
        "Neeru Maam explained concepts so clearly that my son went from failing Maths to scoring 85 in his Class 10 boards. Her patience and deep knowledge made all the difference.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Class 8 Student" },
      datePublished: "2023-07-01",
      reviewBody:
        "I struggled with Maths for years, but Neeru Maam's teaching style in Hindi made everything click. Highly recommended for any student who needs a strong foundation.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Parent of Class 9 Student" },
      datePublished: "2024-04-01",
      reviewBody:
        "38 years of experience shows in every class. She knows exactly where students get stuck and addresses it proactively. My daughter scored 92 in Science.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Class 12 Student" },
      datePublished: "2024-05-01",
      reviewBody:
        "I was terrified of Class 12 Maths. Neeru Maam built everything from first principles. Ended up scoring 91 in boards.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Parent of Class 6 Student" },
      datePublished: "2024-01-01",
      reviewBody:
        "My daughter had a genuine fear of fractions in Class 6. Two months with Neeru Maam and she is explaining concepts to her classmates.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Parent of Class 11 Student" },
      datePublished: "2024-03-01",
      reviewBody:
        "The WhatsApp doubt-clearing between sessions is what sets Neeru Maam apart. No waiting a whole week for an answer.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
        />
      </head>
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
