import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SingleBlogCard = ({
  title,
  para,
  authorPic,
  mainPic,
  authorName,
  id,
}) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="main-image">
          <img src={mainPic} alt="" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <div className="row-two">
            <img src={authorPic} alt="" />
            {authorName}
          </div>
          <div className="row-three">{para}</div>
        </div>
        <Link to={`/blog-page/${id}`}>read more</Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  a {
    padding: 0.2rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    background-color: var(--primary-1);
    color: gray;
    /* font-weight: bold; */
  }
  .card {
    min-height: 50vh;
    width: 50vw;
    padding: 1rem;
    margin: 1rem auto;
    background-color: white;
    border-radius: 10px; /* justify-self: center; */
    .main-image {
      img {
        height: 25rem;
        width: 100%;
      }
    }
    .details {
      h3 {
        font-size: 2rem;
      }
      .row-two {
        display: flex;
        /* justify-content: space-between; */
        gap: 2rem;
        align-items: center;
        img {
          height: 3rem;
          border-radius: 50%;
        }
      }
      .row-three {
      }
    }
  }
`;
export default SingleBlogCard;
