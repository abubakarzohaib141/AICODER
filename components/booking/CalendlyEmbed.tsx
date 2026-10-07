"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/content/site";

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

// Calendly's widget.js only auto-initializes `.calendly-inline-widget` elements
// present in the DOM at the moment it finishes loading. Any embed that mounts
// later (a modal opened by a click, a popup shown after a delay) is invisible
// to that one-time scan and stays blank forever. Every embed on the site goes
// through this single component instead, which calls `Calendly.initInlineWidget`
// itself once the container exists and the script has loaded (polling briefly
// if the script is still in flight), so timing never matters.
export function CalendlyEmbed({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    function init() {
      if (cancelled) return;
      const Calendly = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
      if (Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        Calendly.initInlineWidget({
          url: `${siteConfig.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`,
          parentElement: containerRef.current,
        });
      } else {
        setTimeout(init, 200);
      }
    }
    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className={className} style={style} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
