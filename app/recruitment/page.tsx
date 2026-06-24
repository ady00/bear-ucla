import type { Metadata } from "next";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recruitment — Bear Consulting @ UCLA",
};

const timeline = [
  {
    date: "Sep 14",
    what: "Applications Open",
    det: "Online application goes live. Apply for one or more teams.",
  },
  {
    date: "Sep 22",
    what: "Info Session",
    det: "Our executive board provides a rundown of the application process in-person.",
  },
  {
    date: "Sep 22",
    what: "Coffee Chats",
    det: "Meet our members and get to know them in a more casual group setting.",
  },
  
  {
    date: "Oct 3 — 12",
    what: "Final Interviews",
    det: "Two parts: a behavioral conversation and a team-specific case or portfolio review.",
  },
  {
    date: "Oct 18",
    what: "Offers Out",
    det: "New cohort announced. Onboarding begins the next week.",
  },
];

const steps = [
  {
    n: "01",
    h: "Submit the App",
    p: "Tell us a bit about you, why Bear, and which team you're most excited about.",
  },
  {
    n: "02",
    h: "Coffee Chats",
    p: "A series of conversations with members about how you think, work in teams, and what you'd want to work on.",
  },
  {
    n: "03",
    h: "Final Round",
    p: "A short case oriented around your team of choice (Strategy / Marketing / Design) with the executive members.",
  },
];

const faq = [
  {
    q: "Who can apply?",
    a: "Any UCLA undergraduate, any year, any major. We've had consultants from CS, design, business economics, public affairs, English, materials science. We look for interest, not major.",
  },
  {
    q: "Do I need prior consulting experience?",
    a: "No. Most of our cohort has none. We onboard everyone with the same core training in research, frameworks, and storytelling before placing you on a project.",
  },
  {
    q: "Can I apply to multiple teams?",
    a: "Yes. You can rank Strategy, Marketing, and Design on the application, and we'll route your interviews accordingly.",
  },
  {
    q: "What's the time commitment?",
    a: "Roughly 4–6 hours a week during a project (but this number fluctuates). A weekly team meeting, a client check-in, and async work.",
  },
  {
    q: "Do you recruit in winter or spring?",
    a: "We hold one main recruitment in fall. Occasionally we open a small winter or spring round if a team has capacity. those get announced on Instagram.",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <Nav active="recruitment" />
      <MobileNav active="recruitment" />

      <section className="ph">
        <div className="ph-grid">
          <div>
            <div className="eyebrow">
              <span className="line"></span>Fall 2026 Cohort
            </div>
            <h1 className="display">
              <span className="outlined">JOIN</span>{" "}
              <span className="blue">BEAR.</span>
            </h1>
          </div>
          <p className="ph-lede">
            We recruit one cohort each fall. New consultants join one of three
            teams (<em>strategy, marketing, or design</em>) and are placed
            onto real client engagements from there.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="swrap">
          <div className="sh">
            <div className="num">001 / Timeline</div>
            <h2>
              Recruitment <span className="blue">timeline.</span>
            </h2>
          </div>
          <div className="tl-rail">
            {timeline.map((t) => (
              <div className="tl-cell" key={t.what}>
                <div className="what">{t.what}</div>
                <p className="det">{t.det}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="swrap">
          <div className="sh">
            <div className="num">002 / How to Apply</div>
            <h2>
              The rounds. <span className="blue"></span>
            </h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="swrap">
          <div className="sh">
            <div className="num">003 / FAQ</div>
            <h2>
              Common <span className="blue">questions.</span>
            </h2>
          </div>
          <div className="faq">
            {faq.map((f, i) => (
              <details key={i}>
                <summary>
                  {f.q}
                  <span className="pm">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      

      <Footer />
    </>
  );
}
