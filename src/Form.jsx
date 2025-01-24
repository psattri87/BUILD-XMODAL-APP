import "./App.css"; // Import the CSS file
import PropTypes from "prop-types";

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Fill Details</h2>
        <label>Username:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Email Address:</label>
        <input type="email" name="name" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
