import React, { useState, useEffect } from "react";

import { Section } from "./styles.js";
import FeaturedPost from "../../components/featured-post/index.jsx";
import PostList from "../../components/post-list/index.jsx";
import Loading from "../../components/loading";

export default function Home() {
  const [removeLoading, setRemoveLoading] = useState(false);

  const [posts, setPosts] = useState();
  async function getPosts() {
    const response = await fetch(
      "https://cms-blog-tutorial.herokuapp.com/api/posts?populate=*"
    );

    const data = await response.json();

    setPosts(data.data);

    setRemoveLoading(true);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Section>
      <div className="BoxTop">
        <div className="BoxText">
          <h1>Blog da GO-K</h1>
          <br />
          <p>
            Lorem ipsum hac posuere taciti iaculis curabitur ultrices primis,
            lobortis sociosqu egestas rutrum taciti leo nisl quis leo, luctus
            consequat lectus luctus risus at risus.
          </p>
        </div>
        <div className="BoxImageMouse">
          <img
            className="ImageMouseArrow"
            alt=""
            src="/assets/images/arrowBottom.png"
          />
          <img className="ImageMouse" alt="" src="/assets/images/mouse.png" />
        </div>
      </div>
      <div>
        {!removeLoading && <Loading />}

        {posts && posts.length > 0 && (
          <FeaturedPost post={posts[0].attributes} />
        )}
        <PostList posts={posts} />
      </div>
    </Section>
  );
}
