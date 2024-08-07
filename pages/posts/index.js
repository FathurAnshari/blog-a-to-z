import AllPost from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostPage({ posts }) {
  return <AllPost posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
