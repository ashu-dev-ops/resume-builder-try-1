import React from "react";

const Button = ({ action, actionName }) => {
  return (
    <div>
      <button className="btn" onClick={action}>
        {actionName}
      </button>
    </div>
  );
};

export default Button;
