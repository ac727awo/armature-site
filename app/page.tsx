import Link from "next/link";
import CTASection from "./components/CTASection";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export const metadata = {
  title: "Armature Wealth Office | A Better Way to Manage Wealth",
  description:
    "A wealth operating system for accomplished professionals with $10M–$25M+ net worth. Governance, integration, and clarity.",
};

export default function Home() {
  return (
    <>
      {/* HERO — stays dark green with vignette */}
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#1c3828",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/images/team-discussion.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 62% 50%, transparent 12%, rgba(15,34,24,0.65) 50%, rgba(10,26,16,0.95) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-32px",
            left: 0,
            right: 0,
            height: "220px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(245,240,235,0.3) 35%, rgba(245,240,235,0.75) 65%, #f5f0eb 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 32px 120px",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "11px",
                color: "#b8913a",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: "600",
                marginBottom: "28px",
                margin: "0 0 28px 0",
              }}
            >
              Armature Wealth Office
            </p>
            <h1
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: "500",
                color: "#f5f0eb",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                margin: "0 0 28px 0",
              }}
            >
              Your wealth deserves better decisions.
            </h1>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "19px",
                color: "#c8d8cc",
                lineHeight: "1.65",
                margin: "0 0 16px 0",
                maxWidth: "560px",
                fontWeight: "300",
              }}
            >
              For accomplished professionals whose success outpaced the systems
              meant to govern it.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                color: "#8aab96",
                lineHeight: "1.65",
                margin: "0 0 52px 0",
                maxWidth: "500px",
              }}
            >
              For professionals with $10M–$25M+ net worth. If your financial
              life still feels simple, it may not be time yet.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/process"
                style={{
                  fontFamily: BODY,
                  fontSize: "13px",
                  color: "#1c3828",
                  backgroundColor: "#d4a84c",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                See How the System Works →
              </Link>
              <Link
                href="/contact"
                style={{
                  fontFamily: BODY,
                  fontSize: "13px",
                  color: "#f5f0eb",
                  border: "1px solid rgba(245, 240, 235, 0.4)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  display: "inline-block",
                }}
              >
                Begin with a Diagnostic Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S MISSING — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 32px 0",
            }}
          >
            What&apos;s missing is not intelligence or effort.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "18px",
              color: "#2e4e3a",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
              fontWeight: "300",
            }}
          >
            It&apos;s a wealth operating system that brings everything into one
            clear view, so you can author capital decisions from a position of
            clarity — not reaction.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
            }}
          >
            As complexity compounds, communication fragments, and infrastructure
            quietly lags behind. So do traditional advisory models — built for a
            simpler version of your financial life.
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
            If your financial life still feels simple, it may not be time yet.
            If it feels harder to see clearly than it should — that is the
            signal.
          </p>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE ARMATURE — alt cream */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "4/5",
              backgroundColor: "#c8d0c4",
              backgroundImage: "url(/images/governance-desk.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(135deg, transparent 60%, rgba(28,56,40,0.4) 100%)",
              }}
            />
          </div>
          <div>
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
              Why clients choose Armature
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 48px 0",
              }}
            >
              Clients work with Armature because they value clarity over
              activity. Not more inputs. Not more ideas. A governing system that
              holds.
            </p>
            {[
              {
                title: "Authorship before action",
                body: "Decisions follow structure, not urgency.",
              },
              {
                title: "Downside-aware by design",
                body: "Systems are first built to reduce mistakes and risk, not just pursue outcomes.",
              },
              {
                title: "Integrated by default",
                body: "Charities, entities, estate, governance, insurance, investments, planning, risk, redundancies, and tax — held in one coherent view.",
              },
              {
                title: "Long-horizon thinking",
                body: "Capital is authored with decades in mind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  margin: "0 0 32px 0",
                  paddingLeft: "20px",
                  borderLeft: "2px solid #b8913a",
                }}
              >
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1c3828",
                    margin: "0 0 8px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#4a6155",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
            <p
              style={{
                fontFamily: BODY,
                fontSize: "14px",
                color: "#6a8070",
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "8px 0 0 0",
              }}
            >
              The goal is not control for its own sake, but independence, calm,
              and a trajectory that holds.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
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
                Our Services
              </p>
              <h2
                style={{
                  fontFamily: HEADING,
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: "500",
                  color: "#1c3828",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2",
                  margin: "0 0 28px 0",
                }}
              >
                This is not traditional wealth management.
              </h2>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "16px",
                  color: "#4a6155",
                  lineHeight: "1.75",
                  margin: "0 0 24px 0",
                }}
              >
                We design and maintain a wealth operating system — one that
                brings advisors, assets, decisions, and oversight into a single
                coherent structure.
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "15px",
                  color: "#6a8070",
                  lineHeight: "1.75",
                  margin: "0 0 32px 0",
                }}
              >
                Our work typically includes:
              </p>
              {[
                { action: "Reduce", object: "cognitive load" },
                { action: "Limit", object: "behavioral risk" },
                { action: "Preserve", object: "optionality" },
                {
                  action: "Allow",
                  object: "wealth to function without constant oversight",
                },
              ].map((item) => (
                <div
                  key={item.action}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "11px",
                      color: "#b8913a",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      minWidth: "64px",
                    }}
                  >
                    {item.action}
                  </span>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "15px",
                      color: "#2e4e3a",
                    }}
                  >
                    {item.object}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "14px",
                  color: "#6a8070",
                  lineHeight: "1.65",
                  fontStyle: "italic",
                  margin: "32px 0 40px 0",
                }}
              >
                The work is quiet by design. The impact is cumulative.
              </p>
              <Link
                href="/services"
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#1c3828",
                  border: "1.5px solid #1c3828",
                  padding: "12px 28px",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Explore Our Services
              </Link>
            </div>
            <div
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#c8d0c4",
                backgroundImage: "url(/images/integration-diagram.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "32px",
                  background:
                    "linear-gradient(to top, rgba(28,56,40,0.75) 0%, transparent 60%)",
                }}
              >
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "13px",
                    color: "#c8d8cc",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  Including access to select private and alternative investments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — alt cream */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
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
            Our Process
          </p>
          <h2
            style={{
              fontFamily: HEADING,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "500",
              color: "#1c3828",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 28px 0",
            }}
          >
            A system built around you, not sold to you.
          </h2>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "16px",
              color: "#4a6155",
              lineHeight: "1.75",
              margin: "0 0 48px 0",
            }}
          >
            Everything begins with a diagnostic conversation. No pitch. No
            pressure. Just pattern recognition. From there, a system is
            designed — and then operated — around your actual life.
          </p>
          {[
            "Map your current landscape",
            "Identify what's missing to support the next phase",
            "Design a coordinated capital system",
            "Install authorship rules and decision architecture",
            "Stay alongside you as the system carries the load",
          ].map((step, i) => (
            <div
              key={step}
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: "24px",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "11px",
                  color: "#b8913a",
                  letterSpacing: "0.1em",
                  fontWeight: "600",
                  minWidth: "28px",
                  paddingTop: "3px",
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "16px",
                  color: "#2e4e3a",
                  lineHeight: "1.5",
                }}
              >
                {step}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(28, 56, 40, 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: HEADING,
                fontSize: "20px",
                fontWeight: "500",
                color: "#1c3828",
                lineHeight: "1.6",
                margin: "0 0 8px 0",
              }}
            >
              You remain the principal. You retain final authority.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.6",
                fontStyle: "italic",
                margin: "0 0 40px 0",
              }}
            >
              The system does the work.
            </p>
            <Link
              href="/process"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#1c3828",
                border: "1.5px solid #1c3828",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT — cream bg */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "120px 32px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
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
            <h2
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "500",
                color: "#1c3828",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              Built from lived experience, not theory.
            </h2>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              Armature was built by a healthcare professional trained in
              high-stakes decision-making under uncertainty. That background
              shaped everything: how we assess risk, how we design structure,
              how we hold complexity without losing signal.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              Before this system existed for clients, it was built personally —
              through real assets, real losses, and real decisions under
              pressure.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                color: "#b8913a",
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "0 0 40px 0",
              }}
            >
              We co-invest. We move deliberately. We do not rush capital.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#1c3828",
                border: "1.5px solid #1c3828",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Learn Our Story
            </Link>
          </div>
          <div
            style={{
              aspectRatio: "4/5",
              backgroundColor: "#c8d0c4",
              backgroundImage: "url(/images/professional.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                left: "32px",
                backgroundColor: "rgba(245, 240, 235, 0.92)",
                border: "1px solid rgba(28, 56, 40, 0.2)",
                padding: "20px 24px",
                maxWidth: "220px",
              }}
            >
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "10px",
                  color: "#b8913a",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  margin: "0 0 6px 0",
                }}
              >
                Armature Philosophy
              </p>
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  color: "#4a6155",
                  letterSpacing: "0.05em",
                  margin: 0,
                }}
              >
                Our guiding principle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW — alt cream */}
      <section
        style={{
          backgroundColor: "#ede8e0",
          padding: "120px 32px",
          borderTop: "1px solid rgba(28, 56, 40, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "680px", marginBottom: "72px" }}>
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
              Insights
            </p>
            <h2
              style={{
                fontFamily: HEADING,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "500",
                color: "#1c3828",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              What wealth starts to feel like after the noise fades.
            </h2>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "16px",
                color: "#4a6155",
                lineHeight: "1.75",
                margin: "0 0 24px 0",
              }}
            >
              We write for those who have already succeeded — and are ready for
              clarity, structure, and authorship over what comes next.
            </p>
            {[
              "Why wealth feels heavier than it should",
              "When systems matter more than strategies",
              "The behavioral cost of fragmented decisions",
              "How clarity changes trajectories",
            ].map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: BODY,
                  fontSize: "14px",
                  color: "#4a6155",
                  lineHeight: "1.65",
                  paddingLeft: "16px",
                  borderLeft: "2px solid #b8913a",
                  margin: "0 0 10px 0",
                }}
              >
                {item}
              </p>
            ))}
            <p
              style={{
                fontFamily: BODY,
                fontSize: "14px",
                color: "#6a8070",
                fontStyle: "italic",
                margin: "20px 0 0 0",
              }}
            >
              These are not lessons. They are signals of readiness.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                category: "Capital Efficiency",
                date: "February 2026",
                title: "Capital Efficiency Is a Condition, Not a Goal",
                excerpt:
                  "Most discussions about capital efficiency start in the wrong place. Efficiency is not something you achieve — it is a condition you either maintain or let erode.",
                href: "/insights/capital-efficiency-is-a-condition",
              },
              {
                category: "Tax Strategy",
                date: "February 2026",
                title: "Tax Drag Is a Structural Issue, Not a Tactical One",
                excerpt:
                  "Most tax inefficiency does not come from bad advice. It comes from decisions made in isolation. Tax drag compounds quietly across years.",
                href: "/insights/tax-drag-is-a-structural-issue",
              },
              {
                category: "Private Investments",
                date: "December 2025",
                title: "Private Investments Need Roles, Not Just Returns",
                excerpt:
                  "Private investments fail more often from confusion than conviction. The issue is rarely access. It's clarity of purpose.",
                href: "/insights/private-investments-need-roles",
              },
            ].map((article) => (
              <article
                key={article.href}
                style={{
                  backgroundColor: "#f5f0eb",
                  border: "1px solid rgba(28, 56, 40, 0.12)",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "10px",
                      color: "#b8913a",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: BODY,
                      fontSize: "11px",
                      color: "#6a8070",
                    }}
                  >
                    {article.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: HEADING,
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#1c3828",
                    lineHeight: "1.3",
                    margin: "0 0 16px 0",
                    letterSpacing: "-0.01em",
                    flex: 1,
                  }}
                >
                  <Link
                    href={article.href}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {article.title}
                  </Link>
                </h3>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: "14px",
                    color: "#4a6155",
                    lineHeight: "1.65",
                    margin: "0 0 28px 0",
                  }}
                >
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  style={{
                    fontFamily: BODY,
                    fontSize: "12px",
                    color: "#1c3828",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    borderBottom: "1.5px solid #1c3828",
                    paddingBottom: "2px",
                    display: "inline-block",
                  }}
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/insights"
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#1c3828",
                border: "1.5px solid #1c3828",
                padding: "12px 32px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
