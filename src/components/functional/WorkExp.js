import React, { useRef } from "react";
import styled from "styled-components";
import workImg from "../assets/workexp.svg";
// import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import { useResumeContext } from "../context/ResumeContext";
const WorkExp = () => {
  const { setProject, setWorkExp, setResumePrint, setUploadPropilePic } =
    useResumeContext();
  const { saveWorkExp } = useUserContext();
  const companyName = useRef();
  const work_desc = useRef();
  const submitHnadler = (e) => {
    e.preventDefault();
    setWorkExp(false);
    // setResumePrint(true);
    setUploadPropilePic(true);
    saveWorkExp({
      companyName: companyName.current.value,
      work_desc: work_desc.current.value,
    });
  };
  return (
    <div>
      <Wrapper className="page-100-center">
        {/* <h1>work expericne</h1> */}
        <div className="left">
          <img src={workImg} alt="" />
        </div>
        <div className="right">
          <form onSubmit={submitHnadler}>
            <label htmlFor="">company name:</label>
            {/* <input type="text" /> */}
            <input type="text" name="companyName" ref={companyName} />
            <label>enter yoy expericne below:</label>
            <textarea rows="10" name="work_desc" ref={work_desc}></textarea>
            <button className="btn" type="submit">
              next
            </button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  display: grid;
  width: 100%;
  padding-top: 10vw;
  /* align-items: center; */
  /* padding: 0 50vw; */
  padding-left: 20vw;
  padding-right: 20vw;
  /* align-items: center; */
  /* grid-auto-flow: dense; */
  background-color: var(--primary-1);
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
    margin: 1vw;
    -webkit-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    height: 60vh;
    form {
      display: grid;
      align-items: center;
      padding: 2vw 1vw;
      border-radius: 10px;
      label {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 2vw; */
        font-weight: bold;
        color: #322532;
        text-transform: capitalize;
      }
      input {
        margin-bottom: 1vw;
        margin-bottom: 1vw;
        width: 100%;
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: 5px;
        background: var(--backgroundColor);
        border: 1px solid #0f141e;
      }
      textarea {
        margin-bottom: 1vw;
        resize: none;
        border: none;
        background-color: transparent;
        border: 1px solid #0f141e;
        border-radius: 10px;
        padding: 1vw;
      }
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default WorkExp;
