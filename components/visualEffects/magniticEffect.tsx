"use client";
import React, { FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/util";
interface MagniticEffectProps {
  className?: string;
  children: ReactNode;
}

export const MagniticEffect: FC<MagniticEffectProps> = ({
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;
  const handelMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const MiddelX = clientX - (left + width / 2);
      const MiddelY = clientY - (top + height / 2);
      setPosition({ x: MiddelX, y: MiddelY });
    }
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handelMouse}
      onMouseLeave={reset}
    >
      {children}{" "}
    </motion.div>
  );
};
