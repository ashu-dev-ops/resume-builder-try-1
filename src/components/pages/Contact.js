import React from "react";
import styled from "styled-components";
import helpVideo from "../assets/help.mp4";

const Contact = () => {
  return (
    <Wrapper>
      <div className="page-100-cente">
        <div className="video-container">
          <video src={helpVideo} autoplay loop muted></video>
        </div>
        <h2>Contact Page</h2>
        <p>
          Need help with Simplenote? Check out our Help page for frequently
          asked questions. If you can’t find an answer there, email us at
          support@simplenote.com and one of our Happiness Engineers will be in
          touch.
        </p>
        <div className="border">
          <form
            className="contact-form"
            action="https://formspree.io/f/xjvdbnoj"
            method="POST"
          >
            <div className="fi-1">
              <label className="label-column ">
                <div className="text">enter your email:</div>
                <input type="email" name="email" />
              </label>
            </div>
            <div className="fi-1">
              <label className="label-column">
                <div className="text">Your message:</div>
                <textarea rows="15" name="message"></textarea>
              </label>
            </div>

            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* position: relative; */
  padding: 2rem 0rem;
  .video-container {
    position: absolute;
    height: 60vh;
    width: 20vw;
    display: none;
    /* background-color: red; */
    right: 0;
    video {
      height: 60vh;
      width: 20vw;
    }
  }
  /* background-color: red; */
  h2 {
    text-align: center;
    font-size: 8vh;
    color: var(--primary-4);
  }
  .border {
    border: 2px solid white;
    width: 70%;
    margin: 0 auto;
    padding: 0 1vh;
    border-radius: 10px;
  }
  p {
    margin: 2vh 5vw;
    font-size: 3vh;
    /* font-weight: bold; */
    /* color: white; */
    color: var(--primary-5);
    text-align: center;
  }
  .contact-from {
    display: flex;
    flex-direction: column;
    background-color: red;
    align-items: center;
    border: 12px solid white;
    /* width: 70%; */
  }
  .label-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2vh auto;
    /* background-color: red; */
    .text {
      /* text-align: center; */
      margin-bottom: 1vh;
      font-size: 2.5vh;
      font-weight: lighter;
      /* color: white; */
      color: var(--primary-4);
      font-weight: bold;
    }
    textarea {
      resize: none;
      border-radius: 15px;
      padding: 1vw;
    }
    input {
      padding: 0.5vw;
    }
  }
  .row {
    flex-direction: row;
  }
  .send-btn {
    /* margin: auto; */
    display: block;
    margin: 0 auto;
    position: relative;
    /* top: 15vh; */
    text-align: center;
    /* display: inline-block; */
    /* width: 10rem; */
    margin-bottom: 1vh;
    background-color: #618df2;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    font-weight: 200;
    border: none;
    color: white;
    border-radius: 10px;
  }
  @media screen and (min-width: 882px) {
    padding: 2rem 7rem;
    p {
      margin: 2vh 15vw;
      font-size: 3vh;
      /* font-weight: bold; */
      /* color: white; */
      color: var(--primary-5);
      text-align: left;
    }
    .video-container {
      display: flex;
      position: absolute;
      height: 60vh;
      width: 20vw;
      /* background-color: red; */
      right: 0;
      video {
        height: 60vh;
        width: 20vw;
      }
    }
  }
`;

export default Contact;
