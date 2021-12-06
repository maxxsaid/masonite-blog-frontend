import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "2px solid #FF8682",
    margin: "20px auto",
    padding: "14px",
    width: "80%",
    color: "#FF8682",
  };

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;
