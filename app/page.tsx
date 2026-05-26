import Link from "next/link";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import MiniCTA from "@/components/MiniCTA";
import HomeInteractions from "@/components/HomeInteractions";

export default function Home() {
  return (
    <>
      {/* Status banner */}
      <div className="ticker" aria-label="Status">
        <div className="ticker-stage" id="tickerStage">
          <div className="ticker-item is-on">
            <span>★</span>
            <span className="tdot">●</span>
            <span>Recruiting Now</span>
            <span className="tdot">●</span>
            <span>Fall 2026</span>
          </div>
          <div className="ticker-item">
            <span>24 Consultants</span>
            <span className="tdot">●</span>
            <span>14 Client Partners</span>
          </div>
          <div className="ticker-item">
            <span>Applications Open Sep 14</span>
            <span className="tdot">●</span>
            <span>Info Session Sep 22</span>
          </div>
        </div>
      </div>

      <Nav active="home" />
      <MobileNav active="home" />

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-grid">
          <div className="headline-col">
            <div className="eyebrow">
              <span className="line"></span>{" "}
            </div>

            <h1 className="display" aria-label="We bear by providing direction">
              <span className="row">
                <span className="word">
                  <span>WE&nbsp;</span>
                </span>
                <span className="word d2 outlined">
                  <span>BEAR&nbsp;</span>
                </span>
                <span className="word d3">
                  <span className="amp">by</span>
                </span>
              </span>
              <span className="row">
                <span className="word d3">
                  <span>PROVIDING&nbsp;</span>
                </span>
              </span>
              <span className="row">
                <span className="word d4 blue">
                  <span>DIRECTION.</span>
                </span>
              </span>
            </h1>

            <p className="lede">
              <b>Bear Consulting @ UCLA</b> is a premier student-run consulting
              group pairing undergraduate strategists with ambitious founders,
              non-profits and campus ventures. 
            </p>

            <div className="cta-row my-4">
              <Link className="btn my-4" href="/recruitment">
                Apply for Fall 2026
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
              </Link>
              <a className="btn-ghost my-4" href="#work">
                View Our Work
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="hero-mobile-caption" aria-hidden="true">
              Est. 2017 · Los Angeles
              <br />
              Tuesdays @ Royce XYZ
            </div>

            <div className="mb-20"></div>
          </div>

          <div className="bear-col">
            <div
              className="bear-frame"
              id="bearFrame"
              aria-label="Halftone bear portrait"
            >
              <div className="bear-img" aria-hidden="true"></div>
              <svg className="star" viewBox="0 0 200 200" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M100 0 L112 71 L159 17 L131 83 L195 77 L138 111 L195 146 L131 140 L159 207 L112 153 L100 224 L88 153 L41 207 L69 140 L5 146 L62 111 L5 77 L69 83 L41 17 L88 71 Z"
                  transform="translate(0,-12)"
                />
              </svg>
              <div className = "pt-10">
                
                <div className="corner bl pt-10" style={{ fontSize: "10px" }}>
                <br />Est. 2017 — Los Angeles
                <br />
                Tuesdays @ Royce XYZ.
                <span className="big"></span>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Parallax bands (partners + teams) */}
      <section className="pbands" id="bands" aria-label="Partners and teams">
        <div className="pband row-1">
          <div className="pband-track" id="bandTop">
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
          </div>
        </div>
        <div className="pband row-2">
          <div className="pband-track" id="bandBot">
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
            <span>Design</span>
            <span className="pstar">✦</span>
            <span>Strategy</span>
            <span className="pstar">✦</span>
            <span>Marketing</span>
            <span className="pstar">✦</span>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--tight" id="what" aria-label="What we do">
        <div className="section-head reveal">
          <div className="num">001 / What we do</div>
          <h2 style={{ maxWidth: "none", whiteSpace: "nowrap" }}>
            Hands-on. <span className="blue">By design.</span>
          </h2>
        </div>
        <div className="intro-grid reveal">
          <div
            className="club-photo"
            role="img"
            aria-label="Photo of the club — placeholder"
          >
            <span className="club-photo-label">
              Club photo placeholder. 16:9
            </span>
          </div>
          <div>
            <p>
              Our consulting opportunities in strategy, marketing, and design
              allow members to gain hands-on experience across various fields.
            </p>
            <p>
              Projects vary based on the needs of each organization, and our
              goal is to provide <em>actionable recommendations</em> that help
              drive impact, while fostering learning and professional growth
              for our team members.
            </p>
            <p>
            We boast three teams which specialize in a range of services, tailored to 
            meet the unique needs of each client. Every project is handled by a team
          specifically assembled to address the goals and challenges of that
          particular organization.
            </p>
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className="teams section" id="teams" aria-label="Our teams">
        <div className="section-head reveal">
          <div className="num">002 / Our Teams</div>
          <h2>
            Three teams. <span className="blue">One direction.</span>
          </h2>
        </div>

        

        <div className="team reveal">
          <div className="lead">
            <div className="name" style={{ fontSize: "50px" }}>
              Strategy<span className="dot">.</span>
            </div>
            <div className="keywords">
              Market Research<span className="sep">•</span>Market Sizing
              <span className="sep">•</span>Market Entry
              <span className="sep">•</span>Growth Strategy
            </div>
            <p className="desc">
              The Strategy Team focuses on understanding market dynamics,
              identifying growth opportunities, and providing actionable
              insights to help your business thrive.
            </p>
          </div>
          <div className="cards">
            <div className="ts-card">
              <h4>Tools</h4>
              <ul>
                <li>Excel / Google Sheets</li>
                <li>PowerPoint / Google Slides</li>
                <li>Market Research Platforms</li>
                <li>SWOT &amp; other Strategic Frameworks</li>
              </ul>
            </div>
            <div className="ts-card">
              <h4>Skills</h4>
              <ul>
                <li>Data Analysis</li>
                <li>Critical Thinking &amp; Problem-Solving</li>
                <li>Business Acumen &amp; Financial Literacy</li>
                <li>Strategic Planning &amp; Forecasting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="team reveal">
          <div className="lead">
            <div className="name" style={{ fontSize: "48px" }}>
              Marketing<span className="dot">.</span>
            </div>
            <div className="keywords">
              Brand Strategy<span className="sep">•</span>Social Media Strategy
              <span className="sep">•</span>Marketing Strategy
            </div>
            <p className="desc">
              The Marketing Team works to elevate your brand&apos;s presence by
              crafting compelling strategies that resonate with your target
              audience — across every channel.
            </p>
          </div>
          <div className="cards">
            <div className="ts-card">
              <h4>Tools</h4>
              <ul>
                <li>Social Media Platforms (Instagram, TikTok, etc.)</li>
                <li>Microsoft Office</li>
                <li>Figma / Canva</li>
                <li>Surveying &amp; Market Research</li>
              </ul>
            </div>
            <div className="ts-card">
              <h4>Skills</h4>
              <ul>
                <li>Content Creation &amp; Storytelling</li>
                <li>Audience Segmentation &amp; Targeting</li>
                <li>Campaign Management</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="team reveal">
          <div className="lead">
            <div className="name" style={{ fontSize: "50px" }}>
              Design<span className="dot">.</span>
            </div>
            <div className="keywords">
              Product Design<span className="sep">•</span>Web Design
              <span className="sep">•</span>Branding
            </div>
            <p className="desc">
              The Design Team focuses on creating engaging user experiences and
              strong visual identities — UI/UX, branded materials, and content
              that&apos;s visually cohesive across digital and physical form.
            </p>
          </div>
          <div className="cards">
            <div className="ts-card">
              <h4>Tools</h4>
              <ul>
                <li>Figma (UI/UX Design &amp; Prototyping)</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>Canva</li>
                <li>Web Development Tools</li>
              </ul>
            </div>
            <div className="ts-card">
              <h4>Skills</h4>
              <ul>
                <li>Graphic Design</li>
                <li>UI/UX Design Principles</li>
                <li>Brand Development &amp; Creation</li>
                <li>Web Design &amp; Interface Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we shipped */}
      <section className="work section" id="work" aria-label="Selected work">
        <div
          className="section-head reveal"
          style={{ borderTopColor: "rgba(255,255,255,.18)" }}
        >
          <div className="num">003 / What we shipped</div>
          <h2>
            A few of our <span className="blue">recent partners.</span>
          </h2>
        </div>

        <p className="work-lede reveal">
          We provide <em>end-to-end solutions</em> for a variety of clients,
          including startups, non-profits, and student organizations.
        </p>

        <div className="testimonials">
          <article className="ts-row reveal">
            <div className="lhs">
              <div className="name">
                Conservation
                <br />
                Opportunity<span className="dot">.</span>
              </div>
              <div className="ts-tags">
                <span className="ts-tag">Design</span>
                <span className="ts-tag">Marketing</span>
              </div>
            </div>
            <div className="quote">
              <p>
                Bear went straight to my needs and presented something I will
                share with my team and will help us move forward. THANK YOU for
                listening and thank you for your professionality.
              </p>
              <div className="attrib">
                — <span className="who">Fabiola Torres-Toledo</span>,{" "}
                <em>Founder &amp; Executive Director</em>
              </div>
            </div>
          </article>

          <article className="ts-row reveal">
            <div className="lhs">
              <div className="name">
                Study
                <br />
                Break<span className="dot">.</span>
              </div>
              <div className="ts-tags">
                <span className="ts-tag">Marketing</span>
                <span className="ts-tag">Strategy</span>
              </div>
            </div>
            <div className="quote">
              <p>
                It was a tremendous pleasure working with the Bear Consulting
                team. Bear&apos;s extensive experience with student
                organizations, startups, and local businesses was pivotal in
                identifying Study Break&apos;s strengths and weaknesses in
                order to make improvements across its website, mobile app, and
                social media. As a student hub, we couldn&apos;t be more
                confident about our business strategy moving forward. I highly
                recommend Bear for their amazing team and expertise.
              </p>
              <div className="attrib">
                — <span className="who">Anthony Chao</span>,{" "}
                <em>Founder &amp; CEO of Study Break</em>
              </div>
            </div>
          </article>

          <article className="ts-row reveal">
            <div className="lhs">
              <div className="name">
                Bruin
                <br />
                Exchange<span className="dot">.</span>
              </div>
              <div className="ts-tags">
                <span className="ts-tag">Marketing</span>
                <span className="ts-tag">Strategy</span>
                <span className="ts-tag">Design</span>
              </div>
            </div>
            <div className="quote">
              <p>
                Bear at UCLA has many talented creators and thinkers, and given
                the chance, I would certainly collaborate with them again.
              </p>
              <div className="attrib">
                — <span className="who">Talib Attarwala</span>, <em>Founder</em>
              </div>
            </div>
          </article>
        </div>
      </section>

      <MiniCTA
        heading="Work with us."
        primaryHref="/recruitment"
        primaryLabel="Apply for F26"
        secondaryHref="/process"
        secondaryLabel="See Our Process"
      />

      <Footer />
      <HomeInteractions />
    </>
  );
}
