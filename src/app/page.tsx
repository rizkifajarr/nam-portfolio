"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import OrganizationExperience from "./components/OrganizationExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import LoveBackground from "./components/LoveBackground";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* <LoveBackground /> */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <OrganizationExperience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
