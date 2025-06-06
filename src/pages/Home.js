import React from "react";
import { NavLink } from "react-router-dom";
import Postcard from "../components/Post-card";

import AddPostCard from "../components/Post";
import Suggestion from "../components/Suggestion";
import WhastHapeening from "../components/WhastHapeening";
import posts from "../Data";
export default function Home() {
  return (
    <div className="hero">
      <div>
        <div className="home-nav">
          <div className="home-nav-link">
            <NavLink to="/home">feed</NavLink>
          </div>

          <div className="home-nav-link">
            <a href="/following">following</a>
          </div>
        </div>

        <div className="home">
          <AddPostCard />
          {posts.map((post) => (
            <Postcard key={post.id} {...post} />
          ))}
          <br />
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <WhastHapeening />
        <Suggestion />
        <div></div>
      </div>
    </div>
  );
}
