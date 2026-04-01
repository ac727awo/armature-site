import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export async function generateMetadata() {
  const content = getContent<{
    meta: { title: string; description: string };
  }>("about");
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function About() {
  const content = getContent<{
    meta: { title: string; description: string };
    hero: { eyebrow: string; heading: string };
    origin: { heading: string; paragraphs: string[] };
    philosophy: { heading: string; items: Array<{ title: string; body: string }> };
    clientProfile: {
      heading: string;
      intro: string;
      signals: string[];
      closing: string;
    };
    closing: { heading: string; body: string };
  }>("about");

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
            {content.hero.eyebrow}
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
            {content.hero.heading}
          </h1>
        </div>
      </section>

      {/* ORIGIN SECTION */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            {content.origin.heading}
          </h2>
          {content.origin.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: index < content.origin.paragraphs.length - 1 ? "0 0 20px 0" : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "100px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 60px 0",
            }}
          >
            {content.philosophy.heading}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {content.philosophy.items.map((item) => (
              <div key={item.title}>
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1c3828",
                    margin: "0 0 12px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "15px",
                    color: "#4a6155",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </diw>
      </section>

      {/* CLIENT PROFILE SECTION */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            {content.clientProfile.heading}
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
            {content.clientProfile.intro}
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
            You may be a fit if:
          </p>
          {content.clientProfile.signals.map((signal) => (
            <div
              key={signal}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  color: "#b8913a",
                  fontSize: "14px",
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                —
              </span>
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "16px",
                  color: "#2e4e3a",
                  lineHeight: "1.5",
                }}
              >
                {signal}
              </span>
            </div>
          ))}
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              fontStyle: "italic",
              margin: "32px 0 0 0",
            }}
          >
            {content.clientProfile.closing}
          </p>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "100px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            {content.closing.heading}
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            {content.closing.body}
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
