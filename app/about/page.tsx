import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export const metadata = {
  title: "About Us | Armature Wealth Office",
  description:
    "Built for the phase that comes after success. Armature exists for a specific moment in a professional's life.",
};

export default function About() {
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
            About Armature
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
            Built for the phase that comes after success.
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-2col" style={{ alignItems: "start" }}>
            <div>
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
                Armature exists for a specific moment in a professional&apos;s life.
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                It&apos;s the point where earning more no longer creates clarity. Where adding another advisor doesn&apos;t reduce complexity — it adds to it.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                For many accomplished professionals, wealth is technically &quot;handled&quot; — yet still requires coordination, still demands attention, still sits uneasily without a governing structure.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                That is not a failure of discipline or intelligence. It is a signal that the system has not kept pace with the complexity.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#2e4e3a", lineHeight: "1.75", margin: 0 }}>
                Armature was built to address that phase.
              </p>
            </div>

            {/* Image */}
            <div
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#c8d0c4",
                backgroundImage: "url(/images/physician.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* LION SECTION */}
      <section style={{ backgroundColor: "#f5f0eb", borderTop: "1px solid rgba(28,56,40,0.08)" }}>
        <div className="lion-section">
          <div style={{ padding: "80px 60px 80px 32px", maxWidth: "600px", marginLeft: "auto" }}>
            <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 24px 0" }}>Armature Wealth Office</p>
            <h2 style={{ fontFamily: HEADING, fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.2", margin: "0 0 28px 0" }}>
              What&apos;s missing is not intelligence or effort.
            </h2>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
              It&apos;s a wealth operating system that brings everything into one clear view, so you can author capital deliberately, rather than react to it.
            </p>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
              As complexity compounds, communication fragments, and infrastructure quietly lags behind. So do trade-offs, dependencies, and second-order effects.
            </p>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#2e4e3a", lineHeight: "1.75", fontStyle: "italic", margin: 0 }}>
              If your financial life still feels simple, it may not be time yet. If it feels harder to see clearly, that&apos;s not a problem, it&apos;s a signal.
            </p>
          </div>
          <div className="lion-image" />
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
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
            What we actually do
          </h2>
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
            We do not sell products. We do not manage portfolios in isolation. We do not optimize tactics one at a time.
          </p>
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
            Armature designs and maintains a wealth operating system — one that brings advisors, assets, decisions, and oversight into a coherent structure.
          </p>
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 60px 0" }}>
            This isn&apos;t about building something flashy. It is clarity, durability, and reduced dependence on your constant attention.
          </p>

          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 24px 0",
            }}
          >
            Who this is for
          </h2>
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 24px 0" }}>
            Our clients are already successful. They are physicians, founders, and professionals who:
          </p>
          {[
            "followed the rules",
            "built income responsibly",
            "accumulated across accounts, entities, and strategies",
            "sense there is a cleaner way to operate at this level",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
              <span style={{ color: "#b8913a", fontSize: "14px", paddingTop: "2px", flexShrink: 0 }}>—</span>
              <span style={{ fontFamily: BODY, fontSize: "16px", color: "#2e4e3a", lineHeight: "1.5" }}>{item}</span>
            </div>
          ))}
          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", fontStyle: "italic", margin: "32px 0 0 0" }}>
            They are not looking for more ideas. They are looking for a better way of seeing the whole.
          </p>
        </div>
      </section>

      {/* LIVED EXPERIENCE */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-2col" style={{ alignItems: "start" }}>
            <div>
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
                Lived experience, not theory.
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 40px 0" }}>
                Armature was built by a healthcare professional trained in high-stakes decision-making under uncertainty. That background shaped everything: how we assess risk, how we design structure, how we hold complexity without losing signal.
              </p>

              <h3 style={{ fontFamily: HEADING, fontSize: "18px", fontWeight: "500", color: "#1c3828", margin: "0 0 16px 0", letterSpacing: "-0.01em" }}>
                How we think
              </h3>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                There is a point where traditional &quot;wealth management&quot; stops being sufficient. At that stage:
              </p>
              {[
                "decisions interact with each other",
                "risk lives between domains",
                "behavior matters as much as math",
                "oversight becomes the hidden cost",
              ].map((item) => (
                <p key={item} style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.65", paddingLeft: "16px", borderLeft: "2px solid #b8913a", margin: "0 0 10px 0" }}>
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h3 style={{ fontFamily: HEADING, fontSize: "18px", fontWeight: "500", color: "#1c3828", margin: "0 0 16px 0", letterSpacing: "-0.01em" }}>
                How we work
              </h3>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                That experience shaped everything: deliberate, not reactive. Structured, not rushed. Long-horizon, not quarterly.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 40px 0" }}>
                We believe wealth works best when every asset has a defined role, every decision fits into a broader framework, and oversight is designed — not improvised.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#b8913a", fontStyle: "italic", lineHeight: "1.65", margin: "0 0 48px 0" }}>
                We co-invest. We move carefully. We design systems meant to hold.
              </p>

              <h3 style={{ fontFamily: HEADING, fontSize: "18px", fontWeight: "500", color: "#1c3828", margin: "0 0 24px 0", letterSpacing: "-0.01em" }}>
                What clients notice
              </h3>
              {[
                "This feels cleaner than what I had before.",
                "I spend less time thinking about money.",
                "Decisions don't stack up the way they used to.",
              ].map((quote) => (
                <div key={quote} style={{ margin: "0 0 16px 0", padding: "20px 24px", borderLeft: "2px solid #b8913a", backgroundColor: "rgba(184,145,58,0.06)" }}>
                  <p style={{ fontFamily: BODY, fontSize: "15px", color: "#2e4e3a", fontStyle: "italic", lineHeight: "1.6", margin: 0 }}>
                    &quot;{quote}&quot;
                  </p>
                </div>
              ))}
              <p style={{ fontFamily: BODY, fontSize: "14px", color: "#6a8070", lineHeight: "1.65", margin: "24px 0 0 0" }}>
                Nothing dramatic changes day one. What changes is how the system carries forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
