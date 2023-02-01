const resumeReducer = (state, action) => {
  if (action.type === "BASIC_INFO") {
    return { ...state, BasicInfo: action.payload };
  }
  if (action.type === "WORK_EXP") {
    return { ...state, WorkExp: action.payload };
  }
  if (action.type === "ACHIVEMENT") {
    console.log(action.payload);
    return { ...state, Achivement: action.payload };
  }
  if (action.type === "BASIC_INFO") {
    return { ...state, Project: action.payload };
  }
  if (action.type === "TEMPLATE") {
    return { ...state, template: action.payload };
  }
  if (action.type === "PROJECT") {
    return { ...state, Project: action.payload };
  }
  if (action.type === "TEMPLATE_IMG") {
    return { ...state, choosenTempNumber: action.payload };
  }
  if (action.type === "PRINT_RESUME") {
    return { ...state, resumePrint: action.payload };
  }
  if (action.type === "UPLOAD_PROFILE_PIC") {
    return { ...state, uploadPropilePic: action.payload };
  }
};
export default resumeReducer;
