import ArticleLayout from "../../components/ArticleLayout";

export const metadata = {
  title: "Legacy Is a Decision System, Not an Event | Armature",
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
      title="Legacy Is a Decision System, Not an Event"
    >
      <p style={p}>
        Legacy is usually discussed too late, and too narrowly. In practice,
        legacy is built quietly, long before any formal transfer takes place.
        Every ownership decision, every entity structure, every governance
        choice is a legacy decision — whether it is treated that way or not.
      </p>
      <p style={p}>
        The problem with treating legacy as an event is that events arrive with
        urgency and limited optionality. When legacy becomes the subject of
        conversation only at a major health change or liquidity event, the
        decisions have already been partially constrained by what was done
        before.
      </p>
      <p style={p}>
        A legacy framework designed early does something different: it encodes
        intent before circumstances force it. It establishes who holds
        authority, under what conditions, and what principles govern decisions
        when the principal is no longer present or deciding. That is not a legal
        document. It is a decision system.
      </p>
      <p style={p}>
        The best legacy structures are not complicated. They are clear. Clear
        about roles. Clear about values. Clear about what each generation is
        inheriting — not just in assets, but in operating principles.
      </p>
      <p style={{ ...p, color: "#6a8070", fontStyle: "italic" }}>
        Legacy built with intention looks like continuity. Legacy left to
        improvisation looks like conflict. The difference is not love or
        generosity — it is design.
      </p>
    </ArticleLayout>
  );
}
