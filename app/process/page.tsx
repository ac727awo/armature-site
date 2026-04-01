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
          backgroundColor: "#f5f0eb",
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
          {data.hero.heading}
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
      <section style={{ backgroundColor: "#ede8e0", padding: "80px 32px" }}>
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

      {/* CLOSING */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "80px 32px" }}>
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
            {data.closing.heading}
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
