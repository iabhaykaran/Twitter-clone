import { useState } from "react";

function PostForm() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (caption.length > 150) {
      alert("Caption should be less than 150 characters.");
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption); // Changed key
    formData.append("img", image); // Changed key

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add post");
      }

      alert("Post added successfully!");
      setCaption("");
      setImage(null);
    } catch (error) {
      console.error("Error adding post:", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's happening?"
        value={caption}
        onChange={handleCaptionChange}
        maxLength={150}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
