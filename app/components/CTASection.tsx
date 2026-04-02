import Link from "next/link";

const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";
const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";

export default function CTASection() {
  return (
    <section
      style={{
        backgroundColor: "#c9a84c",
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Lion watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-40px",
          width: "520px",
          height: "520px",
          opacity: 0.12,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: "url(/images/lion-watermark.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      />

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: HEADING,
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: "500",
            color: "#0f1e1b",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
            marginBottom: "24px",
          }}
        >
          Begin with a diagnostic discussion.
        </h2>
        <p
          style={{
            fontFamily: BODY,
            fontSize: "17px",
            color: "#2a3d38",
            lineHeight: "1.7",
            marginBottom: "12px",
          }}
        >
          No urgency. No commitment. Just a clear look at whether
          <br />
          this kind of system belongs in your life, now or later.
        </p>
        <p
          style={{
            fontFamily: BODY,
            fontSize: "16px",
            color: "#3a5048",
            lineHeight: "1.7",
            marginBottom: "44px",
            fontStyle: "italic",
          }}
        >
          If it&apos;s not time yet, you&apos;ll know. If it is, the next step
          becomes obvious.
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: BODY,
            fontSize: "13px",
            color: "#0f1e1b",
            border: "1.5px solid rgba(15, 30, 27, 0.5)",
            padding: "14px 36px",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          Begin with a Conversation
        </Link>
      </div>
    </section>
  );
}
