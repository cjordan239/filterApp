import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="filter-button">
      {children}
    </button>
  );
};

export default Button;
