import React, { useState } from "react";
import oneImg from "../assets/temp-1.jpg";
import twoImg from "../assets/temp-2.jpg";
import { useResumeContext } from "../context/ResumeContext";
import styled from "styled-components";

const ChooseTemplate = () => {
  const { setTemplpate, setBasicInfo, setTemplpateImage } = useResumeContext();
  const [state, setState] = useState();
  return (
    <div className="page-100-center">
      <Wrapper>
        <h1>choose template</h1>
        <div className="container">
          <div className="one">
            <img src={oneImg} alt="" />
            <button
              className="btn"
              onClick={() => {
                setTemplpate(false);
                setBasicInfo(true);
                setTemplpateImage("one");
              }}
            >
              this one
            </button>
          </div>
          <div className="two">
            <img src={twoImg} alt="" />
            <button className="btn" onClick={() => setTemplpateImage("two")}>
              this one
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-around;
    .one {
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        height: 60vh;
      }
    }
    .two {
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        height: 60vh;
      }
    }
  }
`;

export default ChooseTemplate;
