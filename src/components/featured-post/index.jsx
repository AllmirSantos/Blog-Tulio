import React from "react";
import { Section } from "./styles";

export default function FeaturedPost({ post }) {
  return (
    <Section>
      <div className="featured-post-container">
        <div className="box-img">
          <img
            alt=""
            className="image-featured-post"
            src={post?.hero?.data?.attributes?.formats?.medium?.url}
          />
          <span className="shadow-bottom" />
        </div>
        <div className="box-content">
          <div>
            <h2 className="text-title">{post.title}</h2>
            <p className="text-description">{post.description}</p>
            <p className="text-date">{post.date}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
