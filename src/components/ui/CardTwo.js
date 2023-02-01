import React from "react";

const CardTwo = ({ img, title, para }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3 style={{ color: "#1a1c6a",fontSize: "1.4rem" }}>{title}</h3>
      <p style={{ fontSize: "1.2rem" }}>{para}</p>
    </div>
  );
};

export default CardTwo;
