import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiBarChartGroupedLine } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Postcard({ id, img, dp, name, caption, uname }) {
  const navigate = useNavigate();
  const [isFollowing, setisFollowing] = useState(false);

  const following = () => {
    setisFollowing(!isFollowing);
  };
  const handleClick = () => {
    navigate(`/post/${id}`, {
      state: { id, img, dp, name, caption, uname },
    });
  };

  return (
    <div className="post" style={{ cursor: "pointer" }}>
      <div style={{ display: "flex" }}>
        <div className="avtar-div">
          <img src={dp} alt="dp" width="40px" height="40px" />
        </div>
        <div style={{ padding: "3px", width: "100%" }} className="post-div">
          <p style={{ fontWeight: "550" }}>
            {name}
            <span style={{ color: "grey" }}> {uname} </span>
             18h{" "}
            <button className="flw-btn" onClick={following}>
              {isFollowing ? "Following" : "Follow"}
            </button>
          </p>
          <br />
          <p style={{ marginBottom: "15px" }}>{caption}</p>
          <div onClick={handleClick} className="post-img-div">
            <img
              src={img}
              // src={`http://localhost:5000/uploads/${img}`}
              width="100%"
              height="100%"
              alt="post"
            />
          </div>

          <div
            style={{
              color: "grey",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <p>
                <FaRegComment />
              </p>
              <p> 2K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <FaRetweet />
              </p>
              <p> 12K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <FaRegHeart />
              </p>
              <p> 4.5K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <RiBarChartGroupedLine />
              </p>
              <p> 20k</p>
            </div>

            {/* <FaRetweet />

            <FaRegHeart />

            <RiBarChartGroupedLine /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
