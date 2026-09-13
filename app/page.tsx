import { Hero } from "@/components/home/Hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ClientWork } from "@/components/home/ClientWork";
import { ProductionMindset } from "@/components/home/ProductionMindset";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyAiCoders } from "@/components/home/WhyAiCoders";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <ProductsPreview />
      <ClientWork />
      <ProductionMindset />
      <HowWeWork />
      <WhyAiCoders />
      <TeamPreview />
      <FinalCta />
    </>
  );
}
