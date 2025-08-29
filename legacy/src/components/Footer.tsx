const logo = "/logo3.png";
import "./Footer.css";

const navItems = [
  { id: "01", label: "Home", href: "#home" },
  { id: "02", label: "Perks", href: "#perks" },
  { id: "03", label: "Testimonials", href: "#testimonials" },
];

const Footer = () => {
  return (
    <footer aria-label="Site footer" className="footer">
      <section className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-group">
            <img
              src={logo}
              alt="LawVriksh logo mark with scales and leaves"
              className="footer__logo"
              loading="lazy"
            />
            <span className="brand-heading" aria-label="LawVriksh brand">LawVriksh</span>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="footer__nav-link">
              <span className="footer__nav-id footer-title">{item.id}</span>
              <span className="footer__nav-label footer-desc">{item.label}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="footer__bottom">
        <article className="footer__section">
          <header className="footer__section-header">
            <span className="footer__dot" aria-hidden />
            <h2 className="footer-title">Contact</h2>
          </header>
          <p className="footer-desc">info@lawvriksh.com</p>
        </article>

        <article className="footer__section">
          <header className="footer__section-header">
            <span className="footer__dot" aria-hidden />
            <h2 className="footer-title">Connect</h2>
          </header>
          <ul className="footer__links footer-desc" aria-label="Social links">
            <li><a className="footer__link" href="https://www.linkedin.com/company/lawvriksh/">Linkedin</a></li>
            <li><a className="footer__link" href="https://www.instagram.com/lawvrikshofficial/">Instagram</a></li>
            <li><a className="footer__link" href="https://x.com/lawvriksh">X.com</a></li>
          </ul>
        </article>

        <article className="footer__section">
          <header className="footer__section-header">
            <span className="footer__dot" aria-hidden />
            <h2 className="footer-title">Other</h2>
          </header>
          <div className="footer__meta footer-desc">
            <a className="footer__link" href="/about">About Us</a>
            <span className="footer__separator">•</span>
            <a className="footer__link" href="/privacy-policy">Privacy Policy</a>
            <span>2025 LawVriksh</span>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;