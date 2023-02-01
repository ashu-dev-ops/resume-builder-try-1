import React, { useRef } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import { useResumeContext } from "../context/ResumeContext";
import ReactToPrint from "react-to-print";
import PrintResume from "./PrintResume";
import basicInfoImg from "../assets/basic_info.svg";

const BasicInfo = () => {
  const resumeRef = useRef();
  const { setEmail, setLastName, setName, setPhone } = useUserContext();
  const { setBasicInfo, setAchivement } = useResumeContext();
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  // const eRef=useRef()
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    setEmail(emailRef.current.value);
    setName(nameRef.current.value);
    setLastName(lastNameRef.current.value);
    setPhone(phoneRef.current.value);
    setBasicInfo(false);
    setAchivement(true);
  };
  return (
    <>
      {/* <h2>eter your basic info</h2> */}
      <Wrapper className="page-100-center ">
        <h2>eter your basic info</h2>
        <div className="left">
          <img src={basicInfoImg} alt="" srcset="" />
        </div>
        <div className="right">
          <form onSubmit={submitHandler}>
            <div className="row-one">
              <div className="row-1">
                <label>name</label>
                <input type="text" name="name" ref={nameRef} />
              </div>
              <div className="row-1">
                <label>last name</label>
                <input type="text" name="lastName" ref={lastNameRef} />
              </div>
            </div>
            <div className="row-one">
              <div className="row-1">
                <label>phone number</label>
                <input name="phoneNumber" type="text" ref={phoneRef} />
              </div>
              <div className="row-1">
                <label>email</label>
                <input name="email" type="text" ref={emailRef} />
              </div>
            </div>
            <button className="btn" type="submit">
              next
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  /* padding: 10vw 10vw; */
  display: grid;
  position: relative;
  width: 100%;
  background-color: var(--primary-1);
  padding-top: 10vw;
  /* padding: 0 50vw; */
  padding-left: 20vw;
  padding-right: 20vw;

  h2 {
    position: absolute;
    text-align: center;
    left: 40%;
  }
  /* grid-auto-flow: dense; */
  .left {
    padding: 2vw 0;
    height: 60vh;
    width: 100%;
    /* background-color: red; */
    img {
      /* width: 100%; */
      height: 100%;
      width: 100%;
    }
  }
  .right {
    background-color: white;
    margin: 0vw 2vw;
    margin-bottom: 10vw;
    border-radius: 10px;
    padding: 1vw;
    -webkit-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    form {
      display: grid;
      align-items: center;

      label {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 2vw; */
        font-weight: bold;
        color: #322532;
      }
      input {
        margin-bottom: 1vw;
        width: 100%;
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--backgroundColor);
        border: 1px solid #0f141e;
      }
      textarea {
        margin-bottom: 1vw;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--backgroundColor);
        border: 1px solid #0f141e;
      }
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default BasicInfo;
