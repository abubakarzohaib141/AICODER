"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ScreenshotFrame } from "@/components/system/ScreenshotFrame";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { easeOut } from "@/lib/motion";
import { products } from "@/lib/content/products";

const highlightSlugs = ["abz-agent-sdk", "ai-hiring-agent", "lenny-ai"];

function ProjectCard({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.985 }}
      variants={{ rest: { y: 0, scale: 1 }, hover: { y: -6, scale: 1.01 } }}
      transition={{ duration: 0.25, ease: easeOut }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
      className="group relative flex flex-col overflow-hidden rounded-[18px] border border-border hover:shadow-[0_20px_40px_-16px_rgba(32,30,28,0.18)]"
    >
      <span
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(20,125,138,0.12), transparent 70%)",
        }}
      />
      <motion.div
        className="overflow-hidden"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <ScreenshotFrame
          src={product.screenshots?.[0]}
          alt={`${product.name} screenshot`}
          label={product.name}
          aspect={product.screenshotAspect}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </motion.div>
      <div className="flex flex-1 flex-col gap-2.5 p-[22px]">
        <span className="font-mono-label text-[10.5px] uppercase tracking-wide text-teal">
          {product.category}
        </span>
        <span className="font-display text-[17px] font-bold text-foreground">{product.name}</span>
        <p className="text-[13.5px] leading-relaxed text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-2.5 pt-1.5">
          <span className="text-xs text-muted-2">Engineered by AI Coders</span>
          {product.links.length > 0 ? (
            <a
              href={product.links[0].href}
              target={product.links[0].href.startsWith("/") ? undefined : "_blank"}
              rel={product.links[0].href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="text-[12.5px] font-semibold text-foreground transition-colors hover:text-teal"
            >
              Visit →
            </a>
          ) : (
            <Link
              href={`/products/${product.slug}`}
              className="text-[12.5px] font-semibold text-foreground transition-colors hover:text-teal"
            >
              Visit →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  const flagship = products.find((p) => p.slug === "crm-suite") ?? products[0];
  const highlights = highlightSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col gap-9">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading eyebrow="Selected work" title="What We've Built" />
          <Link
            href="/products"
            className="whitespace-nowrap text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            See all work →
          </Link>
        </Reveal>

        <Reveal className="grid overflow-hidden rounded-[22px] border border-border sm:grid-cols-2">
          <div className="flex flex-col justify-between gap-[22px] bg-background-elevated-2 p-9">
            <div className="flex flex-col gap-3">
              <span className="font-mono-label text-[11px] uppercase tracking-wide text-teal">
                {flagship.category} · Flagship
              </span>
              <span className="font-display text-[26px] font-extrabold text-foreground">
                {flagship.name}
              </span>
              <p className="max-w-[380px] text-[14.5px] leading-relaxed text-muted">
                {flagship.description}
              </p>
            </div>
            {flagship.technology && (
              <div className="flex flex-wrap gap-2">
                {flagship.technology.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}
            <span className="text-[12.5px] text-muted-2">Engineered by AI Coders</span>
          </div>
          <div className="flex items-center bg-background-elevated p-5">
            <ScreenshotFrame
              src={flagship.screenshots?.[0]}
              alt={`${flagship.name} screenshot`}
              label={flagship.name}
              aspect={flagship.screenshotAspect}
            />
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((product) => (
            <StaggerItem key={product.slug}>
              <ProjectCard product={product} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
