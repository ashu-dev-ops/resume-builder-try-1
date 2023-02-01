import React from "react";
import imgOne from "../../assets/home-five-one.jpg";
import imgTwo from "../../assets/home-five-two.jpg";
import imgThree from "../../assets/home-five-three.jpg";
import styled from "styled-components";

const LandingFive = () => {
  return (
    <div>
      <Wrapper>
        <div className="left">
          <p>START BUILDING YOUR CAREER</p>
          <h2>Professional resumes for effective job interviews</h2>
          <h5>
            A great job application leads to a good interview. An amazing resume
            is what makes it all possible. Start off strong with the hiring
            manager by creating a positive professional image. A job interview
            can be much easier if they have a favorable view of your CV and
            cover letter
          </h5>
        </div>
        <div className="right">
          <img className="r-img one" src={imgOne} alt="" />
          <img className="r-img two" src={imgTwo} alt="" />
          <img className="r-img three" src={imgThree} alt="" />
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  padding: 4vh 8vw;
  background-color: rgb(40, 43, 143);
  .left {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    p {
      margin-bottom: 0.5vw;
      margin-top: 20%;
      color: #ecaf61;
      font-weight: bold;
      text-align: center;
    }
    h2 {
      font-size: 7vh;
      margin-bottom: 2vw;
      font-weight: 900;
      color: white;
      text-align: center;
    }
    h5 {
      font-size: 1.3rem;
      color: white;
      font-weight: lighter;
    }
  }
  .right {
    position: relative;
    height: 60vh;
    .r-img {
      position: absolute;
      /* right: */
      left: 30%;
      height: 40vh;
      top: 20%;
    }
    .one {
      transform: rotate(-25deg);
      /* transform: translateX(300); */
      left: 15%;
    }
    .two {
      transform: rotate(0deg);
    }
    .three {
      transform: rotate(15deg);
      left: 40%;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .left {
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
    .right {
        .r-img  {
        height: 60vh;
      }
    }
  }
`;

export default LandingFive;
