import Link from "next/link";
import Image from "next/image";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1c3828",
        borderTop: "1px solid rgba(201, 168, 76, 0.15)",
        padding: "64px 32px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{ marginBottom: "56px" }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <Image
                src="/logo.png"
                alt="Armature Wealth Office"
                width={776}
                height={226}
                style={{ height: "32px", width: "auto" }}
              />
            </div>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "13px",
                color: "#7a9a82",
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
                fontFamily: BODY,
                fontSize: "11px",
                color: "#b8913a",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "600",
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
                      fontFamily: BODY,
                      fontSize: "13px",
                      color: "#8aab96",
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
                fontFamily: BODY,
                fontSize: "11px",
                color: "#b8913a",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Get in Touch
            </h4>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "13px",
                color: "#8aab96",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Begin with a conversation.
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#f5f0eb",
                border: "1px solid rgba(245, 240, 235, 0.3)",
                padding: "10px 20px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: "500",
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
            borderTop: "1px solid rgba(245, 240, 235, 0.1)",
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
                fontFamily: BODY,
                fontSize: "12px",
                color: "#5a7a62",
              }}
            >
              © 2026 Armature Wealth Office. All rights reserved.
            </span>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link
                href="/privacy"
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#5a7a62",
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclosures"
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#5a7a62",
                  textDecoration: "none",
                }}
              >
                Disclosures
              </Link>
            </div>
          </div>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              color: "#4a6a52",
              lineHeight: "1.6",
              maxWidth: "800px",
            }}
          >
            Armature Wealth Office provides investment advisory services to
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
