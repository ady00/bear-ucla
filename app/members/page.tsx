"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import MiniCTA from "@/components/MiniCTA";

type TabKey = "exec" | "strategy" | "marketing" | "design" | "advisors";
type AvatarVariant = "" | "alt" | "cream" | "dark";

type Member = {
  initials: string;
  name: string;
  role: string;
  team: TabKey;
};

// Members with a headshot under /public/images/headshots/<slug>.jpg.
// Everyone else falls back to their colored initials avatar.
const HEADSHOTS = new Set([
  "aadit-pareek", "aayushi-saha", "advay-bajpai", "alisha-bajaj",
  "alison-chen", "angeline-kukreja", "annabella-lew", "audrey-lee",
  "avikrishna-bhardwaj", "christopher-pellettiere", "claire-bilter",
  "claire-oconnor", "dean-fujimoto", "finley-caulfield", "harley-sidhu",
  "jennifer-tan", "khanh-doan", "lisa-wang", "navya-tiwari", "nevan-hughlett",
  "oliver-lawrence", "sanskriti-agarwal", "sriya-madadi", "sydney-biscoe",
  "varsha-meda", "venice-jithavech", "zeyna-tai", "zoey-rudolph",
]);

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const headshotFor = (name: string) => {
  const slug = slugify(name);
  return HEADSHOTS.has(slug) ? `/images/headshots/${slug}.jpg` : undefined;
};

// Avatar colors cycle by position within each team for visual variety.
const VARIANTS: AvatarVariant[] = ["", "alt", "dark", "cream"];

const members: Member[] = [
  // EXECUTIVE BOARD — presidents, VPs, and directors
  { initials: "VM", name: "Varsha Meda", role: "Co-President", team: "exec" },
  { initials: "NH", name: "Nevan Hughlett", role: "Co-President", team: "exec" },
  { initials: "CP", name: "Christopher Pellettiere", role: "VP Projects", team: "exec" },
  { initials: "KD", name: "Khanh Doan", role: "VP Projects", team: "exec" },
  { initials: "AA", name: "Alex Aubrecht", role: "Internal Vice-President", team: "exec" },
  { initials: "FM", name: "Faye Malloy", role: "Internal Vice-President", team: "exec" },
  { initials: "AP", name: "Aadit Pareek", role: "External Vice-President", team: "exec" },
  { initials: "OL", name: "Oliver Lawrence", role: "Strategy Director", team: "exec" },
  { initials: "CB", name: "Claire Bilter", role: "Strategy Director", team: "exec" },
  { initials: "DF", name: "Dean Fujimoto", role: "Design Director", team: "exec" },
  { initials: "VJ", name: "Venice Jithavech", role: "Design Director", team: "exec" },
  { initials: "RP", name: "Rhea Param", role: "Marketing Director", team: "exec" },
  { initials: "AC", name: "Alison Chen", role: "Marketing Director", team: "exec" },
  { initials: "AB", name: "Avikrishna Bhardwaj", role: "Recruitment Director", team: "exec" },
  { initials: "AB", name: "Alisha Bajaj", role: "Recruitment Director", team: "exec" },
  { initials: "AL", name: "Audrey Lee", role: "Finance Director", team: "exec" },

  // STRATEGY
  { initials: "OL", name: "Oliver Lawrence", role: "Strategy Director", team: "strategy" },
  { initials: "CB", name: "Claire Bilter", role: "Strategy Director", team: "strategy" },
  { initials: "AS", name: "Aayushi Saha", role: "Consultant", team: "strategy" },
  { initials: "WL", name: "Winston Li", role: "Consultant", team: "strategy" },
  { initials: "CH", name: "Camilia Hornstein", role: "Consultant", team: "strategy" },
  { initials: "ZR", name: "Zoey Rudolph", role: "Consultant", team: "strategy" },
  { initials: "SB", name: "Sydney Biscoe", role: "Consultant", team: "strategy" },
  { initials: "ZT", name: "Zeyna Tai", role: "Consultant", team: "strategy" },
  { initials: "DR", name: "Deetya Rajan", role: "Consultant", team: "strategy" },

  // MARKETING
  { initials: "RP", name: "Rhea Param", role: "Marketing Director", team: "marketing" },
  { initials: "AC", name: "Alison Chen", role: "Marketing Director", team: "marketing" },
  { initials: "SS", name: "Shriya Shekatkar", role: "Consultant", team: "marketing" },
  { initials: "FC", name: "Finley Caulfield", role: "Consultant", team: "marketing" },
  { initials: "HS", name: "Harley Sidhu", role: "Consultant", team: "marketing" },
  { initials: "AL", name: "Annabella Lew", role: "Consultant", team: "marketing" },
  { initials: "TS", name: "Tam Suteesopon", role: "Consultant", team: "marketing" },
  { initials: "AK", name: "Aiki Kassabian", role: "Consultant", team: "marketing" },
  { initials: "SM", name: "Sriya Madadi", role: "Consultant", team: "marketing" },
  { initials: "LW", name: "Lisa Wang", role: "Consultant", team: "marketing" },

  // DESIGN
  { initials: "DF", name: "Dean Fujimoto", role: "Design Director", team: "design" },
  { initials: "VJ", name: "Venice Jithavech", role: "Design Director", team: "design" },
  { initials: "VM", name: "Vanessa Man", role: "Consultant", team: "design" },
  { initials: "DM", name: "Darren Ma", role: "Consultant", team: "design" },
  { initials: "NT", name: "Navya Tiwari", role: "Consultant", team: "design" },
  { initials: "CO", name: "Claire O'Connor", role: "Consultant", team: "design" },
  { initials: "NT", name: "Nancy Tran", role: "Consultant", team: "design" },
  { initials: "AB", name: "Advay Bajpai", role: "Consultant", team: "design" },
  { initials: "CL", name: "Chelsea Lee", role: "Consultant", team: "design" },

  // ADVISORS
  { initials: "AS", name: "Armaan Sett", role: "Senior Advisor", team: "advisors" },
  { initials: "DP", name: "Dylan Pandya", role: "Senior Advisor", team: "advisors" },
  { initials: "MP", name: "Mahi Patel", role: "Senior Advisor", team: "advisors" },
  { initials: "AK", name: "Angeline Kukreja", role: "Senior Advisor", team: "advisors" },
  { initials: "SA", name: "Sanskriti Agarwal", role: "Senior Advisor", team: "advisors" },
  { initials: "JB", name: "Joseph Burke", role: "Senior Advisor", team: "advisors" },
  { initials: "JT", name: "Jennifer Tan", role: "Senior Advisor", team: "advisors" },
];

const tabs: { key: TabKey; label: string }[] = [
  { key: "exec", label: "Executive Board" },
  { key: "strategy", label: "Strategy" },
  { key: "marketing", label: "Marketing" },
  { key: "design", label: "Design" },
  { key: "advisors", label: "Advisors" },
];

export default function MembersPage() {
  const [active, setActive] = useState<TabKey>("exec");

  return (
    <>
      <Nav active="members" />
      <MobileNav active="members" />

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
          <div className="ph-media">
            <div
              className="team-photo has-img"
              role="img"
              aria-label="Team photo"
              style={{ backgroundImage: "url(/images/team-full-funny.jpg)" }}
            ></div>
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
          <div className="m-head">
            <h2>
              Meet the <span className="blue">members.</span>
            </h2>
            
          </div>

          <div className="tabs" role="tablist">
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

          <div className="grid-members" id="memberGrid">
            {members
              .filter((m) => m.team === active)
              .map((m, i) => {
                const img = headshotFor(m.name);
                return (
                <div className="member" key={`${m.team}-${i}-${m.name}`}>
                  <div
                    className={`avatar${
                      img
                        ? " has-img"
                        : VARIANTS[i % VARIANTS.length]
                        ? " " + VARIANTS[i % VARIANTS.length]
                        : ""
                    }`}
                    style={img ? { backgroundImage: `url(${img})` } : undefined}
                  >
                    {!img && <div className="initials">{m.initials}</div>}
                  </div>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
                );
              })}
          </div>

          <div className="member-gallery">
            <div
              className="team-photo has-img"
              role="img"
              aria-label="Team photo"
              style={{ backgroundImage: "url(/images/gallery-1.jpg)" }}
            ></div>
            <div
              className="team-photo has-img"
              role="img"
              aria-label="Team photo"
              style={{ backgroundImage: "url(/images/gallery-2.jpg)" }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
