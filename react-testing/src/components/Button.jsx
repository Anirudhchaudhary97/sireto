import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, primary,backgroundColor}) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black';

  const defaultStyle = primary
    ? 'text-white border border-blue-500'
    : 'text-black border border-gray-300';
  const bgColor = backgroundColor ? { backgroundColor } : {};

  
  return (
    <button
      style={bgColor}
      className={`px-4 py-2 rounded ${defaultStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  primary: false,
  backgroundColor: null, // Default to no specific color
};

export default Button;
