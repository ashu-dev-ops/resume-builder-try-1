import React, { useState } from "react";
import Button from "../../ui/Button";
import styled from "styled-components";

const LandingSeven = () => {
  const [state, setState] = useState(100);
  // const inc = () => {

  // inc();

  return (
    <Wrapper>
      <h2>
        Join over <span>22,017,{state}</span> <br /> users worldwide
      </h2>
      <p>Start for free — try our resume builder now</p>
      <Button actionName="create my resume"></Button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 4vh 8vw;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    line-height: 3rem;
    span {
      color: #f9ba44;
    }
    color: #1a91f0;
    margin-bottom: 5vh;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2vh;
  }
  @media (min-width: 768px) {
    /* grid-template-columns: 1fr 1fr; */
    h2 {
      font-size: 5rem;
      line-height: 4.7rem;
    }
  }
`;

export default LandingSeven;
