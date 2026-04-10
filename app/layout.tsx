import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neeru Vijh | Maths & Science Tutor",
  description:
    "Private online tutoring for Maths (Classes 6-12) and Science (Classes 6-10). CBSE and ICSE. English and Hindi medium. By Neeru Vijh, with 38 years of teaching experience.",
  openGraph: {
    title: "Neeru Vijh | Maths & Science Tutor",
    description:
      "Private online tutoring for Maths (Classes 6-12) and Science (Classes 6-10). CBSE and ICSE. English and Hindi medium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
