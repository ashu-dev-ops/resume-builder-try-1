import React, { useRef } from "react";
import { useResumeContext } from "../context/ResumeContext";
import styled from "styled-components";
import eduImg from "../assets/education.svg";
import { useUserContext } from "../context/UserContext";

const Achive = () => {
  const { setAchivement, setProject } = useResumeContext();
  const { saveEducation } = useUserContext();
  const schoolName = useRef();
  const collegeName = useRef();
  const collegeGrade = useRef();
  const schoolGrade = useRef();
  // const schoolName=useRef()
  return (
    <Wrapper className="page-100-center">
      <div className="container-edu">
        <div className="left">
          <img src={eduImg} alt="" srcset="" />
        </div>
        <div className="right">
          <form>
            <h2>enter your educational achivements</h2>
            <label htmlFor="schoolName">school name:</label>
            <input type="text" name="schoolName" ref={schoolName} />
            <label htmlFor="schoolGrade">
              enter the percentage you score in scholl:
            </label>
            <input type="text" name="schoolGrade" ref={schoolGrade} />
            <label htmlFor="collegeName">college name:</label>
            <input type="text" name="collegeName" ref={collegeName} />
            <label htmlFor="collegeGrade">
              enter the percentage you score in scholl:
            </label>
            <input type="text" name="collegeGrade" ref={collegeGrade} />
          </form>

          <button
            className="btn"
            onClick={() => {
              setAchivement(false);
              setProject(true);
              saveEducation({
                schoolName: schoolName.current.value,
                schoolGrade: schoolGrade.current.value,
                collegeName: collegeName.current.value,
                collegeGrade: collegeGrade.current.value,
              });
            }}
          >
            next
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* margin: 0 10vw; grid-auto-flow: dense; */
  background-color: var(--primary-1);
  h2 {
    text-align: center;
    padding: 1rem;
    text-transform: capitalize;
    font-weight: normal;
  }
  .container-edu {
    display: grid;
    width: 100%;
    /* margin-top: 10vw; */
    min-height: 90vh;
    align-items: center;
    background-color: var(--primary-1);
  }
  .left {
    padding: 2vw 0;
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
    margin: 2vw 6vw;
    padding: 1vw;
    background-color: white;
    border-radius: 10px;
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
        text-transform: capitalize;
      }
      input {
        margin-bottom: 1vw;
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

        resize: none;
        border: none;
        background-color: transparent;
      }
    }
  }
  @media (min-width: 768px) {
    .container-edu {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Achive;
