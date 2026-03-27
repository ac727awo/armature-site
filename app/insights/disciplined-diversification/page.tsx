import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "The Case for Disciplined Diversification | Armature",
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
      category="Long-Term Planning"
      date="November 2025"
      readTime="2 min read"
      title="The Case for Disciplined Diversification"
    >
      <p style={p}>
        Most portfolios are diversified. Very few are disciplined. The
        difference isn&apos;t the number of assets — it&apos;s whether
        diversification was designed to withstand different kinds of stress.
      </p>
      <p style={p}>
        Simple diversification spreads capital across categories — equities,
        fixed income, real estate, alternatives. In calm markets, this looks
        sufficient. In stress events, correlations converge. Assets that
        appeared uncorrelated move together because the underlying driver of the
        stress — liquidity contraction, credit tightening — affects all of them
        simultaneously.
      </p>
      <p style={p}>
        Disciplined diversification goes further. It asks: what is each
        allocation designed to do, and under what conditions does it do that
        well? It considers not just correlation in normal markets but behavior in
        specific stress scenarios. It accounts for liquidity — not just what a
        position is worth in theory, but what it can be converted to at the
        moment it might need to be.
      </p>
      <p style={p}>
        This kind of diversification requires more than a pie chart. It requires
        a governing view of what the portfolio is for, who it is serving, and
        what continuity looks like across the conditions it will actually face.
      </p>
      <p style={{ ...p, color: "#6a8070", fontStyle: "italic" }}>
        Diversification without discipline is exposure management. Disciplined
        diversification is architecture. The distinction shows most clearly when
        it matters most.
      </p>
    </ArticleLayout>
  );
}
