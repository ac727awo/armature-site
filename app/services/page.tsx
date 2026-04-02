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
      <section style={{ backgroundColor: "#f5f0eb", padding: "80px 32px" }}>
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
                color: "#1c3828",
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
                color: "#4a6155",
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
                color: "#4a6155",
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
                color: "#6a8070",
              }}
            >
              {data.integration.closing}
            </p>
          </div>
          {data.integration.image && (
            <div style={{ flex: 1, minWidth: "280px", aspectRatio: "4/3", overflow: "hidden", borderRadius: "8px", border: "1px solid #c8d0c4" }}>
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

      <CTASection />
    </main>
  );
}
