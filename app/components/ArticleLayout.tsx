import Link from "next/link";
import CTASection from "./CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

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
          backgroundColor: "#f5f0eb",
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "32px",
          paddingRight: "32px",
          borderBottom: "1px solid rgba(28, 56, 40, 0.1)",
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
                fontFamily: BODY,
                fontSize: "10px",
                color: "#b8913a",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              {category}
            </span>
            <span style={{ color: "rgba(184,145,58,0.4)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: BODY,
                fontSize: "11px",
                color: "#6a8070",
              }}
            >
              {readTime}
            </span>
          </div>
          <h1
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              margin: "0 0 20px 0",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "13px",
              color: "#6a8070",
              margin: 0,
            }}
          >
            {date}
          </p>
        </div>
      </section>

      <article
        style={{
          backgroundColor: "#f5f0eb",
          padding: "80px 32px 100px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {children}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(28, 56, 40, 0.12)",
            }}
          >
            <Link
              href="/insights"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#4a6155",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: "500",
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
