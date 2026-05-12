"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MiniCTA from "@/components/MiniCTA";

type TabKey = "exec" | "strategy" | "marketing" | "design" | "alumni";
type AvatarVariant = "" | "alt" | "cream" | "dark";

type Member = {
  initials: string;
  name: string;
  role: string;
  team: TabKey;
  variant?: AvatarVariant;
};

const members: Member[] = [
  // EXECUTIVE BOARD
  { initials: "NH", name: "Nevan Hughlett", role: "Co-President", team: "exec" },
  { initials: "VM", name: "Varsha Meda", role: "Co-President", team: "exec", variant: "alt" },
  { initials: "AP", name: "Aadit Pareek", role: "External Vice-President", team: "exec", variant: "dark" },
  { initials: "AA", name: "Alex Aubrecht", role: "Internal Vice-President", team: "exec" },
  { initials: "FM", name: "Faye Malloy", role: "Internal Vice-President", team: "exec", variant: "cream" },
  { initials: "CP", name: "Jon Snow", role: "VP Projects", team: "exec", variant: "dark" },
  { initials: "KĐ", name: "Khanh Đoan", role: "VP Projects", team: "exec" },
  { initials: "CB", name: "Claire Bilter", role: "Strategy Director", team: "exec", variant: "alt" },
  { initials: "OL", name: "Oliver Lawrence", role: "Strategy Director", team: "exec", variant: "dark" },
  { initials: "AC", name: "Alison Chen", role: "Marketing Director", team: "exec", variant: "cream" },
  { initials: "RP", name: "Rhea Parameswaran", role: "Marketing Director", team: "exec" },
  { initials: "VJ", name: "Venice Jithavech", role: "Design Director", team: "exec", variant: "dark" },
  { initials: "DF", name: "Dean Fujimoto", role: "Design Director", team: "exec" },
  { initials: "AL", name: "Audrey Lee", role: "Finance Director", team: "exec", variant: "alt" },
  { initials: "AB", name: "Alisha Bajaj", role: "Recruitment Director", team: "exec", variant: "cream" },
  { initials: "AB", name: "Avikrishna Bhardwaj", role: "Recruitment Director", team: "exec", variant: "dark" },
  // STRATEGY
  { initials: "CB", name: "Claire Bilter", role: "Strategy Director", team: "strategy", variant: "alt" },
  
  // MARKETING
  { initials: "AC", name: "Alison Chen", role: "Marketing Director", team: "marketing", variant: "cream" },
  
  // DESIGN
  { initials: "VJ", name: "Venice Jithavech", role: "Design Director", team: "design", variant: "dark" },
  
  // ALUMNI
  { initials: "SK", name: "John Doe", role: "'24 — Co-President", team: "alumni", variant: "cream" },
  
];

const tabs: { key: TabKey; label: string }[] = [
  { key: "exec", label: "Executive Board" },
  { key: "strategy", label: "Strategy" },
  { key: "marketing", label: "Marketing" },
  { key: "design", label: "Design" },
  { key: "alumni", label: "Alumni" },
];

export default function MembersPage() {
  const [active, setActive] = useState<TabKey>("exec");

  return (
    <>
      <Nav active="members" />

      <section className="ph">
        <div className="ph-grid">
          <div>
            <div className="eyebrow">
              <span className="line"></span>About Bear
            </div>
            <h1 className="display">
              <span className="outlined">OUR</span>{" "}
              <span className="blue">TEAM.</span>
            </h1>
          </div>
          <div>
            <p className="ph-lede" style={{ fontSize: "14px" }}>
              Bear at UCLA is a pro-bono student-run consulting organization. We
              make it our mission to enrich the experiences of{" "}
              <em>start-ups, small businesses, and UCLA student organizations</em>{" "}
              by facilitating process improvement across strategy, marketing,
              and design.
            </p>
            <p></p>
            <div className="ph-actions">
              <Link className="btn" href="/recruitment">
                Join Our Team
                <svg
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2 12 L12 2 M5 2 H12 V9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link className="btn-ghost" href="/#teams">
                Learn more about what teams do →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="members">
        <div className="mwrap">
          <div className="m-head reveal">
            <h2>
              Meet the <span className="blue">members.</span>
            </h2>
            <p className="m-sub">
              Our team is a tight-knit group of UCLA undergraduates across{" "}
              <em>strategy, marketing, and design</em>. Filter by team below.
            </p>
          </div>

          <div className="tabs reveal" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`tab${active === t.key ? " is-on" : ""}`}
                data-tab={t.key}
                onClick={() => setActive(t.key)}
                role="tab"
                aria-selected={active === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid-members reveal" id="memberGrid">
            {members
              .filter((m) => m.team === active)
              .map((m, i) => (
                <div className="member" key={`${m.team}-${i}-${m.name}`}>
                  <div
                    className={`avatar${m.variant ? " " + m.variant : ""}`}
                  >
                    <div className="initials">{m.initials}</div>
                  </div>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <MiniCTA
        heading="Become a bear."
        primaryHref="/recruitment"
        primaryLabel="Apply for F26"
        secondaryHref="/#teams"
        secondaryLabel="See Our Teams"
      />

      <Footer />
    </>
  );
}
