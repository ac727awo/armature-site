import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', serif";
const BODY = "'Archivo', sans-serif";

export const metadata = {
  title: "Our Process | Armature Wealth Office",
  description: "A five-phase engagement designed to bring order to complexity.",
};

export default async function Process() {
  const data = await getContent("process");

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "140px 32px 80px",
          textAlign: "center" as const,
        }}
      >
        <p
          style={{
            fontFamily: BODY,
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase" as const,
            color: "#b8913a",
            marginBottom: "20px",
          }}
        >
          {data.hero.eyebrow}
        </p>
        <h1
          className="process-hero-heading"
          style={{
            fontFamily: HEADING,
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: "400",
            color: "#1c3828",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.15",
          }}
        >
          Designed around your life.
          <br className="process-hero-break" />
          Not sold into it.
        </h1>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "0 32px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" as const }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
              marginBottom: "16px",
            }}
          >
            {data.intro.body1}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
            }}
          >
            {data.intro.body2}
          </p>
        </div>
      </section>

      {/* PHASES */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          {data.phases.map(
            (
              phase: { number: string; title: string; body: string; outcome: string },
              i: number
            ) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "32px",
                  marginBottom: i < data.phases.length - 1 ? "56px" : "0",
                  flexWrap: "wrap" as const,
                }}
              >
                <div style={{ minWidth: "60px" }}>
                  <span
                    style={{
                      fontFamily: HEADING,
                      fontSize: "32px",
                      color: "#b8913a",
                      fontWeight: "400",
                      borderBottom: "2px solid #b8913a",
                      paddingBottom: "6px",
                      display: "inline-block",
                    }}
                  >
                    {phase.number}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <h3
                    style={{
                      fontFamily: HEADING,
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      fontWeight: "400",
                      color: "#1c3828",
                      marginBottom: "12px",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#4a6155",
                      marginBottom: "12px",
                    }}
                  >
                    {phase.body}
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "14px",
                      color: "#6a8070",
                      fontStyle: "italic",
                    }}
                  >
                    {phase.outcome}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section style={{ backgroundColor: "#0f2218", padding: "100px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              color: "#b8913a",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              fontWeight: "600",
              margin: "0 0 24px 0",
              textAlign: "center" as const,
            }}
          >
            What You Receive
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#f5f0eb",
              textAlign: "center" as const,
              marginBottom: "16px",
              lineHeight: "1.3",
            }}
          >
            A governance system built to your specifications.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "15px",
              color: "#8aab96",
              lineHeight: "1.7",
              textAlign: "center" as const,
              marginBottom: "48px",
              maxWidth: "640px",
              margin: "0 auto 48px auto",
            }}
          >
            Every engagement produces a living system, not a static plan. The scope reflects your complexity. The structure reflects how you actually want to operate.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "48px",
            }}
            className="receive-grid"
          >
            {[
              "Unified capital map across all entities and accounts",
              "Decision rights framework defining who acts on what",
              "Governance checklist spanning 150+ integration points",
              "Quarterly governance reviews with structured reporting",
              "Continuity architecture that does not depend on any single relationship",
              "Escalation and reporting cadence replacing ad hoc updates",
              "Estate and succession alignment verified against all active structures",
              "Risk and protection audit across insurance, liability, and entity exposure",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                >
                  <circle cx="9" cy="9" r="8.5" stroke="#b8913a" strokeWidth="1" fill="none" />
                  <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#b8913a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#c8d8cc",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "14px",
              color: "#6a8070",
              lineHeight: "1.7",
              fontStyle: "italic" as const,
              textAlign: "center" as const,
              margin: 0,
            }}
          >
            This is the system. Not a deliverable you receive once, but infrastructure that operates continuously on your behalf.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "80px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              color: "#b8913a",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              fontWeight: "600",
              margin: "0 0 24px 0",
              textAlign: "center" as const,
            }}
          >
            Timeline
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#1c3828",
              textAlign: "center" as const,
              marginBottom: "48px",
              lineHeight: "1.3",
            }}
          >
            Core architecture in weeks.<br />Full system within 90 days.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
            {[
              {
                period: "Days 1–14",
                title: "Diagnostic and capital mapping",
                detail: "A complete inventory of your financial landscape. Every entity, advisor, account, policy, and structure documented in a single view.",
              },
              {
                period: "Days 14–45",
                title: "Governance framework and decision architecture",
                detail: "Decision rights established. Reporting cadences set. Escalation protocols defined. The operating structure takes shape around your life, not around a model.",
              },
              {
                period: "Days 45–90",
                title: "Full system operational",
                detail: "All domains integrated. Quarterly review cycle initiated. Continuity plan in place. The system begins carrying the load.",
              },
              {
                period: "Ongoing",
                title: "Quarterly governance reviews and continuous coordination",
                detail: "Structured reviews across all domains. Real-time signal when conditions change. The system adapts as your life does.",
              },
            ].map((phase, i) => (
              <div
                key={phase.period}
                style={{
                  display: "flex",
                  gap: "32px",
                  paddingBottom: i < 3 ? "40px" : "0",
                  marginBottom: i < 3 ? "40px" : "0",
                  borderBottom: i < 3 ? "1px solid rgba(28, 56, 40, 0.12)" : "none",
                  flexWrap: "wrap" as const,
                }}
              >
                <div style={{ minWidth: "100px" }}>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "12px",
                      color: "#b8913a",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      fontWeight: "600",
                    }}
                  >
                    {phase.period}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <h3
                    style={{
                      fontFamily: HEADING,
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#1c3828",
                      marginBottom: "8px",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#4a6155",
                      margin: 0,
                    }}
                  >
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" as const }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#1c3828",
              marginBottom: "20px",
            }}
          >
            The system does the work.<br />You retain the authority.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
            }}
          >
            {data.closing.body}
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
