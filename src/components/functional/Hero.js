import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import { useUserContext } from "../context/UserContext";
const Hero = () => {
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <div className="content">
        <p>ONLINE RESUME BUILDER</p>
        <h1>
          Only 2% of resumes make it past the first round. Be in the top 2%
        </h1>
        <h4>
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </h4>
        <button>
          <Link to="/resume">
            {myUser ? "create my resume" : "sign up now"}
          </Link>
        </button>

        <h6>19,899 resumes created today</h6>
      </div>
      <img src={hero} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* margin: 0 20vw; */
  padding: 0 10vw;
  background-color: #eff2f9;

  .content {
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      align-self: center;
      padding: 0.5rem 1rem;
      font-size: 2rem;
      /* margin-top: 2vh; */
      /* margin: 2rem; */
      margin-bottom: 2rem;
      font-weight: 500;
      background-color: #1a91f0;
      border: none;
      color: white;
      a {
        color: white;
      }
      /* margin: 0 40%; */
    }
    button:hover {
      background-color: ;
    }
    p {
      text-align: center;
      font-weight: bolder;
      font-size: 2vh;
    }
    h1 {
      text-align: center;
      font-size: 2.8rem;
      font-weight: bolder;
      color: var(--primary-6);
      /* font-family: "TTcommons"; */
    }
    h4 {
      text-align: center;
      margin: 1rem 5vw;
      font-weight: 500;
      color: #1e2532;
      font-size: 1.5rem;
    }
    h6 {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    /* grid-template-columns: 1fr 1fr; */
    padding: 0 20vw;
  }
`;

export default Hero;
