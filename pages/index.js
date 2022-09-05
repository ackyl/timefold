import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Article from "../components/Article";
import { sortByDate } from "../utils";

import Link from "next/link";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Timefold</title>
        <link rel="icon" href="/timefold-logo.svg" />
      </Head>

      <div className="home-header">
        <img src="/images/timefold-header.png"></img>
        <p>All about game design, development, and everything in between.</p>
      </div>

      <div className="articles-title">
        <p>New Articles</p>
        <div></div>
      </div>

      <div className="articles">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // This happens in the server

  // Get files from the article dir
  const files = fs.readdirSync(path.join("articles"));

  // Get slug and frontmatter from articles
  const articles = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles: articles.sort(sortByDate),
    },
  };
}
