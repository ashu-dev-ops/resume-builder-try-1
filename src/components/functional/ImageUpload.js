import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import styled from "styled-components";
import pic from "../assets/default-profile-pic.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useResumeContext } from "../context/ResumeContext";

const ImageUpload = () => {
  const { setResumePrint, setUploadPropilePic } = useResumeContext();
  const { setProfileImage } = useUserContext();
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setShow(true);
  }

  return (
    <Wrapper className="page-100-center ">
      <div className="container">
        {show ? (
          <img className="unactive-image" src={file} />
        ) : (
          <img src={pic} />
        )}

        <h2>upload an image:</h2>
        <label className="custom-file-upload">
          <AiOutlineCloudUpload />
          <input className="btn-upload" type="file" onChange={handleChange} />
        </label>
        <button
          className="btn"
          onClick={() => {
            setUploadPropilePic(false);
            setResumePrint(true);
          }}
        >
          next
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: var(--primary-1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-transform: capitalize;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid gray;
    background-color: white;
    border-radius: 20px;
    padding: 3rem 2rem;
    input[type="file"] {
      display: none;
    }
    .custom-file-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 20px;
      cursor: pointer;
      border-radius: 10px;
      background-color: #1a91f0;
      margin-top: 2rem;
      font-size: 2rem;
      margin-bottom: 2vw;
    }

    /* margin: 0 50%; */
  }
  img {
    height: 20rem;
    width: 20rem;
  }
  .unactive-image {
    img {
      border: dotted 2px grey;
      border-radius: 50%;
      padding: 1rem;
    }
  }
`;

export default ImageUpload;
