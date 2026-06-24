import type { Metadata } from "next";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import MiniCTA from "@/components/MiniCTA";
import ProcessParallax from "@/components/ProcessParallax";

export const metadata: Metadata = {
  title: "Our Process — Bear Consulting @ UCLA",
};

type Phase = {
  num: string;
  name: string;
  when: string;
  body: string;
};

const phases: Phase[] = [
  {
    num: "01",
    name: "Intro Call",
    when: "Week 0",
    body: "We start with an introductory call to understand your goals and align on expectations, then create a detailed scope of work with deliverables, timelines, and milestones for your approval.",
  },
  {
    num: "02",
    name: "Kickoff Call",
    when: "Week 1",
    body: "We introduce the project team, clarify roles, and address any questions to ensure smooth collaboration moving forward.",
  },
  {
    num: "03",
    name: "Research & Development",
    when: "Weeks 2–3",
    body: "Our team members will conduct market research, analyze data, and develop design concepts or marketing strategies, with regular check-ins to ensure we're on track with your vision.",
  },
  {
    num: "04",
    name: "Midpoint Deliverable",
    when: "Week 4",
    body: "We present our progress, gather feedback, and refine to ensure full alignment with your goals and vision.",
  },
  {
    num: "05",
    name: "Final Deliverable",
    when: "Week 8",
    body: "We present the final results, providing a detailed walk-through of our work and key takeaways to ensure clarity and understanding. Any work, artifacts, or documentation are transferred to your team.",
  },
  {
    num: "06",
    name: "Implementation",
    when: "Optional",
    body: "After the project, clients can opt for a brief implementation phase to help integrate strategies, designs, or marketing campaigns into their operations.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Nav active="process" />
      <MobileNav active="process" />

      <section className="ph">
        <div className="ph-grid">
          <div>
            <div className="eyebrow">
              <span className="line"></span>For Our Clients
            </div>
            <h1 className="display">
              <span className="outlined">OUR</span>{" "}
              <span className="blue">PROCESS.</span>
            </h1>
          </div>
          <p className="ph-lede">
            {"\n\n"}Our process is <em>tailor-made</em> to fit every
            client&apos;s needs. During the kickoff call, we&apos;ll figure out
            what our engagement together might look like. Below is a general
            framework for what you can expect from us on a project.
          </p>
        </div>
      </section>

      <section className="process">
        <div className="pwrap">
          <div className="process-rail">
            <aside className="phase-stick" aria-hidden="true">
              <div className="ph-label">Currently viewing</div>
              <div className="ph-num">
                <span id="phNum">01</span>
                <span className="blu">.</span>
              </div>
              <div className="ph-name" id="phName">
                Intro Call
              </div>
              <div className="ph-bar">
                <div id="phBar"></div>
              </div>
              <div className="ph-of">
                <span id="phOf">1</span> of {phases.length}
              </div>
            </aside>

            <div className="timeline" role="list" id="phaseList">
              {phases.map((p, i) => (
                <div
                  key={p.num}
                  className={`pstep${i === 0 ? " is-current" : ""}`}
                  data-num={p.num}
                  data-name={p.name}
                  role="listitem"
                >
                  <div className="when">{p.when}</div>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
      <ProcessParallax />
    </>
  );
}
