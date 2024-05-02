import PropTypes from "prop-types";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <input {...props} className="input-field" />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
