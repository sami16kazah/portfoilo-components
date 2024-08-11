import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import MyImage from "@/public/assets/gallery/Img0.jpg";
import { cn } from "@/lib/util";
export default function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src={MyImage}
          alt="sami kazah"
          className="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
        ></Image>
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello Universe"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          ></Tag>
          <Tag
            text="Sami Kazah"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          ></Tag>
          <Tag
            text="Full Stack Developer"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          ></Tag>
        </div>
      </div>
    </Card>
  );
}

const Tag = ({ className, text }: { className: string; text: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3  ", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};
