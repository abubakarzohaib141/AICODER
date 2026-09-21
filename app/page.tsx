import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { WhyAiCoders } from "@/components/home/WhyAiCoders";
import { WhoWeBuildFor } from "@/components/home/WhoWeBuildFor";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ProductionMindset } from "@/components/home/ProductionMindset";
import { CaseStudiesProof } from "@/components/home/CaseStudiesProof";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <WhatWeBuild />
      <WhyAiCoders />
      <WhoWeBuildFor />
      <ProductShowcase />
      <Testimonials />
      <HowWeWork />
      <ProductionMindset />
      <CaseStudiesProof />
      <FaqSection />
      <FinalCta />
    </>
  );
}
