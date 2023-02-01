import React from "react";
import { cardThreeInfo } from "../../constants/util";
import CardThree from "../ui/CardThree";
import styled from "styled-components";

const Feature = () => {
  return (
    <Wrapper>
      <h2>Features designed to help you win your dream job</h2>
      <div className="container">
        {cardThreeInfo.map((i) => {
          return <CardThree key={i.id} {...i} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3vh 8vw;
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    align-items: center;
  }
`;

export default Feature;
