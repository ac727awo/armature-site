import { getContent } from "../../lib/content";
import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', serif";
const BODY = "'Archivo', sans-serif";

export const metadata = {
  title: "Services | Armature Wealth Office",
  description: "Six core domains of integrated wealth governance.",
};

export default async function Services() {
  const data = await getContent("services");

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
          A system,<br />not a stack of services.
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
            Traditional advisory models separate your financial life into silos. Investments here, tax there, estate somewhere else. Each advisor operates within their domain, correctly.<br /><br />What no one owns is the interaction between them.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
            }}
          >
            Armature replaces that fragmentation with a wealth operating system.<br />A single governing structure that holds everything in view, coordinates across domains,<br />and reduces the number of decisions that require your direct involvement.
          </p>
        </div>
      </section>

      {/* CORE DOMAINS */}
      <section style={{ backgroundColor: "#ede8e0", padding: "80px 32px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#1c3828",
              textAlign: "center" as const,
              marginBottom: "56px",
            }}
          >
            {data.coreDomains.heading}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {data.coreDomains.domains.map(
              (domain: { title: string; body: string }, i: number) => (
                <div key={i}>
                  <h3
                    style={{
                      fontFamily: HEADING,
                      fontSize: "clamp(15px, 1.6vw, 19px)",
                      fontWeight: "400",
                      color: "#1c3828",
                      marginBottom: "10px",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#4a6155",
                    }}
                  >
                    {domain.body}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section style={{ backgroundColor: "#0f2218", padding: "80px 32px" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            gap: "48px",
            alignItems: "center",
            flexWrap: "wrap" as const,
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: "400",
                color: "#f5f0eb",
                marginBottom: "20px",
              }}
            >
              {data.integration.heading}
            </h2>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#8aab96",
                marginBottom: "16px",
              }}
            >
              {data.integration.body1}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#8aab96",
                marginBottom: "16px",
              }}
            >
              {data.integration.body2}
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "14px",
                fontStyle: "italic",
                color: "#c8d8cc",
              }}
            >
              {data.integration.closing}
            </p>
          </div>
          {data.integration.image && (
            <div style={{ flex: 1, minWidth: "280px", aspectRatio: "4/3", overflow: "hidden", borderRadius: "8px", border: "1px solid rgba(184, 145, 58, 0.2)" }}>
              <img
                src={data.integration.image}
                alt="Integration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* COST OF INACTION */}
      <section
        style={{
          backgroundColor: "#f5f0eb",
          padding: "100px 32px",
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
              textAlign: "center" as const,
            }}
          >
            The Cost of Waiting
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
            The gap between advisors is where value quietly leaves.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginBottom: "48px",
            }}
            className="inaction-grid"
          >
            {[
              {
                label: "Tax and investment misalignment",
                detail: "Strategies designed independently often work against each other. Harvesting losses in one account while triggering gains in another. Rebalancing without considering the estate plan.",
              },
              {
                label: "Duplicated or conflicting coverage",
                detail: "Insurance reviewed by one advisor, estate structured by another. Gaps and overlaps go unnoticed until they matter most.",
              },
              {
                label: "Missed strategic windows",
                detail: "Roth conversions, entity restructuring, gifting strategies, charitable planning. These have timing dependencies no single advisor tracks.",
              },
              {
                label: "Drift without signal",
                detail: "Allocations shift. Documents go stale. Beneficiary designations contradict estate plans. Without governance, these compound silently at 0.5% to 1.2% annually.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderLeft: "2px solid rgba(184, 145, 58, 0.5)",
                  paddingLeft: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1c3828",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#4a6155",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "15px",
              color: "#2e4e3a",
              lineHeight: "1.7",
              fontStyle: "italic",
              textAlign: "center" as const,
              margin: 0,
            }}
          >
            These are not hypothetical risks. They are patterns observed across every family we have assessed. Governance does not just protect value. It recovers what was already being lost.
          </p>
        </div>
      </section>

      {/* A NOTE ON FIT */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "100px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
            A Note on Fit
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#1c3828",
              textAlign: "center" as const,
              marginBottom: "32px",
              lineHeight: "1.3",
            }}
          >
            This is not for everyone.<br />That is by design.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
              marginBottom: "20px",
            }}
          >
            If you are still in accumulation mode and growing aggressively, a private wealth office is premature. If your financial life is simple and well-handled by a single advisor, you do not need this layer yet. If you prefer to manage everything yourself and that system is working, we respect that entirely.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#4a6155",
              marginBottom: "20px",
            }}
          >
            Armature is built for the professional whose success has created complexity that has outgrown informal coordination. Multiple entities, multiple advisors, multiple priorities — and a growing awareness that no one is holding the full picture together.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#2e4e3a",
              fontStyle: "italic",
              textAlign: "center" as const,
              margin: 0,
            }}
          >
            If that describes where you are, this was built for you.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
