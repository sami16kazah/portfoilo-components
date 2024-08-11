import React from "react";
import { Heading } from "@/components/heading/heading";
import { featured_data } from "@/data";
import { FeaturedCard } from "@/components/cards/featureCard";
import ExpandableFeature from "@/components/expandeables/expandeable-feature";
const MainFeatured = featured_data[0];
export default function Featured() {
  return (
    <div className="pt-24 px-3 lg:px-8 ">
      <Heading number="01" title_1="Featured" title_2="Work"></Heading>
      <FeaturedCard
        active={false}
        title={MainFeatured!.title}
        tag={MainFeatured!.tag}
        video={MainFeatured!.video}
      ></FeaturedCard>
      <div  className="mt-24 ">
        <ExpandableFeature></ExpandableFeature>
      </div>
    </div>
  );
}
