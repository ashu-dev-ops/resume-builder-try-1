import React, { useState } from "react";
import Button from "../../ui/Button";
import main from "../../assets/landing-4.svg";
import cardOneImg from "../../assets/home-four-one.svg";
import cardTwoImg from "../../assets/home-four-two.svg";
import cardThreeImg from "../../assets/home-four-three.svg";
import styled from "styled-components";

const LandingFour = () => {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowtwo] = useState(false);
  const [showthree, setShowthree] = useState(false);
  const showOneHandler = () => {
    setShowOne(!showOne);
  };
  const showTwoHandler = () => {
    setShowtwo(!showTwo);
  };
  const showThreeHandler = () => {
    setShowthree(!showTwo);
  };
  return (
    <Wrapper>
      <div className="box-one">
        <img src={main} alt="" srcset="" />
        <h2>Create perfect resumes for the modern job market</h2>
        <p>
          Creating a resume or cover letter has never been this easy! In three
          simple steps, create the perfect document to impress hiring managers
          and employers. Minimum time, maximum professional quality.
        </p>
        <div className="btn-row">
          <button
            className={showOne ? "active" : "non-active"}
            onClick={() => {
              setShowOne(true);
              setShowtwo(false);
              setShowthree(false);
            }}
          >
            sign up
          </button>
          <button
            className={showTwo ? "active" : "non-active"}
            onClick={() => {
              setShowOne(false);
              setShowtwo((prv) => true);
              setShowthree(false);
            }}
          >
            create
          </button>
          <button
            className={showthree ? "active" : "non-active"}
            onClick={() => {
              setShowOne(false);
              setShowtwo(false);
              setShowthree(true);
            }}
          >
            download
          </button>
        </div>
      </div>
      <div className="box-two">
        {showOne && (
          <div className="card">
            <div className="right">
              <img src={cardOneImg} alt="" />
            </div>
            <div className="left">
              <h3>your first steps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                a modi architecto atque dolorem quo nam nemo, impedit nihil
                adipisci vero quis officiis ex sunt ipsum sit facilis nesciunt
                beatae at officia dolore blanditiis. Eius.
              </p>
            </div>
          </div>
        )}
        {showTwo && (
          <div className="card">
            <div className="right">
              <img src={cardTwoImg} alt="" />
            </div>
            <div className="left">
              <h3>second</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                a modi architecto atque dolorem quo nam nemo, impedit nihil
                adipisci vero quis officiis ex sunt ipsum sit facilis nesciunt
                beatae at officia dolore blanditiis. Eius.
              </p>
            </div>
          </div>
        )}
        {showthree && (
          <div className="card">
            <div className="right">
              <img src={cardThreeImg} alt="" />
            </div>
            <div className="left">
              <h3>your first steps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                a modi architecto atque dolorem quo nam nemo, impedit nihil
                adipisci vero quis officiis ex sunt ipsum sit facilis nesciunt
                beatae at officia dolore blanditiis. Eius.
              </p>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  padding: 5vh 10vw;
  align-items: center;
  background-color: var(--primary-1);
  .box-one {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-row {
      display: flex;
      justify-content: space-between;
      /* background-color: red; */
      /* width: 60%; */
      /* padding: 1vw; height: */
      button {
        padding: 1vw 4vw;
        /* background-color: transparent; */

        cursor: pointer;
        border: none;
        padding-top: 1vw;
        font-size: 2rem;
        font-weight: bold;
      }
    }
    p {
      padding: 1vw 2vw;
      font-size: 1.3rem;
    }
    h2 {
      font-size: 2rem;
    }

    img {
      height: 60px;
      width: 60px;
    }
  }
  .active {
    background-color: white;
    -webkit-box-shadow: -4px -24px 124px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -4px -24px 124px -4px rgba(0, 0, 0, 0.75);
    box-shadow: -4px -24px 124px -4px rgba(0, 0, 0, 0.75);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .non-active {
    color: var(--primary-3);
  }
  .box-two {
    background-color: white;
    .card {
      display: grid;
      padding-top: 1rem;
      border-radius: 10px;
      -webkit-box-shadow: 0px 75px 84px -4px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 75px 84px -4px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 75px 84px -4px rgba(0, 0, 0, 0.75);
      /* align-items: center; */
      .left {
        padding: 1vw;
        h3 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
          color: #1a1c6a;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .box-two {
      .card {
        grid-template-columns: 1fr 1fr;
      }
      /* display: grid; */
    }
  }
`;

export default LandingFour;
