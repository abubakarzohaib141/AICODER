"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { siteConfig } from "@/lib/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07080c]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <MotionLink
              key={item.href}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              className="relative text-sm text-white/70 transition-colors hover:text-white"
              initial="rest"
              whileHover="hover"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-white"
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.2 }}
              />
            </MotionLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookCallButton variant="inverse" className="!px-5 !py-2.5">
            Book a Call
          </BookCallButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
