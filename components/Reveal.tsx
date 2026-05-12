"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal controller.
 *
 * Robustness:
 *   1. Any element already at or above the current viewport is marked
 *      `.is-on` immediately. Without this, reloading mid-page leaves
 *      every section above the fold invisible forever — IntersectionObserver
 *      only fires for elements that *enter* the viewport, so elements
 *      already scrolled past would never receive `.is-on`.
 *   2. A 1500ms safety timer forces every remaining `.reveal` to `is-on`.
 *      This catches the rare cases where IO setup races with hydration
 *      or the observer is throttled by the browser.
 *   3. If IntersectionObserver isn't available at all (very old browsers,
 *      some embedded contexts), every element is shown immediately.
 *   4. Re-runs on `pageshow` so back/forward cache restorations also
 *      get correct visibility.
 */
function showAboveViewport(els: NodeListOf<HTMLElement>) {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    // Element top is at or above the bottom of the viewport → reveal now.
    if (r.top <= vh * 0.92) el.classList.add("is-on");
  });
}

export default function RevealClient() {
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    let safety: ReturnType<typeof setTimeout> | null = null;

    const run = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      if (!els.length) return;

      // Step 1: anything already in/above the viewport is shown synchronously.
      showAboveViewport(els);

      // Step 2: observe whatever's still hidden.
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-on"));
        return;
      }
      io?.disconnect();
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-on");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => {
        if (!el.classList.contains("is-on")) io!.observe(el);
      });

      // Step 3: safety net — after 1.5s force-show whatever's left.
      if (safety) clearTimeout(safety);
      safety = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.is-on)")
          .forEach((el) => el.classList.add("is-on"));
      }, 1500);
    };

    run();

    // bfcache restorations
    const onShow = () => run();
    window.addEventListener("pageshow", onShow);

    return () => {
      io?.disconnect();
      if (safety) clearTimeout(safety);
      window.removeEventListener("pageshow", onShow);
    };
  }, []);

  return null;
}
