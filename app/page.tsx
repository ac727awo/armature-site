import Link from "next/link";
import { getContent } from "../lib/content";
import CTASection from "./components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export async function generateMetadata() {
  const data = getContent<{ meta: { title: string; description: string } }>("home");
  return { title: data.meta.title, description: data.meta.description };
}

export default function Home() {
  const c = getContent<Record<string, any>>("home");

  return (
    <>
      {/* HERO — stays dark green with vignette */}
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#1c3828",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${c.hero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 62% 50%, transparent 12%, rgba(15,34,24,0.65) 50%, rgba(10,26,16,0.95) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom, transparent, #f5f0eb)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 32px 120px",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "11px",
                color: "#b8913a",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: "600",
                marginBottom: "28px",
                margin: "0 0 28px 0",
              }}
            >
              {c.hero.eyebrow}
            </p>
            <h1
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: "500",
                color: "#f5f0eb",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                margin: "0 0 28px 0",
              }}
            >
              {c.hero.heading}
            </h1>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "19px",
                color: "#c8d8cc",
                lineHeight: "1.65",
                margin: "0 0 16px 0",
                maxWidth: "560px",
                fontWeight: "300",
              }}
            >
              For accomplished professionals whose success outpaced<br />the systems meant to govern it.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                color: "#8aab96",
                lineHeight: "1.65",
                margin: "0 0 52px 0",
                maxWidth: "500px",
              }}
            >
              {c.hero.qualifier}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href={c.hero.cta1Href}
                style={{
                  fontFamily: BODY,
                  fontSize: "13px",
                  color: "#1c3828",
                  backgroundColor: "#d4a84c",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                {c.hero.cta1Text}
              </Link>
              <Link
                href={c.hero.cta2Href}
                style={{
                  fontFamily: BODY,
                  fontSize: "13px",
                  color: "#f5f0eb",
                  border: "1px solid rgba(245, 240, 235, 0.4)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  display: "inline-block",
                }}
              >
                {c.hero.cta2Text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S MISSING — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 32px 0",
            }}
          >
            {c.whatsMissing.heading}
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "18px",
              color: "#2e4e3a",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
              fontWeight: "300",
            }}
          >
            {c.whatsMissing.body1}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
            }}
          >
            {c.whatsMissing.body2}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            {c.whatsMissing.body3}
          </p>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE ARMATURE — alt cream */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "4/5",
              backgroundColor: "#c8d0c4",
              backgroundImage: `url(${c.whyClients.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(135deg, transparent 60%, rgba(28,56,40,0.4) 100%)",
              }}
            />
          </div>
          <div>
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
              {c.whyClients.eyebrow}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 48px 0",
              }}
            >
              {c.whyClients.intro}
            </p>
            {c.whyClients.items.map((item: { title: string; body: string }) => (
              <div
                key={item.title}
                style={{
                  margin: "0 0 32px 0",
                  paddingLeft: "20px",
                  borderLeft: "2px solid #b8913a",
                }}
              >
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1c3828",
                    margin: "0 0 8px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#4a6155",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
            <p
              style={{
                fontFamily: BODY,
                fontSize: "14px",
                color: "#6a8070",
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "8px 0 0 0",
              }}
            >
              {c.whyClients.closing}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div>
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
                {c.services.eyebrow}
              </p>
              <h2
                style={{
                  fontFamily: HEADING,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: "500",
                  color: "#1c3828",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2",
                  margin: "0 0 28px 0",
                }}
              >
                {c.services.heading}
              </h2>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "16px",
                  color: "#4a6155",
                  lineHeight: "1.75",
                  margin: "0 0 24px 0",
                }}
              >
                {c.services.intro}
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "15px",
                  color: "#6a8070",
                  lineHeight: "1.75",
                  margin: "0 0 32px 0",
                }}
              >
                {c.services.subIntro}
              </p>
              {c.services.items.map((item: { action: string; object: string }) => (
                <div
                  key={item.action}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <span style={{ color: "#b8913a", fontSize: "14px", flexShrink: 0 }}>&#x25B8;</span>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "11px",
                      color: "#b8913a",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      minWidth: "64px",
                    }}
                  >
                    {item.action}
                  </span>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "15px",
                      color: "#2e4e3a",
                    }}
                  >
                    {item.object}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "14px",
                  color: "#6a8070",
                  lineHeight: "1.65",
                  fontStyle: "italic",
                  margin: "32px 0 40px 0",
                }}
              >
                {c.services.closing}
              </p>
              <Link
                href="/services"
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#1c3828",
                  border: "1.5px solid #1c3828",
                  padding: "12px 28px",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Explore Our Services
              </Link>
            </div>
            <div
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#c8d0c4",
                backgroundImage: `url(${c.services.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "32px",
                  background:
                    "linear-gradient(to top, rgba(28,56,40,0.75) 0%, transparent 60%)",
                }}
              >
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "13px",
                    color: "#c8d8cc",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {c.services.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — dark green bg, horizontal circled steps */}
      <section
        style={{
          backgroundColor: "#0f2218",
          padding: "120px 32px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
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
            {c.process.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "500",
              color: "#f5f0eb",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
            A system built around you,<br />not sold to you.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#8aab96",
              lineHeight: "1.75",
              margin: "0 auto 72px auto",
              maxWidth: "640px",
            }}
          >
            {c.process.intro}
          </p>

          {/* Steps row */}
          <div className="process-steps" style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
            {/* Connector line behind circles */}
            <div
              className="process-connector"
              style={{
                position: "absolute",
                top: "36px",
                left: "10%",
                right: "10%",
                height: "1px",
                backgroundColor: "#b8913a",
                opacity: 0.35,
              }}
            />
            {c.process.steps.map((step: string, i: number) => (
              <div
                key={step}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: "1.5px solid #b8913a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    backgroundColor: "#0f2218",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "14px",
                      color: "#b8913a",
                      fontWeight: "600",
                      letterSpacing: "0.05em",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "13px",
                    color: "#c8d8cc",
                    lineHeight: "1.6",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "64px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(184, 145, 58, 0.25)",
            }}
          >
            <p
              style={{
                fontFamily: HEADING,
                fontSize: "20px",
                fontWeight: "500",
                color: "#f5f0eb",
                lineHeight: "1.6",
                fontStyle: "italic",
                margin: "0 0 8px 0",
              }}
            >
              {c.process.closingLine1}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#8aab96",
                lineHeight: "1.6",
                fontStyle: "italic",
                margin: "0 0 40px 0",
              }}
            >
              {c.process.closingLine2}
            </p>
            <Link
              href="/process"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#f5f0eb",
                border: "1.5px solid rgba(245, 240, 235, 0.45)",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
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
              {c.about.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "500",
                color: "#1c3828",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              Built from lived experience,
              <br />
              not theory.
            </h2>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              {c.about.body1}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              {c.about.body2}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                color: "#b8913a",
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "0 0 40px 0",
              }}
            >
              {c.about.accent}
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#1c3828",
                border: "1.5px solid #1c3828",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Learn Our Story
            </Link>
          </div>
          <div
            style={{
              aspectRatio: "4/5",
              backgroundColor: "#c8d0c4",
              backgroundImage: `url(${c.about.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                left: "32px",
                backgroundColor: "rgba(245, 240, 235, 0.92)",
                border: "1px solid rgba(28, 56, 40, 0.2)",
                padding: "20px 24px",
                maxWidth: "220px",
              }}
            >
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "10px",
                  color: "#b8913a",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  margin: "0 0 6px 0",
                }}
              >
                Armature Philosophy
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#4a6155",
                  letterSpacing: "0.05em",
                  margin: 0,
                }}
              >
                Our guiding principle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW — alt cream */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "680px", marginBottom: "72px" }}>
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
              {c.insights.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "500",
                color: "#1c3828",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              What wealth starts to feel like<br />after the noise fades.
            </h2>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              {c.insights.intro}
            </p>
            {c.insights.teasers.map((item: string) => (
              <p
                key={item}
                style={{
                  fontFamily: BODY,
                  fontSize: "14px",
                  color: "#4a6155",
                  lineHeight: "1.65",
                  margin: "0 0 12px 0",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                }}
              >
                <span style={{ color: "#b8913a", fontSize: "8px", flexShrink: 0, position: "relative" as const, top: "-1px" }}>&#x25C6;</span>
                <span>{item}</span>
              </p>
            ))}
            <p
              style={{
                fontFamily: BODY,
                fontSize: "14px",
                color: "#6a8070",
                fontStyle: "italic",
                margin: "20px 0 0 0",
              }}
            >
              {c.insights.closing}
            </p>
          </div>

          <div
            className="insight-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            {(() => {
              const insightsData = getContent<{ articles: Array<{ slug: string; category: string; date: string; readTime: string; title: string; excerpt: string; image: string }> }>("insights");
              return insightsData.articles.slice(0, 3).map((article) => (
                <article
                  key={article.slug}
                  style={{
                    backgroundColor: "#f5f0eb",
                    border: "1px solid rgba(28, 56, 40, 0.12)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Link href={`/insights/${article.slug}`} style={{ display: "block", textDecoration: "none" }}>
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
                  <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
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
                        {article.title.includes(",") ? (<>{article.title.split(",")[0]},<br />{article.title.split(",").slice(1).join(",")}</>) : article.title}
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
              ));
            })()}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/insights"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#1c3828",
                border: "1.5px solid #1c3828",
                padding: "12px 32px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT — lion watermark bottom-right */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Lion watermark — bottom-right corner */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-40px",
            width: "520px",
            height: "520px",
            opacity: 0.17,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: "url(/images/lion.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            filter: "brightness(0) saturate(100%) invert(72%) sepia(48%) saturate(527%) hue-rotate(3deg) brightness(103%)",
          }}
        />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            {c.closingStatement.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 24px 0",
            }}
          >
            The system should carry more.<br />You should carry less.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 40px 0",
              maxWidth: "540px",
            }}
          >
            {c.closingStatement.body}
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              color: "#1c3828",
              border: "1.5px solid #1c3828",
              padding: "12px 28px",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Begin with a Conversation
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
