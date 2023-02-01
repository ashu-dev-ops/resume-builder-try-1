const userReducer = (state, action) => {
  if (action.type === "SET_NAME") {
    console.log("running");
    return { ...state, userName: action.payload };
  }
  if (action.type === "SET_LAST_NAME") {
    return { ...state, lastName: action.payload };
  }
  if (action.type === "SET_EMAIL") {
    return { ...state, email: action.payload };
  }
  if (action.type === "SET_PHONE_NUMBER") {
    return { ...state, phoneNo: action.payload };
  }
  if (action.type === "SAVE_PROJECT") {
    const { project_title, project_description, project_link } = action.payload;
    const newProject = { project_title, project_description, project_link };

    return {
      ...state,
      Project: [...state.Project, newProject],
    };
  }
  if (action.type === "SAVE_WORK_EXP") {
    const { companyName, work_desc } = action.payload;
    const newWorkExp = { companyName, work_desc };
    console.log("working");
    return {
      ...state,
      WorkExp: [...state.WorkExp, newWorkExp],
    };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSideBarOpen: !state.isSideBarOpen };
  }
  if (action.type === "SAVE_EDUCATION") {
    const newEduc = {
      schoolName: action.payload.schoolName,
      schoolGrade: action.payload.schoolGrade,
      collegeName: action.payload.collegeName,
      collegeGrade: action.payload.collegeGrade,
    };
    return { ...state, eduction: { ...state.eduction, ...newEduc } };
  }
  if (action.type === "SAVE_PIC") {
    return { ...state, profileImage: action.payload };
  }
  return state;
};
export default userReducer;
