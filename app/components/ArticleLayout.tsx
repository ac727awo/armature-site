import Link from "next/link";
import CTASection from "./CTASection";

interface ArticleLayoutProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  category,
  date,
  readTime,
  title,
  children,
}: ArticleLayoutProps) {
  return (
    <>
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
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "10px",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {category}
            </span>
            <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "10px" }}>
              ·
            </span>
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "11px",
                color: "#4a5e52",
              }}
            >
              {readTime}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              margin: "0 0 20px 0",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "13px",
              color: "#4a5e52",
              margin: 0,
            }}
          >
            {date}
          </p>
        </div>
      </section>

      <article
        style={{
          backgroundColor: "#05120e",
          padding: "80px 32px 100px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {children}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Link
              href="/insights"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#9aab9f",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← Back to Insights
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
