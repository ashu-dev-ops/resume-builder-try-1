import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../context/UserContext";
import imgs from "../../assets/temp-back.jpg";

const TempOne = ({ refPropWithAnotherName }) => {
  const {
    eduction,
    Project,
    WorkExp,
    userName,
    lastName,
    email,
    phoneNo,
    profileImage,
  } = useUserContext();
  const { schoolName, schoolGrade, collegeName, collegeGrade } = eduction;
  const { project_title, project_description, project_link } = Project[0];
  const { companyName, work_desc } = WorkExp[0];

  return (
    <Wrapper className="" ref={refPropWithAnotherName}>
      <div className="box-1">
        <img src={profileImage} alt="" srcset="" />
        <h2>
          {userName} {lastName}
        </h2>
        <h4>{email}</h4>
        <h3>{phoneNo}</h3>
      </div>
      <div className="line"></div>
      <div className="box-2">
        <div className="row-one">
          <h3>Education:</h3>
          <li>
            <h4>
              scholl Name : <span>{schoolName}</span>{" "}
            </h4>

            <h4>
              percentage scored in high school: <span>{schoolGrade}</span>{" "}
            </h4>
          </li>
          <li>
            <h4>
              Graduated from: <span>{collegeName}</span>{" "}
            </h4>
            <h4>
              percentage scored in college: <span>{collegeGrade}</span>{" "}
            </h4>
          </li>
        </div>

        <div className="row-two">
          <h3>work expericne:</h3>
          <li>
            <h4>
              company Name : <span>{companyName}</span>
            </h4>
          </li>
          <li>
            <h4>
              work description :{" "}
              <span className="list-left-margin">
                {" "}
                <br /> {work_desc}
              </span>
            </h4>
          </li>
        </div>
        <div className="row-three">
          <h3>projects:</h3>
          <li>
            <h4>project name:{project_title}</h4>
          </li>
          <li>
            <h4>
              project description :{" "}
              <span list-left-margin>
                <br /> {project_description}{" "}
              </span>
            </h4>
          </li>
          <li>
            <h4>live project link :{project_link}</h4>
          </li>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 90vh;
  background-color: white;
  display: flex;
  padding: 2vw 1vw;
  gap: 1rem;
  width: 50vw;
  /* width: 100vw; */
  width: 100%;
  background-image: url("../../assets/temp-back.jpg");

  .line {
    height: 90vh;
    width: 5px;
    border-radius: 1px;
    background-color: gold;
  }
  .box-1 {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    h2 {
      margin-bottom: 1rem;
    }
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }
  .box-2 {
    min-width: 40%;
    .row-one {
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        font-family: "Syncopate";
        color: #1e2532;
      }

      h4 {
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: bold;
        span {
          /* font-weight: lighter; */
          color: var(--primary-2);
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
    .row-two {
      margin-top: 2rem;
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        font-family: "Syncopate";
        color: #1e2532;
      }

      h4 {
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: bold;
        span {
          /* font-weight: lighter; */
          color: var(--primary-2);
          font-size: 1rem;
          font-weight: bold;
          /* margin-left: 4rem; */
          /* background-color: red; */
        }
      }
    }
    .row-three {
      margin-top: 2rem;
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        font-family: "Syncopate";
        color: #1e2532;
      }

      h4 {
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: bold;
        span {
          /* font-weight: lighter; */
          color: var(--primary-2);
          font-size: 1rem;
          font-weight: bold;
          margin-left: 4rem;
          /* background-color: red; */
        }
      }
    }
  }
`;

export default TempOne;
