import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import YouTube from "@/components/YouTube";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Subjects />
      <WhyChoose />
      <HowItWorks />
      <YouTube />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
