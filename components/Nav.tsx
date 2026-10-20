import Link from "next/link";
import BrandMark from "./BrandMark";

type ActiveKey = "home" | "teams" | "members" | "process" | "recruitment";

const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg
    className="arrow"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 12 L12 2 M5 2 H12 V9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Nav({ active }: { active: ActiveKey }) {
  const cls = (k: ActiveKey) => (active === k ? "is-active" : undefined);
  return (
    <header className="nav">
      <Link className="brand" href="/">
        <span className="mark-wrap" aria-hidden="true">
          <BrandMark />
        </span>
        Bear
      </Link>
      <nav className="navlinks" aria-label="Primary">
        <Link className={cls("home")} href="/">
          Home
        </Link>
        <Link className={cls("teams")} href="/#teams">
          Our Teams
        </Link>
        <Link className={cls("members")} href="/members">
          Members
        </Link>
        <Link className={cls("process")} href="/process">
          Our Process
        </Link>
        <Link className={cls("recruitment")} href="/recruitment">
          Recruitment
        </Link>
      </nav>
      <div className="nav-cta">
        <Link className="btn" href="/recruitment">
          <span>Apply</span>
          <Arrow />
        </Link>
      </div>
    </header>
  );
}
