// Import Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import Hooks from React
import { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";
/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px",
  color: "#2F3063",
};

const button = {
  backgroundColor: "#2F3063",
  display: "block",
  margin: "auto",
};

function App() {
  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate();
  const url = "https://masonite-blog-backend.herokuapp.com/blog/";

  // state to hold list of blogs
  const [posts, setPosts] = useState([]);

  // an empty blog for initializing the create form
  const nullBlog = {
    title: "",
    body: "",
  };

  const [targetBlog, setTargetBlog] = useState(nullBlog);

  //////////////
  // Functions
  //////////////
  // function to get list of blogs from API
  const getBlog = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  // function to add blog
  const addBlog = async (newBlog) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    //update the list of blogs
    getBlog();
  };
  // to select a blog to edit
  const getTargetBlog = (blog) => {
    setTargetBlog(blog);
    navigate("/edit");
  };

  // update blog for our handlesubmit prop
  const updateBlog = async (blog) => {
    await fetch(url + blog.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    //update our blog
    getBlog();
  };

  const deleteBlog = async (blog) => {
    await fetch(url + blog.id, {
      method: "delete",
    });

    getBlog();
    navigate("/");
  };
  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getBlog();
  }, []);

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Blog</h1>
      <Link to="/new">
        <button style={button}>New Entry</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              edit={getTargetBlog}
              deleteBlog={deleteBlog}
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialBlog={nullBlog}
              handleSubmit={addBlog}
              buttonLabel="Create Entry"
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialBlog={targetBlog}
              handleSubmit={updateBlog}
              buttonLabel="Update Entry"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
