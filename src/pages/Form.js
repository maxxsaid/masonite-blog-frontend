import { useState } from "react";
import { useNavigate } from "react-router-dom";
const button = {
  backgroundColor: "#2F3063",
  display: "block",
  margin: "auto",
  textAlign: "center",
};
const inputAll = {
  margin: "30px",
  textAlign: "center",
};
const inputStyle = {
  width: "60%",
  margin: "10px",
};
const Form = ({ initialBlog, handleSubmit, buttonLabel }) => {
  const navigate = useNavigate();

  // The Form State
  const [formData, setFormData] = useState(initialBlog);

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault();
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData);
    //push user back to main page
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <div style={inputAll}>
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          value={formData.body}
          name="body"
        />
      </div>
      <input style={button} type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
