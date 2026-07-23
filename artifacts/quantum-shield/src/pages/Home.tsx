import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Premise from "@/components/sections/Premise";
import Services from "@/components/sections/Services";
import Presence from "@/components/sections/Presence";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // Initialize lenis or custom smooth scrolling if desired, or just use native CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-primary/30 selection:text-primary">
      {/* Global decorative elements */}
      <div className="bg-noise" />
      <div className="scanline" />
      
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <Premise />
        <Services />
        <Presence />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
