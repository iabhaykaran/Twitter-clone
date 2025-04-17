import React from "react";
import { NavLink } from "react-router-dom";
import Postcard from "../components/Post-card";

import AddPostCard from "../components/Post";
import Suggestion from "../components/Suggestion";
import WhastHapeening from "../components/WhastHapeening";

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
          <Postcard
            img="post.jpeg"
            dp="dp.jpg"
            name="Abhay Tiwari"
            caption=" #BreakingNews The definition of a woman and sex in the Equality Act relates to “a biological woman and biological sex”, the Supreme Court has ruled as it unanimously allowed an appeal from a campaign group  "
            uname="@abhaykaran"
          />
          <Postcard
            img="post22.jpeg"
            dp="dp2.webp"
            caption="Dear 'trans women',You are men. You are men biologically and in law. You will always be men and you always were men. Now stay out of women's spaces.Best"
            name="Yash Maheshwari"
            uname="@yashmaheshwari"
          />
          <Postcard
            img="post3.jpg"
            dp="dp.jpg"
            name="Abhay Tiwari"
            uname="@abhaykaran"
            caption="Lee Corso, the legendary ESPN broadcaster and former coach who has entertained fans for 38 college football seasons, will make his final headgear pick on College GameDay on Saturday, Aug. 30 – Week 1 of the 2025 college football season."
          />
          <Postcard
            img="post2.jpeg"
            dp="dp2.webp"
            caption="    Deciline of wesrtern Civilizartion."
            name="Yash Maheshwari"
            uname="@yashmaheshwari"
          />
         

          <br />
          <br />
          <br />
          <br />
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
