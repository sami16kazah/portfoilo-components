import React, { FC, ReactNode } from "react";
interface FancyButtonProps {
  text: string;
  icon: ReactNode;
}

export const FancyButton: FC<FancyButtonProps> = ({ text, icon }) => {
  return (
    <a className="fancy-btn">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-5 px-10 flex item-center gap-2 font-bold text-3xl cursor-pointer transition-all duration-75">
        <span className="">{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform  duration-100">{icon}</span>
      </div>
    </a>
  );
};
