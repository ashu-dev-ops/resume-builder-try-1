import userEvent from "@testing-library/user-event";
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/resumeReducer";
const ResumeContext = createContext();
const initialState = {
  BasicInfo: false,
  WorkExp: false,
  Achivement: false,
  Project: false,
  Generate: false,
  template: true,
  choosenTempNumber: "one",
  resumePrint: false,
  uploadPropilePic: false,
};
export const ResumeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setBasicInfo = (value) => {
    dispatch({
      type: "BASIC_INFO",
      payload: value,
    });
  };
  const setWorkExp = (value) => {
    dispatch({
      type: "WORK_EXP",
      payload: value,
    });
  };
  const setAchivement = (value) => {
    console.log(value);
    dispatch({
      type: "ACHIVEMENT",
      payload: value,
    });
  };
  const setProject = (value) => {
    dispatch({
      type: "PROJECT",
      payload: value,
    });
  };
  const setTemplpate = (value) => {
    dispatch({
      type: "TEMPLATE",
      payload: value,
    });
  };
  const setTemplpateImage = (value) => {
    dispatch({
      type: "TEMPLATE_IMG",
      payload: value,
    });
  };
  const setResumePrint = (value) => {
    dispatch({
      type: "PRINT_RESUME",
      payload: value,
    });
  };
  const setUploadPropilePic = (value) => {
    console.log("running");
    dispatch({
      type: "UPLOAD_PROFILE_PIC",
      payload: value,
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        ...state,
        setAchivement,
        setBasicInfo,
        setProject,
        setWorkExp,
        setTemplpate,
        setTemplpateImage,
        setResumePrint,
        setUploadPropilePic,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
export const useResumeContext = () => {
  return useContext(ResumeContext);
};
