"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { ClientLayout } from "@/components/ClientLayout";
import Description from "@/components/Description/Description";
import Section from "@/components/ParallaxSection/ParallaxSection";
import Hero from "@/sections/Hero/Hero";
import Nav from "@/sections/Nav/Nav";

const LandingLayout = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ClientLayout>
      <main>
        <Nav />
        <Hero />
        <Description />
        <Section />
      </main>
    </ClientLayout>
  );
};

export default LandingLayout;
