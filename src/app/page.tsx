"use client";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/About";
import SecurityServices from "@/components/SecurityServices";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Particlesview from "@/components/Particles";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative landing-hero overflow-x-hidden">
          <span className="absolute lg:min-w-[calc(100vw-5px)] min-w-screen min-h-full opacity-20 bg-animate" />
          <span className="absolute lg:min-w-[calc(100vw-5px)] min-w-screen min-h-full bg-blur" />
          <span className="absolute lg:min-w-[calc(100vw-5px)] min-w-screen min-h-full landing-hero-logo" />
          <Navigation />
          <Hero />
        </div>
        <About />
        <SecurityServices />
        <Team />
        <div className="relative">
          <Particlesview />
          <div className="relative z-[11]">
            <Projects />
          </div>
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
