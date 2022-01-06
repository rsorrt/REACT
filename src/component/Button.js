import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: "steelblue" }}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "bottone"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
