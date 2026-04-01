import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export async function generateMetadata() {
  const content = getContent<{
    meta: { title: string; description: string };
  }>("services");
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function Services() {
  const content = getContent<{
    meta: { title: string; description: string };
    hero: { eyebrow: string; heading: string };
    intro: { body1: string; body2: string };
    coreDomains: {
      heading: string;
      domains: Array<{ title: string; body: string }>;
    };
    integration: {
      heading: string;
      body1: string;
      body2: string;
      closing: string;
      image: string;
    };
  }>("services");

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
              margin: "0 0 28px 0",
            }}
          >
            {content.hero.heading}
          </h1>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "18px",
              color: "#4a6155",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {content.intro.body2}
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
            }}
          >
            {content.intro.body1}
          </p>
        </div>
      </section>

      {/* CORE DOMAINS */}
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
            {content.coreDomains.heading}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
            }}
          >
            {content.coreDomains.domains.map((domain) => (
              <div key={domain.title}>
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
                  {domain.title}
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
                  {domain.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION SECTION */}
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
            {content.integration.heading}
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
            }}
          >
            {content.integration.body1}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
            }}
          >
            {content.integration.body2}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#2e4e3a",
              lineHeight: "1.75",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {content.integration.closing}
          </p>
        </div>
      </section>

      <CTASection />
    </>
  (ßB€€€€€€€€€€í½¹Ñ•¹Ğ¹¥¹Ñ•É…Ñ¥½¸¹‰½‘äÉô(€€€€€€€€€€ğ½Àø(€€€€€€€€€€ñÀ(€€€€€€€€€€€ÍÑå±”õíì(€€€€€€€€€€€€€™½¹Ñ…µ¥±äè	=d°(€€€€€€€€€€€€€™½¹ÑM¥é”è€ˆÄÙÁàˆ°(€€€€€€€€€€€€€½±½Èè€ˆŒÉ”Ñ”Í„ˆ°(€€€€€€€€€€€€€±¥¹•!•¥¡Ğè€ˆÄ¸ÜÔˆ°(€€€€€€€€€€€€€™½¹ÑMÑå±”è€‰¥Ñ…±¥Œˆ°(€€€€€€€€€€€€€µ…É¥¸è€À°(€€€€€€€€€€€õô(€€€€€€€€€€ø(€€€€€€€€€€€í½¹Ñ•¹Ğ¹¥¹Ñ•É…Ñ¥½¸¹±½Í¥¹ô(€€€€€€€€€€ğ½Àø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€€ñQM•Ñ¥½¸€¼ø(€€€€ğ¼ø(€€<£}
