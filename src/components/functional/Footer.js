import React from "react";
import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <Wrapper>
      <div className="box-one">
        <h3>Connect with us on social media</h3>
        <div className="img-container">
          <BsFacebook />
          <BsLinkedin />
          <BsYoutube />
          <AiFillInstagram />
        </div>
      </div>
      <div className="box-two">
        <h4>International</h4>
        <p>Copyright 2023 - Resume.io</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  background-color: #0f141e;
  min-height: 20vh;
  align-items: center;
  justify-content: center;
  .box-one {
    h3 {
      color: white;
      font-size: 1.3rem;
    }
    .img-container {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: white;
      font-size: 2rem;
    }
    padding: 1rem;
  }
  .box-two {
    display: flex;
    align-items: center;
    flex-direction: column;

    h4 {
      color: white;
    }
    p {
      color: white;
    }
    padding: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Footer;
