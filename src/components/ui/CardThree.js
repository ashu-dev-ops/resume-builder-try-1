import React from "react";
import styled from "styled-components";

const CardThree = ({ img, title, para }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div className="content">
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column; */
  margin: 1vw;
  @media (max-width: 768px) {
    /* grid-template-columns: 1fr 1fr; */
    /* align-items: center; */
  }
`;

export default CardThree;
