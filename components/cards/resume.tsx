import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import MyImage from "@/public/assets/gallery/Img0.jpg";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card className="md:h-full 2xl:h-fit ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        Sami Kazah is an Information Technology Enginner Specialized on Software
        Enginnering , Graduated in 2024 with grade 69 , he is also an author He
        has pubished several books on seperate fields like religion comparision
        and IT .
      </p>
      <div className="">
        <Image src={MyImage} alt="signature"></Image>
      </div>
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        <Socials></Socials>
        <Button>
            <FaDownload></FaDownload>
            Resume
        </Button>
      </div>
    </Card>
  );
}
