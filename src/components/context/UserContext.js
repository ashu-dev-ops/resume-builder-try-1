import { useAuth0 } from "@auth0/auth0-react";
import userEvent from "@testing-library/user-event";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../Reducer/userReducer";
const UserContext = createContext();
const initialState = {
  userName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  Address: "",
  WorkExp: [],
  eduction: {},
  Project: [],
  isSideBarOpen: false,
  profileImage: "",
};
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { logout, isLoading, loginWithRedirect, user, isAuthenticated } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  console.log(myUser);
  const saveUser = () => {};
  const setName = (value) => {
    // console.log(value);
    dispatch({
      type: "SET_NAME",
      payload: value,
    });
  };
  const setLastName = (value) => {
    dispatch({
      type: "SET_LAST_NAME",
      payload: value,
    });
  };
  const setEmail = (value) => {
    dispatch({
      type: "SET_EMAIL",
      payload: value,
    });
  };
  const setPhone = (value) => {
    dispatch({
      type: "SET_PHONE_NUMBER",
      payload: value,
    });
  };
  const saveProject = (value) => {
    dispatch({
      type: "SAVE_PROJECT",
      payload: value,
    });
  };
  const saveWorkExp = (value) => {
    dispatch({
      type: "SAVE_WORK_EXP",
      payload: value,
    });
  };
  const closeSidebar = () => {
    dispatch({
      type: "CLOSE_SIDEBAR",
    });
  };
  const saveEducation = (value) => {
    dispatch({
      type: "SAVE_EDUCATION",
      payload: value,
    });
  };
  const setProfileImage = (value) => {
    dispatch({
      type: "SAVE_PIC",
      payload: value,
    });
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        setEmail,
        setLastName,
        setName,
        setPhone,
        saveProject,
        saveWorkExp,
        closeSidebar,
        saveEducation,
        setProfileImage,
        loginWithRedirect,
        myUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );

  //   return <UserContext.Provider value={...state}>{children}</UserContext.Provider>;
};
export const useUserContext = () => {
  return useContext(UserContext);
};
