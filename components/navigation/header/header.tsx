import React from "react";
import Profile from "../../ui/profile";
import { MagniticEffect } from "../../visualEffects/magniticEffect";
import { FancyButton } from "../../ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile></Profile>
      <div className="hidden md:inline">
        <MagniticEffect>
          <FancyButton
            text="Let's Talk"
            icon={<FaArrowRight></FaArrowRight>}
          ></FancyButton>
        </MagniticEffect>
      </div>
    </div>
  );
}
