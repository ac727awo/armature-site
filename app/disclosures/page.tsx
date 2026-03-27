export const metadata = {
  title: "Disclosures | Armature Wealth Partners",
};

const p: React.CSSProperties = {
  fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "16px",
  color: "#4a6155",
  lineHeight: "1.8",
  margin: "0 0 20px 0",
};

export default function Disclosures() {
  return (
    <section
      style={{
        backgroundColor: "#f5f0eb",
        paddingTop: "160px",
        paddingBottom: "120px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "11px",
            color: "#b8913a",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: "0 0 24px 0",
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontFamily: "'Operetta 12', Georgia, 'Times New Roman', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: "500",
            color: "#1c3828",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            margin: "0 0 48px 0",
          }}
        >
          Disclosures
        </h1>
        <p style={p}>
          Armature Wealth Partners provides investment advisory services to
          qualified clients. All investing involves risk, including the possible
          loss of principal. Past performance does not guarantee future results.
        </p>
        <p style={p}>
          This website is for informational purposes only and does not
          constitute investment advice, a solicitation, or an offer to buy or
          sell any security or investment product.
        </p>
        <p style={p}>
          The information contained on this website has been prepared without
          regard to any particular investor&apos;s investment objectives,
          financial situation, or needs. Accordingly, investors should not act
          on any information on this website without obtaining specific advice
          from their financial advisors.
        </p>
        <p style={p}>
          Armature Wealth Partners is not a licensed securities broker-dealer,
          and does not hold itself out as such. Nothing herein should be
          construed as legal, tax, or accounting advice.
        </p>
        <p
          style={{
            ...p,
            fontSize: "13px",
            color: "#6a8070",
          }}
        >
          © 2026 Armature Wealth Partners. All rights reserved.
        </p>
      </div>
    </section>
  );
}
