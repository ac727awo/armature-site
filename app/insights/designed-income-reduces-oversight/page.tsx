import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "Designed Income Reduces Oversight | Armature",
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
      category="Capital Efficiency"
      date="December 2025"
      readTime="2 min read"
      title="Designed Income Reduces Oversight"
    >
      <p style={p}>
        Income becomes problematic when pursued reactively. Designed well, it
        does the opposite. The real issue is whether income was structured to
        serve a role, or assembled in response to need.
      </p>
      <p style={p}>
        Reactive income design looks like this: a portfolio generates
        distributions when the market cooperates. A rental property cash flows
        intermittently. Earned income covers the gap. When any one source
        compresses, the principal has to pay attention — reassessing, adjusting,
        managing. The system requires oversight because it was never designed to
        run without it.
      </p>
      <p style={p}>
        Designed income looks different. Each capital pool has a defined
        liquidity purpose. Distributions are tax-aware. The timing of income
        recognition is managed against the rest of the plan. When conditions
        change, the framework absorbs the shift without requiring a full review.
      </p>
      <p style={p}>
        The goal of designed income is not maximum yield. It is reliable,
        tax-efficient cash flow that reduces the number of decisions the
        principal has to make — because the design already made them.
      </p>
      <p style={{ ...p, color: "#9aab9f", fontStyle: "italic" }}>
        A well-designed income system is quieter than a reactive one. That
        quiet is the product. The oversight reduction is the value.
      </p>
    </ArticleLayout>
  );
}
