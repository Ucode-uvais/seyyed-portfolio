"use client";
import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { DownloadSection } from "@/sections/Download";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Loader from "@/components/Loader"; // Import the loader component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout if the component unmounts before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="tape">
        <TapeSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
