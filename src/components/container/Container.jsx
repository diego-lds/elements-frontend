import PropTypes from "prop-types";

const Container = ({ children, margin }) => {
  const containerStyle = {
    margin: margin,
    padding: "20px",
    border: "1px solid #ccc",
  };

  return <div style={containerStyle}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.string.isRequired,
};

export default Container;
