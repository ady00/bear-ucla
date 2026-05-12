import type { Metadata } from "next";
import Nav from "@/components/Nav";
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
    det: "Meet the leads, ask questions, hear from current consultants. Royce 156, 7pm.",
  },
  {
    date: "Sep 28",
    what: "Apps Close",
    det: "Submissions close at 11:59pm PT. Decisions on first-rounds within 5 days.",
  },
  {
    date: "Oct 3 — 12",
    what: "Interviews",
    det: "Two rounds — a behavioral conversation and a team-specific case or portfolio review.",
  },
  {
    date: "Oct 18",
    what: "Offers Out",
    det: "New cohort announced. Onboarding begins the following Monday.",
  },
];

const steps = [
  {
    n: "01",
    h: "Submit the App",
    p: "Tell us a bit about you, why Bear, and which team you're most excited about. Designers add a small portfolio link.",
  },
  {
    n: "02",
    h: "Behavioral Round",
    p: "A 25-minute conversation with two current members about how you think, work in teams, and what you'd want to ship.",
  },
  {
    n: "03",
    h: "Final Round",
    p: "A short case (Strategy / Marketing) or a portfolio walk-through (Design) with the team you'd be joining.",
  },
];

const faq = [
  {
    q: "Who can apply?",
    a: "Any UCLA undergraduate, any year, any major. We've had consultants from CS, design, business economics, public affairs, English, materials science — the through-line is curiosity, not your major.",
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
    a: "Roughly 6–8 hours a week during a project — a weekly team meeting, a client check-in, and async work. Project cycles run about ten weeks.",
  },
  {
    q: "Do you recruit in winter or spring?",
    a: "We hold one main recruitment in fall. Occasionally we open a small winter or spring round if a team has capacity — those get announced on Instagram.",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <Nav active="recruitment" />

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
            teams — <em>strategy, marketing, and design</em> — and are placed
            onto real client engagements from there.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="swrap">
          <div className="sh reveal">
            <div className="num">001 / Timeline</div>
            <h2>
              Recruitment <span className="blue">timeline.</span>
            </h2>
          </div>
          <div className="tl-rail reveal">
            {timeline.map((t) => (
              <div className="tl-cell" key={t.date}>
                <div className="date">{t.date}</div>
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
          <div className="sh reveal">
            <div className="num">002 / How to Apply</div>
            <h2>
              The rounds. <span className="blue"></span>
            </h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step reveal" key={s.n}>
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
          <div className="sh reveal">
            <div className="num">003 / FAQ</div>
            <h2>
              Common <span className="blue">questions.</span>
            </h2>
          </div>
          <div className="faq reveal">
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

      {/* Apply CTA */}
      <section className="apply" id="apply">
        <div className="apply-inner">
          <h2>
            <span className="outlined">APPLY</span> FOR F26.
          </h2>
          <div className="apply-actions">
            <a className="btn" href="#">
              Open Application
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 14 L14 2 M5 2 H14 V11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="btn-ghost"
              href="mailto:hello@bearconsultingucla.com"
            >
              Email a Recruiter →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
