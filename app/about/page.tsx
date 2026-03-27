import CTASection from "../components/CTASection";

export const metadata = {
  title: "About Us | Armature Wealth Partners",
  description:
    "Built for the phase that comes after success. Armature exists for a specific moment in a professional's life.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#05120e",
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "32px",
          paddingRight: "32px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              color: "#c9a84c",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            About Armature
          </p>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: "400",
              color: "#f0ebe0",
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
      <section style={{ backgroundColor: "#05120e", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: "400",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.25",
                  margin: "0 0 28px 0",
                }}
              >
                Armature exists for a specific moment in a professional&apos;s
                life.
              </h2>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                It&apos;s the point where earning more no longer creates
                clarity. Where adding another advisor doesn&apos;t reduce
                complexity — it adds to it.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                For many accomplished professionals, wealth is technically
                &quot;handled&quot; — yet still requires coordination, still
                demands attention, still sits uneasily without a governing
                structure.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                That is not a failure of discipline or intelligence. It is a
                signal that the system has not kept pace with the complexity.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#b8c8be",
                  lineHeight: "1.75",
                  margin: 0,
                }}
              >
                Armature was built to address that phase.
              </p>
            </div>

            {/* Image */}
            <div
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#0a1e15",
                backgroundImage: "url(/images/physician.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "100px 32px",
          borderTop: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            What we actually do
          </h2>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
            }}
          >
            We do not sell products. We do not manage portfolios in isolation.
            We do not optimize tactics one at a time.
          </p>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.75",
              margin: "0 0 20px 0",
            }}
          >
            Armature designs and maintains a wealth operating system — one that
            brings advisors, assets, decisions, and oversight into a coherent
            structure.
          </p>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.75",
              margin: "0 0 60px 0",
            }}
          >
            This isn&apos;t about building something flashy. It is clarity,
            durability, and reduced dependence on your constant attention.
          </p>

          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.25",
              margin: "0 0 24px 0",
            }}
          >
            Who this is for
          </h2>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
            }}
          >
            Our clients are already successful. They are physicians, founders,
            and professionals who:
          </p>
          {[
            "followed the rules",
            "built income responsibly",
            "accumulated across accounts, entities, and strategies",
            "sense there is a cleaner way to operate at this level",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  color: "#c9a84c",
                  fontSize: "14px",
                  paddingTop: "2px",
                  flexShrink: 0,
                }}
              >
                —
              </span>
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#b8c8be",
                  lineHeight: "1.5",
                }}
              >
                {item}
              </span>
            </div>
          ))}
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
              lineHeight: "1.75",
              fontStyle: "italic",
              margin: "32px 0 0 0",
            }}
          >
            They are not looking for more ideas. They are looking for a better
            way of seeing the whole.
          </p>
        </div>
      </section>

      {/* LIVED EXPERIENCE */}
      <section style={{ backgroundColor: "#05120e", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: "400",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.25",
                  margin: "0 0 28px 0",
                }}
              >
                Lived experience, not theory.
              </h2>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 40px 0",
                }}
              >
                Armature was built by a healthcare professional trained in
                high-stakes decision-making under uncertainty. That background
                shaped everything: how we assess risk, how we design structure,
                how we hold complexity without losing signal.
              </p>

              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#f0ebe0",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                How we think
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                There is a point where traditional &quot;wealth
                management&quot; stops being sufficient. At that stage:
              </p>
              {[
                "decisions interact with each other",
                "risk lives between domains",
                "behavior matters as much as math",
                "oversight becomes the hidden cost",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "15px",
                    color: "#7a9083",
                    lineHeight: "1.65",
                    paddingLeft: "16px",
                    borderLeft: "1px solid rgba(201, 168, 76, 0.2)",
                    margin: "0 0 10px 0",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#f0ebe0",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                How we work
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                That experience shaped everything: deliberate, not reactive.
                Structured, not rushed. Long-horizon, not quarterly.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 40px 0",
                }}
              >
                We believe wealth works best when every asset has a defined
                role, every decision fits into a broader framework, and
                oversight is designed — not improvised.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#c9a84c",
                  fontStyle: "italic",
                  lineHeight: "1.65",
                  margin: "0 0 48px 0",
                }}
              >
                We co-invest. We move carefully. We design systems meant to
                hold.
              </p>

              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#f0ebe0",
                  margin: "0 0 24px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                What clients notice
              </h3>
              {[
                "This feels cleaner than what I had before.",
                "I spend less time thinking about money.",
                "Decisions don't stack up the way they used to.",
              ].map((quote) => (
                <div
                  key={quote}
                  style={{
                    margin: "0 0 16px 0",
                    padding: "20px 24px",
                    borderLeft: "2px solid rgba(201, 168, 76, 0.4)",
                    backgroundColor: "rgba(201, 168, 76, 0.04)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "15px",
                      color: "#b8c8be",
                      fontStyle: "italic",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    &quot;{quote}&quot;
                  </p>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "14px",
                  color: "#6b7f74",
                  lineHeight: "1.65",
                  margin: "24px 0 0 0",
                }}
              >
                Nothing dramatic changes day one. What changes is how the
                system carries forward. What we build resembles how
                centimillionaire families quietly operate — without requiring
                you to become one first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
