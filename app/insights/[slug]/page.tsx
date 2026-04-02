import { getContent } from "../../../lib/content";
import ArticleLayout from "../../components/ArticleLayout";

interface Article {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
  closing: string;
}

interface InsightsData {
  articles: Article[];
}

const p: React.CSSProperties = {
  fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  fontSize: "17px",
  color: "#4a6155",
  lineHeight: "1.8",
  margin: "0 0 24px 0",
};

const closingStyle: React.CSSProperties = {
  ...p,
  color: "#6a8070",
  fontStyle: "italic",
};

export async function generateStaticParams() {
  const data = getContent<InsightsData>("insights");
  return data.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getContent<InsightsData>("insights");
  const article = data.articles.find((a) => a.slug === slug);
  return {
    title: article ? `${article.title} | Armature Wealth Office` : "Article Not Found",
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getContent<InsightsData>("insights");
  const article = data.articles.find((a) => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <ArticleLayout
      category={article.category}
      date={article.date}
      readTime={article.readTime}
      title={article.title}
    >
      {article.paragraphs.map((paragraph, index) => (
        <p key={index} style={p}>
          {paragraph}
        </p>
      ))}
      <p style={closingStyle}>{article.closing}</p>
    </ArticleLayout>
  );
}
