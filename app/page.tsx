"use client";

import WaterWaveWrapper from "@/components/visualEffects/waterWave";
import LandingSection from "../section/landing";
import Featured from "@/section/featured";
import AboutSection from "@/section/about";
import ContactSection from "@/section/contact";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {() => (
        <div className="pb-8">
          {/*<LandingSection></LandingSection>*/}
          <Featured></Featured>
          <AboutSection></AboutSection>
          <ContactSection></ContactSection>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
