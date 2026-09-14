import { Hero } from "@/components/home/Hero";
import { WhoWeBuildFor } from "@/components/home/WhoWeBuildFor";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ProductionMindset } from "@/components/home/ProductionMindset";
import { CaseStudiesProof } from "@/components/home/CaseStudiesProof";
import { WhyAiCoders } from "@/components/home/WhyAiCoders";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeBuildFor />
      <ProductShowcase />
      <WhatWeBuild />
      <HowWeWork />
      <ProductionMindset />
      <CaseStudiesProof />
      <WhyAiCoders />
      <TeamPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
