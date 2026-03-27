import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "Private Investments Need Roles, Not Just Returns | Armature",
};

const p: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "17px",
  color: "#b8c8be",
  lineHeight: "1.8",
  margin: "0 0 24px 0",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Private Investments"
      date="December 2025"
      readTime="2 min read"
      title="Private Investments Need Roles, Not Just Returns"
    >
      <p style={p}>
        Private investments fail more often from confusion than conviction. The
        issue is rarely access. It&apos;s clarity of purpose.
      </p>
      <p style={p}>
        Most investors evaluate private opportunities on a return basis — IRR,
        multiple, vintage year. These are valid metrics. But they answer the
        wrong question first. The question that matters is: what role does this
        play in the portfolio, and does it earn that role?
      </p>
      <p style={p}>
        A private credit position sized at 8% of a portfolio because it
        &quot;yields 11%&quot; is not well-reasoned. An 8% allocation to
        private credit because the portfolio is over-indexed to public equity,
        needs income diversification, and has a liquidity profile that can
        accommodate the lockup — that is a role. The same investment, two
        different decisions.
      </p>
      <p style={p}>
        The distinction matters in volatility and in exits. When markets
        compress and liquidity tightens, investors who held private allocations
        without role clarity face a harder question: sell at a discount, or hold
        against the rest of the plan? Those who allocated with a defined role
        and a clear liquidity plan tend to hold better — because the decision
        was already made.
      </p>
      <p style={{ ...p, color: "#9aab9f", fontStyle: "italic" }}>
        Not every opportunity deserves capital. The ones that do earn their
        place by serving a defined purpose — not by offering the highest
        projected return.
      </p>
    </ArticleLayout>
  );
}
