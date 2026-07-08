import React from "react";
import { NavLink } from "react-router-dom";
import Postcard from "../components/PostCard";
// import { useEffect, useState } from "react";
import Suggestion from "../components/Suggestion";
import Postform from "../components/PostForm";
import WhastHapeening from "../components/WhastHapeening";
import posts from "../Data";
// import PostForm from "./Notfound";

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/posts")
  //     .then((res) => res.json())
  //     .then(setData)
  //     .catch(console.error);
  // }, []);

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
          <Postform />

          {posts.map((post) => (
            <Postcard key={post.id} {...post} />
          ))}

          {/* {data.map((post) => (
            <Postcard key={post.id} {...post} />
          ))}      nnnnnooooooooooooooooooooo*/}

          {/* {[...data].reverse().map((post) => (
            <Postcard key={post.id} {...post} />
          ))}  this need chnge and img in post card chnge  */}

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


// right code below //////////////////////////////////////add

// import React from "react";
// import { NavLink } from "react-router-dom";
// import Postcard from "../components/PostCard";
// import { useEffect, useState } from "react";
// import Suggestion from "../components/Suggestion";
// import Postform from "../components/PostForm";
// import WhastHapeening from "../components/WhastHapeening";

// export default function Home() {
//   const [data, setData] = useState([]);

//   const fetchPosts = () => {
//     fetch("http://localhost:5000/api/posts")
//       .then((res) => res.json())
//       .then(setData)
//       .catch(console.error);
//   };

//   // useEffect(() => {
//   //   fetchPosts();
//   // }, []);

//   useEffect(() => {
//     fetchPosts();
//     const interval = setInterval(fetchPosts, 1000); // every 5 seconds
//     return () => clearInterval(interval);
//   }, []);



//   return (
//     <div className="hero">
//       <div className="xxx">
//         <div className="home-nav">
//           <div className="home-nav-link">
//             <NavLink to="/home">For you</NavLink>
//           </div>

//           <div className="home-nav-link">
//             <a href="/following">following</a>
//           </div>
//         </div>

//         <div className="home">
//           {/* Pass fetchPosts as callback to Postform */}
//           <Postform onPostAdded={fetchPosts} />

//           {[...data].reverse().map((post) => (
//             <Postcard key={post.id} {...post} />
//           ))}

//           <br />
//           <br />
//         </div>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <WhastHapeening />
//         <Suggestion />
//         <div></div>
//       </div>
//     </div>
//   );
// }
