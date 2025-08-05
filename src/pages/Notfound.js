import { useEffect, useState } from "react";
import Postcard from "../components/PostCard";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="home">
      {posts.map((post) => (
        <Postcard key={post.id} {...post}  />
      ))}
    </div>
  );
}

export default Home;
