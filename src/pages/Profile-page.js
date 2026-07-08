import { useEffect, useState } from "react";
import Postcard from "../components/PostCard";

export default function Profile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const filteredPosts = data.filter(
          (post) => post.uname === "@abhaykaran"
        );
        setPosts(filteredPosts);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Remove deleted post from state
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
      alert("Error deleting post");
    }
  };

  return (
    <div
      className="scroll-none
    "
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        border: "1px solid rgb(95, 93, 93)",
        height: "100vh",
      }}
    >
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="profile-top-div">
            {/* <img
              className="cover"
              src="dp2.webp"
              alt="Cover"
              width="100%"

              height="210px"
            /> */}

            <div
              style={{ height: "210px", background: "hsl(0, 0%, 14%)" }}
            ></div>
            <div
              style={{
                display: "flex",
                height: "82px",
                borderRadius: "100%",
                margin: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src="dp.jpg"
                  alt="DP"
                  width="82px"
                  height="82px"
                  style={{ borderRadius: "100%" }}
                />
                <div style={{ padding: "20px" }}>
                  <h1>Abhay</h1>
                  <p style={{ color: "grey" }}>@iamabhaykaran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginLeft: "20px", color: " #1da1f2", marginBottom: "5px" }}
        >
          React Developer
        </div>
        <div style={{ marginLeft: "20px", color: "grey" }}>
          Joined September 2019
        </div>
        <br />

        <div style={{ marginLeft: "20px", color: "white" }}>
          8<span style={{ color: "grey" }}> Following</span> 56
          <span style={{ color: "grey" }}> Followers</span>
        </div>
      </div>

      <div style={{ margin: "20px", marginBottom: "100px" }}>
        <br />

        <div>
          <h3> Posts</h3>

          {[...posts].reverse().map((post) => (
            <div key={post.id} style={{ position: "relative" }}>
              <Postcard {...post} />

              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  position: "absolute",
                  right: 20,
                  top: 22,
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
