"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            Contact
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
            Start with a conversation.
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "#05120e", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left — context */}
            <div>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  color: "#9aab9f",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                If you&apos;re sensing that your financial life could be
                simpler, quieter, or more coordinated than it currently is —
                this is the right first step.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#7a9083",
                  lineHeight: "1.75",
                  margin: "0 0 20px 0",
                }}
              >
                This discussion is designed to explore how your current
                structure is functioning, where complexity or friction may be
                forming, and whether a governing system is relevant for this
                phase of your life.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "15px",
                  color: "#7a9083",
                  lineHeight: "1.75",
                  margin: "0 0 56px 0",
                }}
              >
                There is no expectation to proceed. Only to determine whether
                this is relevant for this phase of your life.
              </p>

              {[
                {
                  title: "Private by design",
                  body: "All conversations are conducted discreetly and treated as strictly confidential. We work with principals directly.",
                },
                {
                  title: "No pressure",
                  body: "This is not a sales call. There is no proposal or obligation attached to the conversation. If it's not the right time, that will be clear.",
                },
                {
                  title: "Thoughtful and timely",
                  body: "We respond personally to all inquiries, typically within one business day. Conversations are structured around your schedule.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    marginBottom: "28px",
                    paddingLeft: "20px",
                    borderLeft: "1px solid rgba(201, 168, 76, 0.3)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#f0ebe0",
                      margin: "0 0 8px 0",
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
            </div>

            {/* Right — form */}
            <div
              style={{
                backgroundColor: "#040f0b",
                border: "1px solid rgba(201, 168, 76, 0.12)",
                padding: "48px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#f0ebe0",
                  letterSpacing: "-0.01em",
                  margin: "0 0 8px 0",
                }}
              >
                Request a conversation
              </h2>
              <p
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "14px",
                  color: "#6b7f74",
                  margin: "0 0 36px 0",
                  lineHeight: "1.6",
                }}
              >
                Complete the form below and a member of our team will reach out
                to schedule a brief, private discussion.
              </p>

              {submitted ? (
                <div style={{ padding: "32px 0", textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "18px",
                      color: "#c9a84c",
                      margin: "0 0 16px 0",
                    }}
                  >
                    Thank you.
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "15px",
                      color: "#9aab9f",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    We&apos;ll be in touch within one business day to schedule
                    your conversation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Investable Assets</label>
                    <select style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select a range</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K – $1M</option>
                      <option value="1-2.5m">$1M – $2.5M</option>
                      <option value="2.5-5m">$2.5M – $5M</option>
                      <option value="5-10m">$5M – $10M</option>
                      <option value="10-25m">$10M – $25M</option>
                      <option value="25m-plus">$25M+</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "28px" }}>
                    <label style={labelStyle}>How can we help you?</label>
                    <textarea
                      placeholder="Tell us about your financial goals and what you're looking for..."
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "100px",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "13px",
                      color: "#0f1e1b",
                      backgroundColor: "#c9a84c",
                      border: "none",
                      padding: "16px 32px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                  >
                    Request Consultation
                  </button>
                  <p
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "11px",
                      color: "#4a5e52",
                      lineHeight: "1.6",
                      margin: "16px 0 0 0",
                      textAlign: "center",
                    }}
                  >
                    By submitting this form, you agree to our Privacy Policy and
                    consent to being contacted regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURES */}
      <section
        style={{
          backgroundColor: "#030e09",
          padding: "48px 32px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "12px",
              color: "#4a5e52",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            Important Disclosures
          </h3>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "12px",
              color: "#3a4e42",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Armature Wealth Partners provides investment advisory services to
            qualified clients. All investing involves risk, including the
            possible loss of principal. Past performance does not guarantee
            future results. This website is for informational purposes only and
            does not constitute investment advice.
          </p>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "11px",
  color: "#9aab9f",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "14px",
  color: "#f0ebe0",
  backgroundColor: "#05120e",
  border: "1px solid rgba(255,255,255,0.1)",
  padding: "12px 16px",
  outline: "none",
  boxSizing: "border-box",
};
