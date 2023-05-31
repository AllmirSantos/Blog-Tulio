import React from "react";
import { Section } from "./styles";

export default function Post({ post }) {
  return (
    <Section>
      <div className="featured-post-container">
        <div>
          <img
            alt=""
            className="image-featured-post"
            src={post?.hero?.data?.attributes?.formats?.medium?.url}
          />
        </div>
        <span></span>
        <div className="text-box">
          <h2 className="text-title">{post.title}</h2>
          <p className="text-description">{post.description}</p>
          <div className="box-text-date">
            <p className="text-date">{post.date}</p>
          </div>
        </div>
      </div>
      <span className="shadow-bottom" />
    </Section>
  );
}
