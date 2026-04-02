"use client";
import { useState } from "react";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", assets: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section
        className="hero-pad"
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
            Contact
          </p>
          <h1 style={{ fontFamily: HEADING, fontSize: "clamp(32px, 5vw, 58px)", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.02em", lineHeight: "1.1", margin: 0 }}>
            Start with a conversation.
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "#f5f0eb", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid-contact" style={{ alignItems: "start" }}>
            {/* Left — context */}
            <div>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#4a6155", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                If you&apos;re sensing that your financial life could be simpler, quieter, or more coordinated than it currently is — this is the right first step.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#6a8070", lineHeight: "1.75", margin: "0 0 20px 0" }}>
                This discussion is designed to explore how your current structure is functioning, where complexity or friction may be forming, and whether a governing system is relevant for this phase of your life.
              </p>
              <p style={{ fontFamily: BODY, fontSize: "15px", color: "#6a8070", lineHeight: "1.75", margin: "0 0 56px 0" }}>
                There is no expectation to proceed. Only to determine whether this is relevant for this phase of your life.
              </p>

              {[
                { title: "Private by design", body: "All conversations are conducted discreetly and treated as strictly confidential. We work with principals directly." },
                { title: "No pressure", body: "This is not a sales call. There is no proposal or obligation attached to the conversation. If it's not the right time, that will be clear." },
                { title: "Thoughtful and timely", body: "We respond personally to all inquiries, typically within one business day. Conversations are structured around your schedule." },
              ].map((item) => (
                <div key={item.title} style={{ marginBottom: "28px", paddingLeft: "20px", borderLeft: "2px solid #b8913a" }}>
                  <h3 style={{ fontFamily: HEADING, fontSize: "15px", fontWeight: "500", color: "#1c3828", margin: "0 0 8px 0" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: BODY, fontSize: "14px", color: "#4a6155", lineHeight: "1.65", margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <div
              className="contact-card"
              style={{
                backgroundColor: "#ede8e0",
                border: "1px solid rgba(28, 56, 40, 0.12)",
                padding: "48px",
              }}
            >
              <h2 style={{ fontFamily: HEADING, fontSize: "22px", fontWeight: "500", color: "#1c3828", letterSpacing: "-0.01em", margin: "0 0 8px 0" }}>
                Request a conversation
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "14px", color: "#6a8070", margin: "0 0 36px 0", lineHeight: "1.6" }}>
                Complete the form below and a member of our team will reach out to schedule a brief, private discussion.
              </p>

              {submitted ? (
                <div style={{ padding: "32px 0" }}>
                  <p style={{ fontFamily: HEADING, fontSize: "22px", color: "#b8913a", margin: "0 0 8px 0", textAlign: "center" }}>Received.</p>
                  <p style={{ fontFamily: BODY, fontSize: "15px", color: "#1c3828", lineHeight: "1.7", margin: "0 0 24px 0", textAlign: "center" }}>
                    A member of our team will reach out within one business day<br />to schedule your private conversation.
                  </p>

                  <div style={{ borderTop: "1px solid rgba(28, 56, 40, 0.12)", paddingTop: "28px", marginTop: "28px" }}>
                    <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 16px 0" }}>
                      What to expect
                    </p>
                    {[
                      { step: "01", text: "A brief scheduling note from our team — no forms, no friction." },
                      { step: "02", text: "A 30-minute diagnostic conversation, private and confidential." },
                      { step: "03", text: "A clear picture of whether this system belongs in your life right now." },
                    ].map((item) => (
                      <div key={item.step} style={{ display: "flex", gap: "14px", marginBottom: "14px", alignItems: "baseline" }}>
                        <span style={{ fontFamily: HEADING, fontSize: "14px", color: "#b8913a", flexShrink: 0 }}>{item.step}</span>
                        <p style={{ fontFamily: BODY, fontSize: "14px", color: "#4a6155", lineHeight: "1.6", margin: 0 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: "1px solid rgba(28, 56, 40, 0.12)", paddingTop: "24px", marginTop: "24px" }}>
                    <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 12px 0" }}>
                      While you wait
                    </p>
                    <p style={{ fontFamily: BODY, fontSize: "14px", color: "#4a6155", lineHeight: "1.65", margin: "0 0 16px 0" }}>
                      Most of the principals we work with share a common realization: the complexity didn&apos;t come from poor decisions — it came from outgrowing the systems around them.
                    </p>
                    <a
                      href="/insights/capital-efficiency"
                      style={{
                        fontFamily: BODY,
                        fontSize: "12px",
                        color: "#1c3828",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderBottom: "1px solid #b8913a",
                        paddingBottom: "2px",
                      }}
                    >
                      Read: Capital Efficiency Is a Condition, Not a Goal &rarr;
                    </a>
                  </div>

                  <p style={{ fontFamily: BODY, fontSize: "13px", color: "#6a8070", fontStyle: "italic", lineHeight: "1.6", margin: "28px 0 0 0", textAlign: "center" }}>
                    You made the right call. Clarity starts here.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid-name" style={{ marginBottom: "20px" }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input name="firstName" type="text" placeholder="John" required value={form.firstName} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input name="lastName" type="text" placeholder="Smith" required value={form.lastName} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Phone Number (Optional)</label>
                    <input name="phone" type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={labelStyle}>Investable Assets</label>
                    <select name="assets" value={form.assets} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select a range</option>
                      <option value="$2.5M – $5M">$2.5M – $5M</option>
                      <option value="$5M – $8M">$5M – $8M</option>
                      <option value="$8M – $15M">$8M – $15M</option>
                      <option value="$15M – $25M">$15M – $25M</option>
                      <option value="$25M+">$25M+</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "28px" }}>
                    <label style={labelStyle}>How can we help you?</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your financial goals and what you're looking for..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    />
                  </div>
                  {error && (
                    <p style={{ fontFamily: BODY, fontSize: "13px", color: "#8b3a3a", margin: "0 0 16px 0", padding: "12px 16px", backgroundColor: "rgba(139,58,58,0.08)", border: "1px solid rgba(139,58,58,0.2)" }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      width: "100%",
                      fontFamily: BODY,
                      fontSize: "13px",
                      color: "#f5f0eb",
                      backgroundColor: sending ? "#4a6155" : "#1c3828",
                      border: "none",
                      padding: "16px 32px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      cursor: sending ? "not-allowed" : "pointer",
                      transition: "background-color 0.2s",
                    }}
                  >
                    {sending ? "Sending…" : "Request Consultation"}
                  </button>
                  <p style={{ fontFamily: BODY, fontSize: "11px", color: "#6a8070", lineHeight: "1.6", margin: "16px 0 0 0", textAlign: "center" }}>
                    By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURES */}
      <section style={{ backgroundColor: "#ede8e0", padding: "48px 32px", borderTop: "1px solid rgba(28, 56, 40, 0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: BODY, fontSize: "12px", color: "#6a8070", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 12px 0" }}>
            Important Disclosures
          </h3>
          <p style={{ fontFamily: BODY, fontSize: "12px", color: "#6a8070", lineHeight: "1.7", margin: 0 }}>
            Armature Wealth Office provides investment advisory services to qualified clients. All investing involves risk, including the possible loss of principal. Past performance does not guarantee future results. This website is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "11px",
  color: "#4a6155",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: "600",
  display: "block",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "14px",
  color: "#1c3828",
  backgroundColor: "#f5f0eb",
  border: "1px solid rgba(28, 56, 40, 0.2)",
  padding: "12px 16px",
  outline: "none",
  boxSizing: "border-box",
};
