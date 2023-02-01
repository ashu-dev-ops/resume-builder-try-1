import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../constants/blogData";
import styled from "styled-components";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const [currentBlog, setCurrentBlog] = useState();
  useEffect(() => {
    const currentBlogM = blogData.filter((i) => {
      console.log(i);

      return i.id === Number(blogId);
    });
    console.log(currentBlogM);
    setCurrentBlog(currentBlogM[0]);
  }, []);
  console.log(currentBlog);

  console.log();

  if (currentBlog) {
    const { title, mainPic, authorName, authorPic, para, desc } = currentBlog;
    return (
      <Wrapper>
        <div className="row-one">
          <img className="mainImage" src={mainPic} alt="" />
          <div className="intro-container">
            <h2>{title}</h2>
            <p>
              by{" "}
              <span>
                <img src={authorPic} alt="" />{" "}
              </span>{" "}
              {authorName}
            </p>
          </div>
        </div>
        <div className="row-two">
          <h4>{para}</h4>
          <p>{desc}</p>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.section`
  padding: 2rem 5rem;
  min-height: 90vh;
  .row-one {
    display: grid;
    .mainImage {
      height: 60vh;
      width: 100%;
      padding: 1rem;
    }
    .intro-container {
      display: flex;
      /* align-items: center; */
      justify-content: center;
      flex-direction: column;
      /* align-items */
      h2 {
        font-size: 3rem;
      }
      p {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        span {
          img {
            border-radius: 50%;
          }
        }
      }
    }
  }
  .row-two {
    padding: 1rem 7rem;
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #33373f;
    }
    p {
      font-size: 2rem;
      color: #7a7e86;
    }
  }

  @media (min-width: 992px) {
    .row-one {
      grid-template-columns: 1fr 1fr;
    }
    .row-two {
      padding: 1rem 7rem;
      h4 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
    .container {
    }
  }
`;
export default SingleBlogPage;
