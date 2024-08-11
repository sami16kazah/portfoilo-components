import Gallery from "@/components/cards/gallery";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import { Heading } from "@/components/heading/heading";
import { Card } from "@/components/ui/card";
import React from "react";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me"></Heading>
      <div className="space-y-4 py-8 ">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard></MeCard>
          <ResumeCard></ResumeCard>
          <Card title="Background">Background</Card>
          <Gallery></Gallery>
        </div>
        <div className="space-y-4">
          <Card title="Instructor">Instructor</Card>
          <Card title="Certifications">Certifications</Card>
        </div>
        <div className="space-y-4"></div>
        <Card title="Stack">Stack</Card>
        <Card title="Experiance">Experiance</Card>
        <Card title="Education">Education</Card>
      </div>
      <div className="hidden 2xl:flex">
        <Card title="Gallery">Gallery</Card>
      </div>
    </div>
  );
}
