import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export async function generateMetadata() {
  const content = getContent<{
    meta: { title: string; description: string };
  }>("process");
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function Process() {
  const content = getContent<{
    meta: { title: string; description: string };
    hero: { eyebrow: string; heading: string };
    intro: { body1: string; body2: string };
    phases: Array<{
      number: string;
      title: string;
      body: string;
      outcome: string;
    }>;
    closing: { heading: string; body: string };
  }>("process");

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
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            {content.intro.body2}
          </p>
        </div>
      </section>

      {/* PHASES */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {content.phases.map((phase, i) => (
            <div
              key={phase.number}
              className="grid-phase"
              style={{
                marginBottom: i < content.phases.length - 1 ? "80px" : 0,
                paddingBottom: i < content.phases.length - 1 ? "80px" : 0,
                borderBottom:
                  i < content.phases.length - 1
                    ? "1px solid rgba(28, 56, 40, 0.08)"
                    : "none",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: HEADING,
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "rgba(184,145,58,0.4)",
                    letterSpacing: "-0.02em",
                    lineHeight: "1",
                  }}
                >
                  {phase.number}
                </span>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: HEADING,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: "500",
                    color: "#1c3828",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.2",
                    margin: "0 0 20px 0",
                  }}
                >
                  {phase.title}
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
                  {phase.body}
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "15px",
                    color: "#2e4e3a",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {phase.outcome}
                </p>
              </div>
            </div>
          ))}
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
  (ßB€°(€€€€€€€€€€€€€õô(€€€€€€€€€€€€ø(€€€€€€€€€€€€€í½¹Ñ•¹Ğ¹±½Í¥¹œ¹¡•…‘¥¹ô(€€€€€€€€€€€€ğ½ Èø(€€€€€€€€€€€€ñÀ(€€€€€€€€€€€€€ÍÑå±”õíì(€€€€€€€€€€€€€€€™½¹Ñ…µ¥±äè	=d°(€€€€€€€€€€€€€€€™½¹ÑM¥é”è€ˆÄÙÁàˆ°(€€€€€€€€€€€€€€€½±½Èè€ˆŒÑ„ØÄÔÔˆ°(€€€€€€€€€€€€€€€±¥¹•!•¥¡Ğè€ˆÄ¸ÜÔˆ°(€€€€€€€€€€€€€€€µ…É¥¸è€À°(€€€€€€€€€€€€€õô(€€€€€€€€€€€€ø(€€€€€€€€€€€€€í½¹Ñ•¹Ğ¹±½Í¥¹œ¹‰½‘åô(€€€€€€€€€€€€ğ½Àø(€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€€€€ñQM•Ñ¥½¸€¼ø(€€€€ğ¼ø(€€<£}
