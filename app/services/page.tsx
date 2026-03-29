import CTASection from "../components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export const metadata = {
  title: "Services | Armature Wealth Partners",
  description:
    "Designed as a system. Operated as one. A wealth operating system for accomplished professionals.",
};

export default function Services() {
  const services = [
    {
      title: "Portfolio & Capital Oversight",
      body: "We oversee portfolios with an emphasis on role clarity and durability, not constant optimization.",
      items: [
        "defining what each pool of capital is for",
        "aligning risk with purpose",
        "considering liquidity and downside before allocation",
        "ensuring portfolios behave as intended across cycles",
      ],
      closing: "The objective is not activity. It is reliability.",
    },
    {
      title: "Income Design & Capital Efficiency",
      body: "As wealth matures, the question shifts. Not how fast can it grow, but how can it be preserved to support the life being built.",
      items: [
        "structure capital to generate reliable, tax-aware cash flow",
        "reduce reliance on earned income over time",
        "avoid introducing unnecessary complexity",
      ],
      closing: "Income is designed to simplify decisions, not create new ones.",
    },
    {
      title: "Tax-Aware Structuring",
      body: "Taxes quietly erode outcomes when treated as an afterthought. We integrate tax considerations directly into:",
      items: ["investment structure", "entity design", "distribution planning"],
      closing: "Good structure compounds. Poor structure leaks.",
    },
    {
      title: "Private & Alternative Investments",
      body: "Where appropriate, we evaluate select private and alternative investments as complements.",
      items: [
        "introduced selectively",
        "stress-tested carefully",
        "integrated only when they serve a clear role",
      ],
      closing: "Not every opportunity deserves capital. Fewer deserve attention.",
    },
    {
      title: "Continuity & Long-Term Stewardship",
      body: "Beyond accumulation, wealth requires continuity. We help clients think through:",
      items: [
        "ownership and control over time",
        "generational transfer and intent",
        "charitable and philanthropic structure",
        "long-term stewardship",
      ],
      closing: "Continuity is designed. Not improvised.",
    },
  ];

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
            Our Services
          </p>
          <h1 style={{ fontFamily: HEADING, fontSize: "clamp(32px, 5vw, 58px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.1", margin: "0 0 28px 0" }}>
            Designed as a system. Operated as one.
          </h1>
          <p style={{ fontFamily: BODY, fontSize: "18px", color: "#4a6155", lineHeight: "1.7", margin: 0 }}>
            Armature does not offer standalone services. What we provide is a wealth operating system — a coordinated approach to every dimension of financial life.
          </p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                marginBottom: i < services.length - 1 ? "72px" : 0,
                paddingBottom: i < services.length - 1 ? "72px" : 0,
                borderBottom: i < services.length - 1 ? "1px solid rgba(28, 56, 40, 0.1)" : "none",
              }}
            >
              <h2 style={{ fontFamily: HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.01em", lineHeight: "1.2", margin: "0 0 20px 0" }}>
                {service.title}
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                {service.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                {service.items.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.65", paddingLeft: "20px", borderLeft: "2px solid #b8913a", margin: "0 0 10px 0" }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#2e4e3a", fontStyle: "italic", margin: 0 }}>
                {service.closing}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATION SECTION */}
      <section style={{ backgroundColor: "#ede8e0", padding: "100px 32px", borderTop: "1px solid rgba(28, 56, 40, 0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ aspectRatio: "4/3", backgroundColor: "#c8d0c4", backgroundImage: "url(/images/Gemini_Generated_Image_ju4kmju4kmju4kmj.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div>
              <h2 style={{ fontFamily: HEADING, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.2", margin: "0 0 20px 0" }}>
                Integration over isolation
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                Traditional advisory models operate in silos. Ours does not.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 48px 0" }}>
                In a governed system: tax decisions inform investment structure, estate planning shapes ownership and control, income design coordinates with liquidity needs. Nothing operates in isolation.
              </p>
              <h3 style={{ fontFamily: HEADING, fontSize: "16px", fontWeight: "500", color: "#1c3828", margin: "0 0 28px 0" }}>
                How the system stays aligned
              </h3>
              {[
                { title: "Whole-System View", body: "We begin with a complete understanding of your financial picture." },
                { title: "Coordinated Decisions", body: "Every strategy is assessed for interaction effects, sequencing, and long-term impact." },
                { title: "Ongoing Alignment", body: "Periodic reviews ensure the system evolves as life, markets, and priorities change — without reintroducing complexity." },
              ].map((item) => (
                <div key={item.title} style={{ marginBottom: "24px", paddingLeft: "20px", borderLeft: "2px solid #b8913a" }}>
                  <h4 style={{ fontFamily: HEADING, fontSize: "15px", fontWeight: "500", color: "#1c3828", margin: "0 0 6px 0" }}>{item.title}</h4>
                  <p style={{ fontFamily: BODY, fontSize: "14px", color: "#4a6155", lineHeight: "1.65", margin: 0 }}>{item.body}</p>
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
