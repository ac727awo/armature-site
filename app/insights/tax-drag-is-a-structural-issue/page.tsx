import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "Tax Drag Is a Structural Issue, Not a Tactical One | Armature",
};

const p: React.CSSProperties = {
  fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "17px",
  color: "#4a6155",
  lineHeight: "1.8",
  margin: "0 0 24px 0",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Tax Strategy"
      date="February 2026"
      readTime="2 min read"
      title="Tax Drag Is a Structural Issue, Not a Tactical One"
    >
      <p style={p}>
        Most tax inefficiency does not come from bad advice. It comes from
        decisions made in isolation. Tax drag compounds quietly across years,
        not because anyone was careless — but because no one was responsible for
        the whole picture.
      </p>
      <p style={p}>
        The advisor who manages your investments optimizes for after-tax
        returns within the portfolio. The CPA optimizes for this year&apos;s
        return. The estate attorney optimizes for transfer. Each operates within
        their domain, correctly.
      </p>
      <p style={p}>
        What no one owns is the interaction between these domains. And that is
        precisely where tax drag lives.
      </p>
      <p style={p}>
        A gain harvested in one account creates taxable income that affects the
        cost basis of a charitable gift made from another. A Roth conversion
        executed in a year with high W-2 income pushes the marginal rate higher
        than planned. A distribution from an entity is made without reference to
        what the individual is already recognizing elsewhere.
      </p>
      <p style={p}>
        None of these decisions are wrong in isolation. Together, they represent
        structural inefficiency — the kind that compounds across decades and
        cannot be resolved with any single tactic.
      </p>
      <p style={{ ...p, color: "#6a8070", fontStyle: "italic" }}>
        The resolution is not more tax advice. It is a governing layer that
        holds context across all decisions — so that the interaction effects
        are visible before they compound, not after.
      </p>
    </ArticleLayout>
  );
}
