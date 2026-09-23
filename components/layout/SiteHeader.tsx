"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { siteConfig } from "@/lib/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors duration-200 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" onMouseLeave={() => setHovered(null)}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHovered(item.href)}
              className="relative py-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
              {hovered === item.href && (
                <motion.span
                  layoutId="nav-hover-dot"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <BookCallButton variant="primary" className="!px-5 !py-2.5">
            Book a Call
          </BookCallButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
