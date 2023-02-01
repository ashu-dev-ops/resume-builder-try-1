import React, { useRef } from "react";
import projectImg from "../assets/project_img.svg";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import { useResumeContext } from "../context/ResumeContext";
const Project = () => {
  const { setProject, setWorkExp } = useResumeContext();
  const { saveProject } = useUserContext();
  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectLink = useRef();
  // const phoneRef = useRef();
  const submitHander = (e) => {
    // e.prevent.default();
    e.preventDefault();
    setProject(false);
    setWorkExp(true);

    saveProject({
      project_title: projectTitle.current.value,
      project_description: projectDesc.current.value,
      project_link: projectLink.current.value,
    });
  };
  return (
    <Wrapper className="page-100-center ">
   
      <div className="left">
        {/* {projectImg} */}
        <img src={projectImg} alt="" srcset="" />
      </div>
      <div className="right">
        <form onSubmit={submitHander}>
          <label>enter your project title</label>
          {/* <textarea name="projectDescription"></textarea> */}
          <input type="text" name="project_title" ref={projectTitle} />
          <label>enter your link on which is project hoisted</label>
          <input type="text" name="project_link" ref={projectLink} />
          <label>enter your project description</label>
          <textarea
            rows="6"
            name="project_description"
            ref={projectDesc}
          ></textarea>

          <button className="btn" type="submit">
            next
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  width: 100%;
  margin-top: 10vw;
  /* grid-auto-flow: dense; */
  .left {
    padding: 2vw 0;

    img {
      width: 100%;
    }
  }
  .right {
    margin: 0vw 4vw;
    padding: 1vw;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 0px 37px 0px rgba(0, 0, 0, 0.75);
    /* min-height: 30vh; */
    height: 45vh;
    form {
      display: grid;
      align-items: center;
      /* padding: 2vw 6vw; */
      label {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 2vw; */
        font-weight: bold;
        color: #322532;
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
        border: 1px solid #0f141e;
      }
    }
  }
  @media (min-width: 768px) {
    .right {
      height: 50vh;
    }
    grid-template-columns: 1fr 1fr;
  }
`;

export default Project;
