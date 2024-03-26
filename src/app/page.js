import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const blogPosts = await getBlogPostList();
  return (
    <RespectMotionPreferences>
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>Latest Content:</h1>

        {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={publishedOn}
          />
        ))}
      </div>
    </RespectMotionPreferences>
  );
}

export default Home;
