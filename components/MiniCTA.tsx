import Link from "next/link";

type Props = {
  heading: React.ReactNode;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function MiniCTA({
  heading,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section className="mini-cta" aria-label="CTA">
      <div className="mc-inner">
        <h3>{heading}</h3>
        <div className="mc-actions">
          <Link className="btn" href={primaryHref}>
            {primaryLabel}
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
          <Link className="btn-ghost" href={secondaryHref}>
            {secondaryLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
}
