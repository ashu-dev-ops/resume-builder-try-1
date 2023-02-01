import React from "react";
import styled from "styled-components";
import { cardTwoInfo } from "../../constants/util";
import CardTwo from "../ui/CardTwo";
import main from "../assets/useTheBest.svg";

const UseTheBest = () => {
  return (
    <Wrapper>
      <div className="row-1">
        <img src={main} alt="" />
        <div className="content">
          <h2>Use the best resume maker as your guide</h2>
          <p>
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </p>

          <div className="btn-buttons">
            <button className="btn">create my resume</button>
            <button className="btn">watch a video</button>
            {/* <button></button> */}
          </div>
        </div>
      </div>
      <div className="row-2">
        {cardTwoInfo.map((i) => {
          return <CardTwo className="card" key={i.id} {...i} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  padding: 1rem;
  margin: 0;
  background-color: var(--primary-1);
  .row-1 {
    width: 100%;
    min-height: 50vh;
    padding: 0;
    display: grid;
    grid-gap: 1rem;
    margin: 0rem 0rem; /* background-color: orange; */
    img {
      /* height: vh; */
      width: 80%;
      justify-self: center;
    }
    .content {
      h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--primary-6);
      }
      p {
        font-size: 1.2rem;
        color: var(--primary-6);
        margin-bottom: 3vw;
      }
      .btn-buttons {
        /* margin-top: auto; */
        display: flex;
        /* gap: 1rem; */
        justify-content: space-around;
        /* flex-direction: column; */
      }
      .btn-buttons button {
        padding: 1rem;
      }
    }
  }
  .row-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* background-color: red; */
    /* margin: 0 5vw; */
    margin-bottom: 7vh;
    grid-gap: 1rem;
    /* .card {
      margin-right: 2vw;
    } */
  }
  @media (min-width: 768px) {
    /* grid-template-columns: 1fr 1fr; */
    padding: 0 15vw;
    .row-1 {
      grid-template-columns: 1fr 1fr;
      .content {
        h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--primary-6);
        }
        p {
          font-size: 1.2rem;
          color: var(--primary-6);
          margin-bottom: 3vw;
        }
        .btn-buttons {
          /* margin-top: auto; */
          display: flex;
          /* gap: 1rem; */
          justify-content: space-between;
        }
      }
    }
  }
`;

export default UseTheBest;
