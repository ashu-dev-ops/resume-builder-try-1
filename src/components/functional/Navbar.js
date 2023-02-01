import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
// import {}
import { FaBars, FaUserAlt } from "react-icons/fa";
import { useUserContext } from "../context/UserContext";
const Navbar = () => {
  const { closeSidebar, loginWithRedirect, myUser, logout } = useUserContext();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (myUser) {
  //     navigate("/resume");
  //   }
  // }, [myUser]);
  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <button className="nav-toggle" onClick={closeSidebar}>
          <FaBars />
        </button>
        <div className="navlinks">
          <ul className="navlist">
            <li>
              {" "}
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/resume"> Create one</Link>
            </li>
            <li>
              <Link to="/help">contact us</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="logger">
              {/* <Link to="/resume">
                {myUser ? (
                  <FaUserAlt />
                ) : (
                  <div className="create-one btn">create one</div>
                )}
              </Link> */}
              <div className="line"></div>
            </li>
            <li>
              {myUser ? (
                <div className="sign-out create-one btn" onClick={logout}>
                  log out
                </div>
              ) : (
                <div
                  className="sign-up create-one btn"
                  onClick={loginWithRedirect}
                >
                  sign up
                </div>
              )}
            </li>
          </ul>
          {/* <button>sign up</button> */}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    align-items: center;
    height: 10vh;
  }
  .navlinks {
    display: flex;
    .navlist {
      display: flex;
      /* margin: 2px 10px; */
      li {
        margin: 0 10px;
        font-size: 20px;
      }
      .logger {
        a {
          display: flex;
          gap: 0.2rem;
          .line {
            /* height: 10vh; */
            width: 5px;
            background-color: gray;
            border-radius: 10px;
          }
          .create-one {
          }
          .sign-up {
            font-size: 20px;
          }
        }
      }
    }
    button {
      text-align: center;
      display: inline-block;
      /* width: 10rem; */
      /* margin-bottom: 2vh; */
      background-color: #618df2;
      padding: 0.7rem 0.6rem;
      font-size: 20px;
      font-weight: 400;
      border: none;
      color: white;
      border-radius: 10px;
    }
  }
  .navlinks {
    display: none;
  }
  .nav-toggle {
    /* display: none; */
    border: none;
    padding: 1rem;
    font-size: 2.3rem;
    background-color: transparent;
    /* background-color: red; */
  }

  @media (min-width: 992px) {
    .navlinks {
      display: initial;
    }
    .nav-toggle {
      display: none;
      border: none;
      padding: 1rem;
      /* background-color: transparent; */
      background-color: red;
    }
  }
`;

export default Navbar;
