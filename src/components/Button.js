import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

function Button({ text, color, action }) {
  return (
    <button className={`btn btn-${color}`} onClick={action}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
