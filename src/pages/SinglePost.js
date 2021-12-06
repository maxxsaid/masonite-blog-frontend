import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts, edit, deleteBlog }) => {
  // get the params from the url
  const params = useParams();
  const id = parseInt(params.id);

  // find the particular post the user wants to see based on the param
  const post = posts.find((p) => p.id === id);
  console.log(post);

  ////////////////////
  // Style Object
  /////////////////////
  const div = {
    textAlign: "center",
    border: "2px solid #FF8682",
    margin: "20px auto",
    padding: "14px",
    width: "80%",
    color: "#FF8682",
  };
  const button = {
    backgroundColor: "#2F3063",
    display: "inline-block",
    margin: "2px",
  };

  return (
    <div style={div}>
      <h1>{post?.title}</h1>
      <h2>{post?.body}</h2>
      <button style={button} onClick={() => deleteBlog(post)}>
        Delete
      </button>
      <button style={button} onClick={() => edit(post)}>
        Edit
      </button>
      <Link to="/">
        <button style={button}>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;
