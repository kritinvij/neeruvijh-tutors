import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeru Vijh | Maths & Science Tutor | Fulbright Scholar",
  description:
    "Online Maths (Classes 6-12) and Science (Classes 6-10) tutoring by Neeru Vijh — M.Sc. Mathematics (University of Delhi), Fulbright Scholar 2015, Delhi State Teachers' Award 2022, 38 years of teaching experience. CBSE, ICSE, English and Hindi medium.",
  openGraph: {
    title: "Neeru Vijh | Maths & Science Tutor | Fulbright Scholar",
    description:
      "Online Maths & Science tutoring by Neeru Vijh — M.Sc. Mathematics, Fulbright Scholar 2015, Delhi State Teachers' Award 2022, 38 years of experience.",
    type: "website",
  },
};

const jsonLd = {
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
  sameAs: ["https://www.youtube.com/c/MathAndMorewithNeeruVijh", "https://www.linkedin.com/in/neeruvijh/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
