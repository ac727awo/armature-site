import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export const metadata = {
  title: "Our Process | Armature Wealth Partners",
  description:
    "A system built around you, maintained with intention. Four phases of wealth governance.",
};

const phases = [
  {
    number: "01",
    title: "Establish a complete picture",
    body: "We begin by mapping the full scope of your financial landscape — not to evaluate decisions, but to see the whole clearly.",
    items: [
      "assets, accounts, and obligations",
      "entities, trusts, and ownership structures",
      "advisor relationships and decision authority",
      "strategies already in motion",
    ],
    closing: "No assumptions. No prescriptions. Just a clear view of what exists, and how responsibility is currently distributed.",
  },
  {
    number: "02",
    title: "Surface where structure hasn't kept pace",
    body: "Most wealth is under-optimized. At this stage, inefficiency rarely comes from poor decisions. It emerges from:",
    items: [
      "strategies applied out of sequence",
      "structures designed in isolation",
      "overlapping or unclear decision authority",
      "complexity that accumulated incidentally",
    ],
    closing: "Nothing needs to be \"wrong\" for this phase to matter. This step clarifies where coordination would make the most difference.",
  },
  {
    number: "03",
    title: "Design the operating framework",
    body: "Capital needs structure before strategy. We design a governing framework that clarifies:",
    items: [
      "the role of each pool of capital",
      "priorities across growth, preservation, and liquidity",
      "how tax, investment, and distribution decisions interact",
      "cadence for review and adjustment",
    ],
    closing: "The objective is coherence. When the framework is clear, decisions become easier and fewer.",
  },
  {
    number: "04",
    title: "Operate the system alongside you",
    body: "You retain authority. The system carries the load. Once the framework is installed, we operate as the integrating layer — positioned to:",
    items: [
      "maintain context across decisions",
      "ensure strategies remain consistent with intent",
      "prevent drift as conditions change",
      "reduce the need for constant oversight",
    ],
    closing: "Final authority always stays with you. The difference is how much attention it requires.",
  },
  {
    number: "05",
    title: "Maintain durability over time",
    body: "Well-designed systems should become quieter, not busier. This is not a transactional engagement. It evolves as:",
    items: [
      "life circumstances evolve",
      "markets change",
      "milestones are achieved",
      "priorities shift",
    ],
    closing: "The goal is not activity. It is durability. Stability without stagnation. Clarity without constant input.",
  },
];

export default function Process() {
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
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 24px 0" }}>
            Our Process
          </p>
          <h1 style={{ fontFamily: HEADING, fontSize: "clamp(32px, 5vw, 58px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.1", margin: 0 }}>
            A system built around you, maintained with intention.
          </h1>
        </div>
      </section>

      {/* PHASES */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "40px",
                marginBottom: i < phases.length - 1 ? "80px" : 0,
                paddingBottom: i < phases.length - 1 ? "80px" : 0,
                borderBottom: i < phases.length - 1 ? "1px solid rgba(28, 56, 40, 0.08)" : "none",
              }}
            >
              <div>
                <span style={{ fontFamily: HEADING, fontSize: "32px", fontWeight: "500", color: "rgba(184,145,58,0.4)", letterSpacing: "-0.02em", lineHeight: "1" }}>
                  {phase.number}
                </span>
              </div>
              <div>
                <h2 style={{ fontFamily: HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.01em", lineHeight: "1.2", margin: "0 0 20px 0" }}>
                  {phase.title}
                </h2>
                <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                  {phase.body}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                  {phase.items.map((item) => (
                    <li key={item} style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.65", paddingLeft: "20px", borderLeft: "2px solid #b8913a", margin: "0 0 10px 0" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: BODY, fontSize: "15px", color: "#2e4e3a", fontStyle: "italic", margin: 0 }}>
                  {phase.closing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT BEGINS */}
      <section style={{ backgroundColor: "#ede8e0", padding: "100px 32px", borderTop: "1px solid rgba(28, 56, 40, 0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
            <div>
              <h2 style={{ fontFamily: HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.01em", lineHeight: "1.2", margin: "0 0 20px 0" }}>
                How it begins
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 16px 0" }}>
                Everything starts with a diagnostic conversation. No pitch. No pressure.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 16px 0" }}>
                We listen for how complexity is forming, where structure is lagging, and whether a governing system belongs in this phase of your life.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#6a8070", lineHeight: "1.75", fontStyle: "italic", margin: 0 }}>
                If it&apos;s not time yet, that will be clear. If it is, the next step will be obvious.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.01em", lineHeight: "1.2", margin: "0 0 20px 0" }}>
                What clients can expect
              </h2>
              {[
                "a diagnostic conversation, not a sales meeting",
                "pattern recognition before prescription",
                "coordination that lowers cognitive burden",
                "a system designed to evolve with life, not fight it",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <span style={{ color: "#b8913a", flexShrink: 0, paddingTop: "2px" }}>—</span>
                  <span style={{ fontFamily: BODY, fontSize: "15px", color: "#2e4e3a", lineHeight: "1.6" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
