"use client";

import { ClientLayout } from "@/components/ClientLayout";
import Description from "@/components/Description/Description";
import Section from "@/components/ParallaxSection/ParallaxSection";
import Hero from "@/sections/Hero/Hero";
import Nav from "@/sections/Nav/Nav";

const LandingLayout = () => {
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
