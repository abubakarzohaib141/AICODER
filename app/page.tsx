import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CaseStudiesProof } from "@/components/home/CaseStudiesProof";
import { ProductionMindset } from "@/components/home/ProductionMindset";
import { WhyAiCoders } from "@/components/home/WhyAiCoders";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <WhatWeBuild />
      <HowWeWork />
      <CaseStudiesProof />
      <ProductionMindset />
      <WhyAiCoders />
      <TeamPreview />
      <FinalCta />
    </>
  );
}
