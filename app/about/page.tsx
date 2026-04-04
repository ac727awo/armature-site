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
          backgroundColor: "#ffffff",
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
            Built for the phase<br />that comes after success.
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
                It&apos;s the point where earning more no longer creates clarity. Where adding another advisor doesn&apos;t reduce complexity. It adds to it.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                For many accomplished professionals, wealth is technically &quot;handled.&quot; Yet it still requires coordination, still demands attention, still sits uneasily without a governing structure.
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
      <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(28,56,40,0.08)" }}>
        <div className="lion-section">
          <div style={{ padding: "80px 60px 80px 32px", maxWidth: "600px", marginLeft: "auto" }}>
            <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 24px 0" }}>Why Armature Exists</p>
            <h2 style={{ fontFamily: HEADING, fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.2", margin: "0 0 28px 0" }}>
              The coordination gap is structural. Not personal.
            </h2>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
              Every advisor in your ecosystem is likely competent. The problem is that none of them can see what the others are doing. Decisions get made in isolation. Risk accumulates in the gaps between relationships.
            </p>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
              Armature was built to close that gap. One governance layer that holds the full picture, coordinates across every advisor and entity, and gives you a single line of sight into your entire financial life.
            </p>
            <p style={{ fontFamily: BODY, fontSize: "16px", color: "#2e4e3a", lineHeight: "1.75", fontStyle: "italic", margin: 0 }}>
              The system carries the complexity. You carry the authority.
            </p>
          </div>
          <div className="lion-image" />
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section
        style={{
          backgroundColor: "#f5f0eb",
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
            Armature designs and maintains a wealth operating system. One that brings advisors, assets, decisions, and oversight into a coherent structure.
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

      {/* LIVED EXPERIENCE — editorial column */}
      <section style={{ backgroundColor: "#0f2218", padding: "120px 32px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 48px 0", textAlign: "center" }}>
            Lived Experience
          </p>

          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: "500",
              color: "#f5f0eb",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            Not theory. Not inherited models.
          </h2>
          <p
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "500",
              color: "#b8913a",
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
              fontStyle: "italic",
              margin: "0 0 64px 0",
              textAlign: "center",
            }}
          >
            This was built from the inside.
          </p>

          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#8aab96", lineHeight: "1.85", margin: "0 0 28px 0" }}>
            Armature was built inside systems where governance failures had real consequences. Healthcare. Where poor handoffs created risk. Where missing protocols led to sentinel events. Where the people doing the work were exposed by the structures meant to support them.
          </p>

          <p
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: "500",
              color: "#c8d8cc",
              lineHeight: "1.4",
              fontStyle: "italic",
              margin: "0 0 28px 0",
              padding: "20px 0",
              borderTop: "1px solid rgba(184,145,58,0.3)",
              borderBottom: "1px solid rgba(184,145,58,0.3)",
            }}
          >
            Real failure. Real risk. Real cost.
          </p>

          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#8aab96", lineHeight: "1.85", margin: "0 0 28px 0" }}>
            The pattern was always the same: fragmented coordination, unclear decision rights, no single point of oversight. That pattern does not stay in healthcare. It follows every professional whose success has outgrown the systems meant to hold it.
          </p>

          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#8aab96", lineHeight: "1.85", margin: "0 0 48px 0" }}>
            There is a point where traditional wealth management stops being sufficient. Decisions interact with each other. Risk lives between domains. Behavior matters as much as math. Oversight becomes the hidden cost.
          </p>

          <p
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: "500",
              color: "#f5f0eb",
              lineHeight: "1.4",
              margin: "0 0 48px 0",
              textAlign: "center",
            }}
          >
            Deliberate, not reactive.<br />Structured, not rushed.<br />Long-horizon, not quarterly.
          </p>

          <p style={{ fontFamily: BODY, fontSize: "16px", color: "#8aab96", lineHeight: "1.85", margin: "0 0 48px 0" }}>
            Wealth works best when every asset has a defined role, every decision fits into a broader framework, and oversight is designed. Not improvised.
          </p>

          <div style={{ borderLeft: "2px solid #b8913a", paddingLeft: "24px", margin: "0 0 16px 0" }}>
            <p style={{ fontFamily: BODY, fontSize: "15px", color: "#c8d8cc", fontStyle: "italic", lineHeight: "1.7", margin: 0 }}>
              &quot;This feels cleaner than what I had before.&quot;
            </p>
          </div>
          <div style={{ borderLeft: "2px solid #b8913a", paddingLeft: "24px", margin: "0 0 16px 0" }}>
            <p style={{ fontFamily: BODY, fontSize: "15px", color: "#c8d8cc", fontStyle: "italic", lineHeight: "1.7", margin: 0 }}>
              &quot;I spend less time thinking about money.&quot;
            </p>
          </div>
          <div style={{ borderLeft: "2px solid #b8913a", paddingLeft: "24px", margin: "0 0 48px 0" }}>
            <p style={{ fontFamily: BODY, fontSize: "15px", color: "#c8d8cc", fontStyle: "italic", lineHeight: "1.7", margin: 0 }}>
              &quot;Decisions don&apos;t stack up the way they used to.&quot;
            </p>
          </div>

          <p
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: "500",
              color: "#b8913a",
              lineHeight: "1.5",
              fontStyle: "italic",
              margin: 0,
              textAlign: "center",
            }}
          >
            Move deliberately. Protect what matters. Never lose signal.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
