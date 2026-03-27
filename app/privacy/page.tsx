export const metadata = {
  title: "Privacy Policy | Armature Wealth Partners",
};

const p: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "16px",
  color: "#9aab9f",
  lineHeight: "1.8",
  margin: "0 0 20px 0",
};

const h2: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "20px",
  fontWeight: "400",
  color: "#f0ebe0",
  margin: "0 0 16px 0",
  letterSpacing: "-0.01em",
};

export default function Privacy() {
  return (
    <section
      style={{
        backgroundColor: "#05120e",
        paddingTop: "160px",
        paddingBottom: "120px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
          Legal
        </p>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: "400",
            color: "#f0ebe0",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            margin: "0 0 48px 0",
          }}
        >
          Privacy Policy
        </h1>
        <h2 style={h2}>Information We Collect</h2>
        <p style={p}>
          We collect information you provide directly to us through our contact
          form, including your name, email address, phone number, and any
          additional information you choose to share.
        </p>
        <h2 style={h2}>How We Use Your Information</h2>
        <p style={p}>
          We use the information we collect to respond to your inquiries,
          schedule consultations, and communicate with you about our services.
          We do not sell, trade, or otherwise transfer your personal information
          to third parties.
        </p>
        <h2 style={h2}>Confidentiality</h2>
        <p style={p}>
          All information shared with Armature Wealth Partners is treated as
          strictly confidential. We work exclusively with principals and
          maintain the highest standards of discretion in all client
          relationships.
        </p>
        <h2 style={h2}>Contact</h2>
        <p style={p}>
          If you have questions about this privacy policy, please contact us
          through the form on our Contact page.
        </p>
        <p
          style={{
            ...p,
            fontSize: "13px",
            color: "#4a5e52",
          }}
        >
          Last updated: March 2026
        </p>
      </div>
    </section>
  );
}
