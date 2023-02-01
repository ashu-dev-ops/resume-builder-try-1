import React, { useRef, Component } from "react";
import ReactToPrint from "react-to-print";
import Showprint from "./Showprint";
import styled from "styled-components";
import TempOne from "./printTemplates/TempOne";
import { AiOutlineCloudDownload } from "react-icons/ai";
import printVideo from "../assets/print-preview.mp4";
import { useUserContext } from "../context/UserContext";
// import Showprint from './Showprint.js'

const Wrapper = styled.section`
  display: grid;
  /* background-color: red; */
  /* align-items: center; */
  margin: 0;
  padding: 1rem;

  .left {
    /* display: block; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* justify-content: space-around; */

    a {
      font-size: 5rem;
    }
  }
  .right {
    padding: 2vw 6vw;
    /* padding-bottom: 7vw; */
    background-color: #bfecf0;
    border-radius: 30px;
    /* grid-column-start: 1; */
    grid-row-start: 1;
  }
  .video-container {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    .left {
      grid-row-start: 1;
    }
    .right {
      padding: 2vw 6vw;
      /* background-color: blue; */
    }
    .video-container {
      display: initial;
      /* position: absolute; */
      height: 30vh;
      width: 20vw;
      /* background-color: blue; */
      /* right: 0; */
      video {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
export default () => {
  const componentRef = useRef();
  const { closeSidebar, loginWithRedirect, myUser, logout } = useUserContext();

  // console.log(myUser.name);
  // console.log(printVideo);
  return (
    <Wrapper className="page-100-cente">
      <div className="left">
        <ReactToPrint
          trigger={() => (
            <a href="#">
              <AiOutlineCloudDownload color="#3f8eec" />
            </a>
          )}
          content={() => componentRef.current}
        />
        {/* <Showprint refPropWithAnotherName={componentRef} /> */}
        <div className="video-container">
          <video loop autoplay="" muted>
            <source src={printVideo} type="video/mp4" />
          </video>

          {/* <video></video> */}
        </div>
        <h2>
          {myUser
            ? `hello ${myUser&&myUser?.name} print your resume by clicking on download icon`
            : "hello User  print your resume by clicking on download ico"}
        </h2>
      </div>
      <div className="right">
        <TempOne refPropWithAnotherName={componentRef} />
      </div>
    </Wrapper>
  );
};
