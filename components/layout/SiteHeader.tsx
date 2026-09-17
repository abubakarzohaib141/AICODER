"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { siteConfig } from "@/lib/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 shadow-[0_8px_24px_rgba(32,30,28,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <MotionLink
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted transition-colors hover:text-foreground"
              initial="rest"
              whileHover="hover"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-foreground"
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.2 }}
              />
            </MotionLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookCallButton className="!px-5 !py-2.5">Book a Call</BookCallButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
