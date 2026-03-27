"use client";
import Link from "next/link";
import { useState } from "react";

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
        backgroundColor: "rgba(5, 18, 14, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
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
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "17px",
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
              width: "1px",
              height: "16px",
              backgroundColor: "rgba(201, 168, 76, 0.4)",
            }}
          />
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              color: "#9aab9f",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Wealth Partners
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "13px",
                color: "#9aab9f",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#f0ebe0")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#9aab9f")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "12px",
              color: "#c9a84c",
              border: "1px solid rgba(201, 168, 76, 0.5)",
              padding: "8px 20px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "rgba(201, 168, 76, 0.1)";
              el.style.borderColor = "#c9a84c";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(201, 168, 76, 0.5)";
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
            color: "#f0ebe0",
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
            backgroundColor: "#05120e",
            borderTop: "1px solid rgba(201, 168, 76, 0.1)",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px",
                color: "#9aab9f",
                textDecoration: "none",
                letterSpacing: "0.04em",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
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
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "13px",
              color: "#c9a84c",
              border: "1px solid rgba(201, 168, 76, 0.5)",
              padding: "10px 24px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Get Your Freedom Index
          </Link>
        </div>
      )}
    </header>
  );
}
