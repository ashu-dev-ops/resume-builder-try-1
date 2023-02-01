import React, { useState } from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import logo from "../assets/logo.svg";

const SideBar = () => {
  //   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { closeSidebar, isSideBarOpen } = useUserContext();
  return (
    <Wrapper>
      <aside
        className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <IoCloseSharp />
          </button>
        </div>
        <div className="navlinks">
          <li>
            <Link onClick={closeSidebar} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to="/help">
              Help
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} className="logger " to="/resume">
              <div className="create-one">Create one</div>
              <div className="line"></div>
              <div className="sign-up">sign up</div>
            </Link>
          </li>
        </div>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: all 0.5s;
    transform: translate(-100%);
    z-index: -1;
    background-color: #eff2f9;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  .close-btn {
    border: none;
    /* position: absolute; */
    /* right: 0; */
    background-color: transparent;
    font-size: 3rem;
    /* top: 5%; */
  }

  .navlinks {
    /* display: grid !important; */
    /* background-color: orange; */
    padding-top: 3rem;
    li {
      margin: 1rem 10px;
      font-size: 4rem;
      /* width: 10rem; */
      width: fit-content;
      text-align: left;
    }
    .logger {
      background-color: red;
      a {
        display: flex;
        gap: 0.2rem;
        text-decoration: none;
        color: white;
        font-weight: border;
        font-size: 2rem;
        background-color: red;
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
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
export default SideBar;
