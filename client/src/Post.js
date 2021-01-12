import React, { useState } from "react";

const Post = () => {
  const [post, setPost] = useState("");

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="input your text here" value={post} />
        <button>OK</button>
      </form>
    </div>
  );
};

export default Post;
