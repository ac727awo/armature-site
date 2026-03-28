"use client";
import Link from "next/link";
import { useState } from "react";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(245, 240, 235, 0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(28, 56, 40, 0.12)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: HEADING,
              fontSize: "17px",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Armature
          </span>
          <span
            style={{
              width: "1px",
              height: "16px",
              backgroundColor: "rgba(28, 56, 40, 0.25)",
            }}
          />
          <span
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              color: "#4a6155",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Wealth Office
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: BODY,
                fontSize: "13px",
                color: "#4a6155",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#1c3828")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#4a6155")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              color: "#f5f0eb",
              backgroundColor: "#1c3828",
              padding: "9px 20px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: "500",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "#0f2218";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "#1c3828";
            }}
          >
            Get Your Freedom Index
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#1c3828",
          }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#f5f0eb",
            borderTop: "1px solid rgba(28, 56, 40, 0.1)",
            padding: "24px 32px 32px",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                textDecoration: "none",
                letterSpacing: "0.04em",
                fontWeight: "500",
                padding: "12px 0",
                borderBottom: "1px solid rgba(28, 56, 40, 0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "24px",
              fontFamily: BODY,
              fontSize: "13px",
              color: "#f5f0eb",
              backgroundColor: "#1c3828",
              padding: "10px 24px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Get Your Freedom Index
          </Link>
        </div>
      )}
    </header>
  );
}
