"use client";
import { useState } from "react";
import Link from "next/link";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

const articles = [
  {
    category: "Capital Efficiency",
    date: "March 2026",
    readTime: "2 min read",
    title: "Capital Efficiency Is a Condition, Not a Goal",
    excerpt: "Most discussions about capital efficiency start in the wrong place. Efficiency is not something you achieve — it is a condition you either maintain or let erode.",
    href: "/insights/capital-efficiency-is-a-condition",
    image: "/images/insights-capital-efficiency.jpg",
  },
  {
    category: "Tax Strategy",
    date: "February 2026",
    readTime: "2 min read",
    title: "Tax Drag Is a Structural Issue, Not a Tactical One",
    excerpt: "Most tax inefficiency does not come from bad advice. It comes from decisions made in isolation. Tax drag compounds quietly across years.",
    href: "/insights/tax-drag-is-a-structural-issue",
    image: "/images/insights-tax-drag.jpg",
  },
  {
    category: "Private Investments",
    date: "January 2026",
    readTime: "2 min read",
    title: "Private Investments Need Roles, Not Just Returns",
    excerpt: "Private investments fail more often from confusion than conviction. The issue is rarely access. It's clarity of purpose.",
    href: "/insights/private-investments-need-roles",
    image: "/images/insights-private-investments.jpg",
  },
  {
    category: "Capital Efficiency",
    date: "December 2025",
    readTime: "2 min read",
    title: "Designed Income Reduces Oversight",
    excerpt: "Income becomes problematic when pursued reactively. Designed well, it does the opposite. The real issue is whether income was structured to serve a role.",
    href: "/insights/designed-income-reduces-oversight",
    image: "/images/insights-designed-income.jpg",
  },
  {
    category: "Long-Term Planning",
    date: "November 2025",
    readTime: "2 min read",
    title: "Legacy Is a Decision System, Not an Event",
    excerpt: "Legacy is usually discussed too late, and too narrowly. In practice, legacy is built quietly, long before any formal transfer takes place.",
    href: "/insights/legacy-is-a-decision-system",
    image: "/images/insights-legacy.jpg",
  },
  {
    category: "Long-Term Planning",
    date: "October 2025",
    readTime: "2 min read",
    title: "The Case for Disciplined Diversification",
    excerpt: "Most portfolios are diversified. Very few are disciplined. The difference isn't the number of assets — it's whether diversification was designed to withstand different kinds of stress.",
    href: "/insights/disciplined-diversification",
    image: "/images/insights-diversification.jpg",
  },
];

const categories = ["All", "Capital Efficiency", "Tax Strategy", "Private Investments", "Long-Term Planning"];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#f5f0eb",
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "32px",
          paddingRight: "32px",
          borderBottom: "1px solid rgba(28, 56, 40, 0.1)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 24px 0" }}>
            Insights
          </p>
          <h1 style={{ fontFamily: HEADING, fontSize: "clamp(32px, 5vw, 58px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.1", margin: "0 0 24px 0" }}>
            Patterns from governed wealth.
          </h1>
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.7", margin: 0 }}>
            Quiet. Coordinated. Enduring. These are not tips, tactics, or market opinions. They are observations for those ready to govern well.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ backgroundColor: "#ede8e0", padding: "32px 32px", borderBottom: "1px solid rgba(28, 56, 40, 0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "8px 20px",
                border: activeCategory === cat ? "1.5px solid #1c3828" : "1px solid rgba(28, 56, 40, 0.2)",
                color: activeCategory === cat ? "#1c3828" : "#6a8070",
                backgroundColor: activeCategory === cat ? "rgba(28, 56, 40, 0.06)" : "transparent",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ backgroundColor: "#ede8e0", padding: "72px 32px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "48px" }}>
            {filtered.map((article) => (
              <article
                key={article.href}
                style={{
                  backgroundColor: "#f5f0eb",
                  border: "1px solid rgba(28, 56, 40, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Editorial image — flush to top, unique per article */}
                <Link href={article.href} style={{ display: "block", textDecoration: "none" }}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "3/2",
                      backgroundImage: `url(${article.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#c8d0c4",
                    }}
                  />
                </Link>

                {/* Card content */}
                <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span style={{ fontFamily: BODY, fontSize: "10px", color: "#b8913a", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: "600" }}>
                      {article.category}
                    </span>
                    <span style={{ fontFamily: BODY, fontSize: "11px", color: "#6a8070" }}>
                      {article.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: HEADING, fontSize: "18px", fontWeight: "500", color: "#1c3828", lineHeight: "1.3", margin: "0 0 14px 0", letterSpacing: "-0.01em", flex: 1 }}>
                    <Link href={article.href} style={{ color: "inherit", textDecoration: "none" }}>
                      {article.title}
                    </Link>
                  </h2>
                  <p style={{ fontFamily: BODY, fontSize: "14px", color: "#4a6155", lineHeight: "1.65", margin: "0 0 12px 0" }}>
                    {article.excerpt}
                  </p>
                  <p style={{ fontFamily: BODY, fontSize: "11px", color: "#6a8070", margin: "0 0 20px 0" }}>
                    {article.date}
                  </p>
                  <Link
                    href={article.href}
                    style={{
                      fontFamily: BODY,
                      fontSize: "12px",
                      color: "#1c3828",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      borderBottom: "1.5px solid #1c3828",
                      paddingBottom: "2px",
                      display: "inline-block",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontFamily: BODY, fontSize: "13px", color: "#6a8070", textAlign: "center" }}>
            Showing {filtered.length} of {articles.length} articles
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
