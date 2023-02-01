import React, { useState } from "react";
import styled from "styled-components";
import { useResumeContext } from "../context/ResumeContext";
import AchiveForm from "./Achive";
import BasicInfoForm from "./BasicInfo";
import ChooseTemplate from "./ChooseTemplate";
import ImageUpload from "./ImageUpload";
import PrintResume from "./PrintResume";
import ProjectForm from "./Project";
import WorkExpForm from "./WorkExp";

const Editor = () => {
  //   const [state, setState] = useState();
  const {
    BasicInfo,
    WorkExp,
    Achivement,
    Project,
    Generate,
    template,
    resumePrint,
    uploadPropilePic,
  } = useResumeContext();
  // console.log(Project);
  console.log(uploadPropilePic);
  return (
    <div>
      <div className="header"></div>
      {template && <ChooseTemplate />}
      {BasicInfo && <BasicInfoForm />}
      {WorkExp && <WorkExpForm />}
      {Project && <ProjectForm />}
      {Achivement && <AchiveForm />}
      {uploadPropilePic && <ImageUpload />}
      {resumePrint && <PrintResume />}
      {Generate && <button>generate resume</button>}
    </div>
  );
};
const Wrapper = styled.section``;

export default Editor;
