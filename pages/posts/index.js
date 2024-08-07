import Head from "next/head";

import AllPost from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPost posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
