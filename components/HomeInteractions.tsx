"use client";

import { useEffect } from "react";

export default function HomeInteractions() {
  useEffect(() => {
    // Ticker rotator
    const items = document.querySelectorAll<HTMLElement>(
      "#tickerStage .ticker-item"
    );
    let tickerInterval: ReturnType<typeof setInterval> | undefined;
    if (items.length) {
      let i = 0;
      tickerInterval = setInterval(() => {
        items[i].classList.remove("is-on");
        i = (i + 1) % items.length;
        items[i].classList.add("is-on");
      }, 3600);
    }

    // Parallax bands: duplicate content, set base, couple to scroll
    const top = document.getElementById("bandTop");
    const bot = document.getElementById("bandBot");
    const bands = document.getElementById("bands");

    let onScroll: (() => void) | null = null;
    let onResize: (() => void) | null = null;

    if (top && bot && bands) {
      // Guard against double-duplication (StrictMode double-invoke,
      // fast refresh re-runs, etc.) — keying off a data flag.
      if (!top.dataset.doubled) {
        top.innerHTML = top.innerHTML + top.innerHTML;
        top.dataset.doubled = "1";
      }
      if (!bot.dataset.doubled) {
        bot.innerHTML = bot.innerHTML + bot.innerHTML;
        bot.dataset.doubled = "1";
      }

      let topW = 0;
      let botW = 0;
      const measure = () => {
        topW = top.scrollWidth / 2;
        botW = bot.scrollWidth / 2;
        top.style.setProperty("--base", -topW * 0.25 + "px");
        bot.style.setProperty("--base", -botW * 0.55 + "px");
      };
      measure();
      onResize = () => measure();
      window.addEventListener("resize", onResize);

      onScroll = () => {
        const r = bands.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.max(
          -1,
          Math.min(1, (vh / 2 - (r.top + r.height / 2)) / vh)
        );
        const range = Math.min(420, window.innerWidth * 0.35);
        const extra = p * range;
        top.style.setProperty("--scroll", -extra + "px");
        bot.style.setProperty("--scroll", -extra + "px");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Hero bear spotlight follows cursor
    const frame = document.getElementById("bearFrame");
    const onMove = (e: PointerEvent) => {
      if (!frame) return;
      const r = frame.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      frame.style.setProperty("--mx", mx + "%");
      frame.style.setProperty("--my", my + "%");
    };
    if (frame) {
      frame.addEventListener("pointermove", onMove as EventListener);
    }

    // Smooth scroll for in-page anchors
    const anchors = document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="/#"], a[href^="#"]'
    );
    const onAnchor = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href") || "";
      const hashIdx = href.indexOf("#");
      if (hashIdx === -1) return;
      const id = href.slice(hashIdx + 1);
      if (!id) return;
      const t = document.getElementById(id);
      if (t) {
        e.preventDefault();
        const y = t.getBoundingClientRect().top + window.scrollY - 8;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchor));

    return () => {
      if (tickerInterval) clearInterval(tickerInterval);
      if (onResize) window.removeEventListener("resize", onResize);
      if (onScroll) window.removeEventListener("scroll", onScroll);
      if (frame) frame.removeEventListener("pointermove", onMove as EventListener);
      anchors.forEach((a) => a.removeEventListener("click", onAnchor));
    };
  }, []);

  return null;
}
