"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

type ActiveKey = "home" | "teams" | "members" | "process" | "recruitment";

const links: { key: ActiveKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "teams", href: "/#teams", label: "Our Teams" },
  { key: "members", href: "/members", label: "Members" },
  { key: "process", href: "/process", label: "Our Process" },
  { key: "recruitment", href: "/recruitment", label: "Recruitment" },
];

export default function MobileNav({ active }: { active: ActiveKey }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="mnav" aria-label="Mobile top bar">
        <Link className="mnav-brand" href="/" aria-label="Bear — home">
          <span className="mark-wrap" aria-hidden="true">
            <BrandMark />
          </span>
          Bear
        </Link>
      </header>

      <button
        type="button"
        className="mnav-fab"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mnav-overlay"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mnav-fab-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        id="mnav-overlay"
        className={`mnav-overlay${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mnav-overlay-head">
          <Link className="mnav-brand" href="/" aria-label="Bear — home">
            <span className="mark-wrap" aria-hidden="true">
              <BrandMark />
            </span>
            Bear
          </Link>
          <button
            type="button"
            className="mnav-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4 L18 18 M18 4 L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mnav-links" aria-label="Primary">
          {links.map((l, i) => (
            <Link
              key={l.key}
              href={l.href}
              className={`mnav-link${active === l.key ? " is-active" : ""}`}
              style={{ animationDelay: `${0.06 + i * 0.05}s` }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mnav-foot">
          <Link
            className="btn mnav-cta"
            href="/recruitment"
            onClick={() => setOpen(false)}
          >
            <span>Apply for F26</span>
            <svg
              className="arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 14 L14 2 M5 2 H14 V11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <span className="chip" title="Live status">
            <span className="pulse"></span> Recruiting · F26
          </span>
        </div>
      </div>
    </>
  );
}
