import React from "react";
import Feature from "../functional/Feature";
import Hero from "../functional/Hero";
import LandingFive from "../functional/landing/LandingFive";
import LandingFour from "../functional/landing/LandingFour";
import LandingSeven from "../functional/landing/LandingSeven";
import PrintResume from "../functional/PrintResume";

import UseTheBest from "../functional/UseTheBest";

const Home = () => {
  return (
    <div>
      {/* <Example /> */}

      <Hero />
      <UseTheBest />
      <Feature />
      <LandingFour />
      <LandingFive />
      <LandingSeven />
    </div>
  );
};

export default Home;
