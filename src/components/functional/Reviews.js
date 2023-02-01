import React from "react";
import styled from "styled-components";
import Stars from "../ui/Stars";

const Reviews = () => {
  return (
    <div>
      <h2>Reviewed by the community. Trusted by professionals</h2>
      <div className="row">
        <div className="row-item-one">
          <h3>4 out of five</h3>
          <Stars />
          <p>based on 9999 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
