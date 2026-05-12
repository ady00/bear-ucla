"use client";

import { useEffect } from "react";

export default function ProcessParallax() {
  useEffect(() => {
    const steps = document.querySelectorAll<HTMLElement>("#phaseList .pstep");
    const numEl = document.getElementById("phNum");
    const nameEl = document.getElementById("phName");
    const barEl = document.getElementById("phBar");
    const ofEl = document.getElementById("phOf");
    if (!steps.length || !numEl || !nameEl || !barEl || !ofEl) return;

    let currentIdx = -1;
    const setActive = (idx: number) => {
      if (idx === currentIdx) return;
      currentIdx = idx;
      const s = steps[idx];
      if (!s) return;
      numEl.textContent = s.dataset.num || "";
      nameEl.innerHTML = s.dataset.name || "";
      ofEl.textContent = String(idx + 1);
      barEl.style.width = ((idx + 1) / steps.length) * 100 + "%";
      steps.forEach((el, i) =>
        el.classList.toggle("is-current", i === idx)
      );
    };

    let queued = false;
    const tick = () => {
      queued = false;
      const target = window.innerHeight * 0.5;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < steps.length; i++) {
        const r = steps[i].getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const d = Math.abs(mid - target);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }
      setActive(bestIdx);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
