import Link from "next/link";
import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

interface Article {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
}

interface InsightsData {
  meta: { title: string; description: string };
  hero: { eyebrow: string; heading: string };
  intro: string;
  articles: Article[];
}

export async function generateMetadata() {
  const data = getContent<InsightsData>("insights");
  return { title: data.meta.title, description: data.meta.description };
}

export default function Insights() {
  const c = getContent<InsightsData>("insights");

  return (
    <>
      {/* HERO */}
      <section
        className="hero-pad"
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
          <p
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              color: "#b8913a",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: "600",
              margin: "0 0 24px 0",
            }}
          >
            {c.hero.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            {c.hero.heading}
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "80px 32px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "17px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            We write for those who have already succeeded — and are ready for structure, clarity,<br />and authorship over what comes next. These are not market commentaries. They are governance perspectives.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "40px 32px 120px" }}>
        <div
          className="insight-cards-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {c.articles.map((article) => (
            <article
              key={article.slug}
              style={{
                backgroundColor: "#ede8e0",
                border: "1px solid rgba(28, 56, 40, 0.12)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Link
                href={`/insights/${article.slug}`}
                style={{ display: "block", textDecoration: "none" }}
              >
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
              <div
                style={{
                  padding: "28px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  className="insight-card-meta"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "10px",
                      color: "#b8913a",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "11px",
                      color: "#6a8070",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {article.date}
                    <span style={{ color: "#b8913a" }}>·</span>
                    {article.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#1c3828",
                    lineHeight: "1.3",
                    margin: "0 0 14px 0",
                    letterSpacing: "-0.01em",
                    flex: 1,
                  }}
                >
                  <Link
                    href={`/insights/${article.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {article.title}
                  </Link>
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#4a6155",
                    lineHeight: "1.65",
                    margin: "0 0 24px 0",
                  }}
                >
                  {article.excerpt}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
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
      </section>

      <CTASection />
    </>
  );
}
