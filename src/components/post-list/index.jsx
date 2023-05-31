import React from "react";
import { Section } from "./styles";
import Post from "../../components/post/index.jsx";

export default function PostList({ posts, isLoading }) {
  return (
    <Section>
      {posts &&
        posts.map((post) => {
          return <Post post={post.attributes} />;
        })}
    </Section>
  );
}
