import React from "react";
import styled from "styled-components";
// import { PageHero } from '../components'
// import aboutImg from '../assets/hero-bcg.jpeg'
import aboutImage from "../assets/about-page.png";

const AboutPage = () => {
  return (
    <main>
      {/* <PageHero title="about"/> */}
      <Wrapper className="page section section-center">
        <div className="single-page-center"></div>
        <div className="container">
          <img src={aboutImage} />
          <article>
            <div className="title">
              <h2>Resume io story</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
    gap: 4rem;
    padding: 4rem;
    /* width: 50vw; */
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default AboutPage;
