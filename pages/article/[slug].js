import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function ArticlePage({
  frontmatter: { title, date, subtitle },
  slug,
  content,
}) {
  return (
    <div className="article">
      <div className="article-header">
        <div className="article-header__top">
          <div className="article-header__link">
            <img src="/left-arrow.svg" />
            <Link href="/">
              <a></a>
            </Link>
          </div>
          <h1>{title}</h1>
        </div>
        <p>{subtitle}</p>
      </div>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("articles"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("articles", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}
