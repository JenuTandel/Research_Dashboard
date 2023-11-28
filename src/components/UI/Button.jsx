import React from "react";

const Button = ({ onClick }) => {
  return (
    <div type="button" className="btn btn-primary" onClick={onClick}>
      Add New Database
    </div>
  );
};

export default Button;
