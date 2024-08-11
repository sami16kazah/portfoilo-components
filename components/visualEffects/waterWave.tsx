"use client";
import React, { FC, ReactNode } from "react";
import Waterwave from "react-water-wave";
interface waterWaveProps {
  imageUrl: string;
  dropRadius: number;
  perturbance: number;
  resolution: number;
  children: () => ReactNode;
  // interactive:boolean,
  //crossOrigin:string
}
 const WaterWaveWrapper: FC<waterWaveProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <Waterwave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </Waterwave>
  );
};

export default WaterWaveWrapper;
