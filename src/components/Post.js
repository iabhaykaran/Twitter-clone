import React, { useState } from "react";

const AddPostCard = ({ onAddPost }) => {
  const [postContent, setPostContent] = useState("");

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  return (
    <div className="add-post-card">
      <div className="post-content">
        <textarea
          rows={3}
          value={postContent}
          onChange={handleInputChange}
          placeholder="What's happening?"
        />
      </div>

      <div className="post-actions">
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default AddPostCard;
