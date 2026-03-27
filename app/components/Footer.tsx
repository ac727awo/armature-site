import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#030e09",
        borderTop: "1px solid rgba(201, 168, 76, 0.12)",
        padding: "64px 32px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "64px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#f0ebe0",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Armature
              </span>
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "10px",
                  color: "#9aab9f",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Wealth Partners
              </span>
            </div>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "13px",
                color: "#6b7f74",
                lineHeight: "1.7",
                maxWidth: "320px",
              }}
            >
              A trusted financial guide for accomplished individuals and families
              seeking clarity, resilience, and enduring governance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "11px",
                color: "#c9a84c",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/process", label: "Process" },
                { href: "/insights", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "10px" }}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "13px",
                      color: "#9aab9f",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "11px",
                color: "#c9a84c",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Get in Touch
            </h4>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "13px",
                color: "#9aab9f",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Begin with a conversation.
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#c9a84c",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                padding: "10px 20px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#4a5e52",
              }}
            >
              © 2026 Armature Wealth Partners. All rights reserved.
            </span>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link
                href="/privacy"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                  color: "#4a5e52",
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclosures"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                  color: "#4a5e52",
                  textDecoration: "none",
                }}
              >
                Disclosures
              </Link>
            </div>
          </div>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              color: "#3a4e42",
              lineHeight: "1.6",
              maxWidth: "800px",
            }}
          >
            Armature Wealth Partners provides investment advisory services to
            qualified clients. All investing involves risk, including the
            possible loss of principal. Past performance does not guarantee
            future results. This website is for informational purposes only and
            does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
