import React from "react";
import Header from "../components/navigation/header/header";
import { MagniticEffect } from "@/components/visualEffects/magniticEffect";
import { FancyButton } from "@/components/ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import { LiveClock } from "@/components/ui/liveClock";
import ScrollDown from "@/components/ui/scroll-down";
export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8 ">
         <Header></Header>
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
       
        <MagniticEffect>
          <FancyButton
            text="Let's Talk"
            icon={<FaArrowRight></FaArrowRight>}
          ></FancyButton>
        </MagniticEffect>
      </div>
      <div className="absolute right-10 bottom-1">
        <LiveClock city="Europe/Berlin"></LiveClock>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/4  mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
          <div>
            <span>Software</span>
          </div>
          <div>
            <span>Enginner</span>
          </div>

        </div>
      </div>
      <MagniticEffect className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[-4rem] 2xl:-bottom-10">
        <ScrollDown></ScrollDown>
      </MagniticEffect>
    </div>
  );
}
