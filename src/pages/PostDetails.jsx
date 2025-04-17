import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "..//App.css";

export default function PostDetails() {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state) return <div>Post not found</div>;

  const { img, dp, name, caption, uname } = state;

  return (
    <div className="post-detail-page">
      <div className="post-detail">
        <div className="post-detail-header">
          <img src={process.env.PUBLIC_URL + "/" + dp} alt="dp" />
          <div>
            <div className="name">
              <p>{name}</p>
              <p className="username">{uname}</p>
            </div>
          </div>
        </div>

        <div className="post-detail-caption">{caption}</div>

        {img && (
          <img
            src={process.env.PUBLIC_URL + "/" + img}
            alt="post"
            className="post-image"
          />
        )}

        <div></div>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}
