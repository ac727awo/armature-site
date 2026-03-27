import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "Capital Efficiency Is a Condition, Not a Goal | Armature",
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
      date="February 2026"
      readTime="2 min read"
      title="Capital Efficiency Is a Condition, Not a Goal"
    >
      <p style={p}>
        Most discussions about capital efficiency start in the wrong place.
        Efficiency is not something you achieve — it is a condition you either
        maintain or let erode.
      </p>
      <p style={p}>
        The framing matters. When efficiency is treated as a goal, it becomes
        something you periodically pursue — a tax-loss harvest here, a
        rebalance there. These are reactions. They address symptoms without
        addressing structure.
      </p>
      <p style={p}>
        When efficiency is treated as a condition, it becomes something you
        design into the system from the beginning. Every pool of capital has a
        defined purpose. Every account sits in the right structure. Every
        distribution is made with awareness of what it costs.
      </p>
      <p style={p}>
        The difference between the two is not one decision. It is accumulated
        coherence — or accumulated drag — over years.
      </p>
      <p style={p}>
        For most high-earning professionals, inefficiency is not the result of
        bad advice. It is the result of decisions made sequentially, without a
        governing framework that considers interaction effects. A Roth conversion
        made without reference to income timing. A real estate acquisition
        without reference to existing depreciation schedules. Charitable giving
        managed separately from taxable investment accounts.
      </p>
      <p style={p}>
        Each decision, reviewed in isolation, appears reasonable. Together, they
        represent significant leakage that compounds quietly across decades.
      </p>
      <p style={{ ...p, color: "#9aab9f", fontStyle: "italic" }}>
        Capital efficiency is not an optimization project. It is a design
        principle. And like most design principles, it works best when
        applied before the complexity arrives — not after it has settled in.
      </p>
    </ArticleLayout>
  );
}
