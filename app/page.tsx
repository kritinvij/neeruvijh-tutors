import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import WhyChoose from "@/components/WhyChoose";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import YouTube from "@/components/YouTube";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Hero has an internal wave that transitions into Stats (bg-orange-50) */}
      <Stats />
      <WaveDivider topColor="bg-orange-50" bottomColor="fill-white" />
      <About />
      <WaveDivider topColor="bg-white" bottomColor="fill-amber-50" flip />
      <Subjects />
      <WaveDivider topColor="bg-amber-50" bottomColor="fill-white" />
      <WhyChoose />
      <WaveDivider topColor="bg-white" bottomColor="fill-amber-50" flip />
      <Approach />
      <WaveDivider topColor="bg-amber-50" bottomColor="fill-white" />
      <HowItWorks />
      <WaveDivider topColor="bg-white" bottomColor="fill-orange-50" flip />
      <YouTube />
      <WaveDivider topColor="bg-orange-50" bottomColor="fill-white" />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
