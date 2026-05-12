import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="ftr-grid">
        <div className="ftr-brand">
          <span className="b">Bear ✦</span>
          <p className="desc">
            Bear Consulting @ UCLA — a student-run consulting group pairing
            undergraduate strategists, marketers and designers with ambitious
            partners.
          </p>
        </div>
        <div className="ftr-col">
          <h5>Site</h5>
          <ul>
            <li>
              <Link href="/#teams">Our Teams</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
            <li>
              <Link href="/process">Our Process</Link>
            </li>
            <li>
              <Link href="/recruitment">Recruitment</Link>
            </li>
          </ul>
        </div>
        <div className="ftr-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="mailto:hello@bearconsultingucla.com">
                hello@bearconsultingucla.com
              </a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ftr-bot">
        <div>© 2026 Bear Consulting @ UCLA · Westwood, CA</div>
        <div>Made by Advay Bajpai</div>
      </div>
    </footer>
  );
}
