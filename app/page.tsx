import Link from "next/link";
import CTASection from "./components/CTASection";

export const metadata = {
  title: "Armature Wealth Partners | A Better Way to Manage Wealth",
  description:
    "A wealth operating system for accomplished professionals with $10M–$25M+ net worth. Governance, integration, and clarity.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#05120e",
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
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 62% 50%, transparent 12%, rgba(5,18,14,0.6) 50%, rgba(3,12,9,0.95) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "300px",
            background: "linear-gradient(to bottom, transparent, #05120e)",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "11px",
                color: "#c9a84c",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "28px",
                margin: "0 0 28px 0",
              }}
            >
              Armature Wealth Partners
            </p>
            <h1
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: "400",
                color: "#f0ebe0",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                margin: "0 0 28px 0",
              }}
            >
              Your wealth deserves better decisions.
            </h1>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                color: "#b8c8be",
                lineHeight: "1.65",
                margin: "0 0 16px 0",
                maxWidth: "560px",
              }}
            >
              For accomplished professionals whose success outpaced the systems
              meant to govern it.
            </p>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "15px",
                color: "#7a9083",
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
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "13px",
                  color: "#f0ebe0",
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                  border: "1px solid rgba(201, 168, 76, 0.5)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                See How the System Works
              </Link>
              <Link
                href="/contact"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "13px",
                  color: "#9aab9f",
                  border: "1px solid rgba(154, 171, 159, 0.3)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                Begin with a Diagnostic Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S MISSING */}
      <section style={{ backgroundColor: "#05120e", padding: "120px 32px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 32px 0",
            }}
          >
            What&apos;s missing is not intelligence or effort.
          </h2>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "18px",
              color: "#b8c8be",
              lineHeight: "1.75",
              margin: "0 0 24px 0",
            }}
          >
            It&apos;s a wealth operating system that brings everything into one
            clear view, so you can author capital decisions from a position of
            clarity — not reaction.
          </p>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#7a9083",
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
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#7a9083",
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

      {/* WHY CLIENTS CHOOSE ARMATURE */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "120px 32px",
          borderTop: "1px solid rgba(201, 168, 76, 0.08)",
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
              backgroundColor: "#0a1e15",
              backgroundImage: "url(/images/team-discussion.jpg)",
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
                  "linear-gradient(135deg, transparent 60%, rgba(5,18,14,0.7) 100%)",
              }}
            />
          </div>
          <div>
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
              Why clients choose Armature
            </p>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px",
                color: "#9aab9f",
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
                  borderLeft: "1px solid rgba(201, 168, 76, 0.3)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#f0ebe0",
                    margin: "0 0 8px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "14px",
                    color: "#7a9083",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "14px",
                color: "#6b7f74",
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

      {/* SERVICES */}
      <section style={{ backgroundColor: "#05120e", padding: "120px 32px" }}>
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
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "11px",
                  color: "#c9a84c",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  margin: "0 0 24px 0",
                }}
              >
                Our Services
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: "400",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2",
                  margin: "0 0 28px 0",
                }}
              >
                This is not traditional wealth management.
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
                We design and maintain a wealth operating system — one that
                brings advisors, assets, decisions, and oversight into a single
                coherent structure.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#6b7f74",
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
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "11px",
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      minWidth: "64px",
                    }}
                  >
                    {item.action}
                  </span>
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "15px",
                      color: "#b8c8be",
                    }}
                  >
                    {item.object}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "14px",
                  color: "#6b7f74",
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
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                  color: "#c9a84c",
                  border: "1px solid rgba(201, 168, 76, 0.4)",
                  padding: "12px 28px",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                Explore Our Services
              </Link>
            </div>
            <div
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#0a1e15",
                backgroundImage: "url(/images/real-estate.jpg)",
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
                    "linear-gradient(to top, rgba(5,18,14,0.85) 0%, transparent 60%)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "13px",
                    color: "#9aab9f",
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

      {/* PROCESS */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "120px 32px",
          borderTop: "1px solid rgba(201, 168, 76, 0.08)",
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
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: "400",
              color: "#f0ebe0",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              margin: "0 0 28px 0",
            }}
          >
            A system built around you, not sold to you.
          </h2>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "16px",
              color: "#9aab9f",
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
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "11px",
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  minWidth: "28px",
                  paddingTop: "3px",
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#b8c8be",
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
              borderTop: "1px solid rgba(201, 168, 76, 0.12)",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "18px",
                color: "#f0ebe0",
                lineHeight: "1.6",
                margin: "0 0 8px 0",
              }}
            >
              You remain the principal. You retain final authority.
            </p>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px",
                color: "#9aab9f",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#c9a84c",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ backgroundColor: "#05120e", padding: "120px 32px" }}>
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
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "400",
                color: "#f0ebe0",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              Built from lived experience, not theory.
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
              Armature was built by a healthcare professional trained in
              high-stakes decision-making under uncertainty. That background
              shaped everything: how we assess risk, how we design structure,
              how we hold complexity without losing signal.
            </p>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px",
                color: "#9aab9f",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "15px",
                color: "#c9a84c",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#c9a84c",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Learn Our Story
            </Link>
          </div>
          <div
            style={{
              aspectRatio: "4/5",
              backgroundColor: "#0a1e15",
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
                backgroundColor: "rgba(5, 18, 14, 0.9)",
                border: "1px solid rgba(201, 168, 76, 0.3)",
                padding: "20px 24px",
                maxWidth: "220px",
              }}
            >
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "10px",
                  color: "#c9a84c",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                Armature Philosophy
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "12px",
                  color: "#9aab9f",
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

      {/* INSIGHTS PREVIEW */}
      <section
        style={{
          backgroundColor: "#040f0b",
          padding: "120px 32px",
          borderTop: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "680px", marginBottom: "72px" }}>
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
              Insights
            </p>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: "400",
                color: "#f0ebe0",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                margin: "0 0 28px 0",
              }}
            >
              What wealth starts to feel like after the noise fades.
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
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "14px",
                  color: "#6b7f74",
                  lineHeight: "1.65",
                  paddingLeft: "16px",
                  borderLeft: "1px solid rgba(201, 168, 76, 0.2)",
                  margin: "0 0 10px 0",
                }}
              >
                {item}
              </p>
            ))}
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "14px",
                color: "#4a5e52",
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
                  backgroundColor: "#05120e",
                  border: "1px solid rgba(255,255,255,0.06)",
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
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "10px",
                      color: "#c9a84c",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "11px",
                      color: "#4a5e52",
                    }}
                  >
                    {article.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#f0ebe0",
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
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "14px",
                    color: "#7a9083",
                    lineHeight: "1.65",
                    margin: "0 0 28px 0",
                  }}
                >
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "12px",
                    color: "#c9a84c",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
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
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "12px",
                color: "#c9a84c",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                padding: "12px 32px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
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
