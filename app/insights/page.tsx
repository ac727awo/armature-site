"use client";
import { useState } from "react";
import Link from "next/link";
import CTASection from "../components/CTASection";

const articles = [
  {
    category: "Capital Efficiency",
    date: "February 2026",
    readTime: "2 min read",
    title: "Capital Efficiency Is a Condition, Not a Goal",
    excerpt:
      "Most discussions about capital efficiency start in the wrong place. Efficiency is not something you achieve — it is a condition you either maintain or let erode.",
    href: "/insights/capital-efficiency-is-a-condition",
  },
  {
    category: "Tax Strategy",
    date: "February 2026",
    readTime: "2 min read",
    title: "Tax Drag Is a Structural Issue, Not a Tactical One",
    excerpt:
      "Most tax inefficiency does not come from bad advice. It comes from decisions made in isolation. Tax drag compounds quietly across years.",
    href: "/insights/tax-drag-is-a-structural-issue",
  },
  {
    category: "Private Investments",
    date: "December 2025",
    readTime: "2 min read",
    title: "Private Investments Need Roles, Not Just Returns",
    excerpt:
      "Private investments fail more often from confusion than conviction. The issue is rarely access. It's clarity of purpose.",
    href: "/insights/private-investments-need-roles",
  },
  {
    category: "Capital Efficiency",
    date: "December 2025",
    readTime: "2 min read",
    title: "Designed Income Reduces Oversight",
    excerpt:
      "Income becomes problematic when pursued reactively. Designed well, it does the opposite. The real issue is whether income was structured to serve a role.",
    href: "/insights/designed-income-reduces-oversight",
  },
  {
    category: "Long-Term Planning",
    date: "November 2025",
    readTime: "2 min read",
    title: "Legacy Is a Decision System, Not an Event",
    excerpt:
      "Legacy is usually discussed too late, and too narrowly. In practice, legacy is built quietly, long before any formal transfer takes place.",
    href: "/insights/legacy-is-a-decision-system",
  },
  {
    category: "Long-Term Planning",
    date: "November 2025",
    readTime: "2 min read",
    title: "The Case for Disciplined Diversification",
    excerpt:
      "Most portfolios are diversified. Very few are disciplined. The difference isn't the number of assets — it's whether diversification was designed to withstand different kinds of stress.",
    href: "/insights/disciplined-diversification",
  },
];

const categories = [
  "All",
  "Capital Efficiency",
  "Tax Strategy",
  "Private Investments",
  "Long-Term Planning",
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#05120e",
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "32px",
          paddingRight: "32px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              color: "#c9a84c",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            Insights
          </p>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              margin: "0 0 24px 0",
            }}
          >
            Patterns from governed wealth.
          </h1>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Quiet. Coordinated. Enduring. These are not tips, tactics, or
            market opinions. They are observations for those ready to govern
            well.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "32px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "8px 20px",
                border:
                  activeCategory === cat
                    ? "1px solid #c9a84c"
                    : "1px solid rgba(255,255,255,0.1)",
                color: activeCategory === cat ? "#c9a84c" : "#6b7f74",
                backgroundColor:
                  activeCategory === cat
                    ? "rgba(201, 168, 76, 0.08)"
                    : "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "72px 32px 100px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            {filtered.map((article) => (
              <article
                key={article.href}
                style={{
                  backgroundColor: "#05120e",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "10px",
                      color: "#c9a84c",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "11px",
                      color: "#4a5e52",
                    }}
                  >
                    {article.readTime}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#f0ebe0",
                    lineHeight: "1.3",
                    margin: "0 0 16px 0",
                    letterSpacing: "-0.01em",
                    flex: 1,
                  }}
                >
                  <Link
                    href={article.href}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "14px",
                    color: "#7a9083",
                    lineHeight: "1.65",
                    margin: "0 0 12px 0",
                  }}
                >
                  {article.excerpt}
                </p>
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "11px",
                    color: "#4a5e52",
                    margin: "0 0 20px 0",
                  }}
                >
                  {article.date}
                </p>
                <Link
                  href={article.href}
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "12px",
                    color: "#c9a84c",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
                    paddingBottom: "2px",
                    display: "inline-block",
                  }}
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "13px",
              color: "#4a5e52",
              textAlign: "center",
            }}
          >
            Showing {filtered.length} of {articles.length} articles
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
