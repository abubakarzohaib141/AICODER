"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { easeOut, viewport } from "@/lib/motion";
import { products, type Product } from "@/lib/content/products";

// The homepage's curated proof-of-work gallery. Pulls only real, already-shot
// products (each with a genuine screenshot) rather than the full catalog.
const gallerySlugs = ["tresolv", "scope-ai-cv", "lenny-ai", "abz-agent-sdk", "crm-suite", "ai-hiring-agent"];

const cycleDirections = ["left", "up", "right"] as const;

function GalleryTile({ product, index }: { product: Product; index: number }) {
  // Always the internal AI Coders page — the real product/live-site link
  // (when one exists) lives on that page instead, so this card never sends
  // visitors off-site.
  const href = `/products/${product.slug}`;

  return (
    <StaggerItem hover direction={cycleDirections[index % cycleDirections.length]} className="h-full">
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-colors duration-300 hover:border-border-strong"
      >
        <div
          className="relative overflow-hidden bg-background-elevated-2"
          style={{ aspectRatio: product.screenshotAspect ?? "16/10" }}
        >
          {product.screenshots?.[0] ? (
            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="absolute inset-0"
            >
              <Image
                src={product.screenshots[0]}
                alt={`${product.name} screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-2">
              Screenshot coming soon
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background-elevated to-transparent" />
          {product.slug === "crm-suite" && (
            <span className="absolute left-3 top-3 rounded-full border border-border-strong bg-background/80 px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-wide text-teal backdrop-blur-sm">
              Flagship
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-6">
          <span className="font-mono-label text-[10.5px] uppercase tracking-wide text-teal">
            {product.category}
          </span>
          <span className="font-display text-[17px] font-bold text-foreground">{product.name}</span>
          <p className="line-clamp-2 text-[13.5px] leading-relaxed text-muted">{product.description}</p>
          {product.technology && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {product.technology.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          )}
          <div className="mt-auto flex items-center justify-between gap-2.5 pt-2">
            <span className="text-xs text-muted-2">Engineered by AI Coders</span>
            <span className="inline-flex items-center gap-1 rounded-[8px] border border-border-strong px-3 py-1.5 text-[12px] font-semibold text-foreground transition-colors group-hover:border-teal/50 group-hover:text-teal">
              View case study
              <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </StaggerItem>
  );
}

export function ProductShowcase() {
  const gallery = gallerySlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

  return (
    <section id="work" className="relative scroll-mt-20 border-t border-border py-20 sm:py-28">
      <Container className="relative flex flex-col gap-9">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading eyebrow="Selected work" title="What We've Built" />
          <Link
            href="/products"
            className="whitespace-nowrap text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            See all work →
          </Link>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((product, index) => (
            <GalleryTile key={product.slug} product={product} index={index} />
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
