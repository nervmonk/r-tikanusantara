import About from "../components/Homepage/About";
import CallMe from "../components/Homepage/CallMe";
import HeaderCarousel from "../components/Homepage/Carousel";
import Thoughts from "../components/Homepage/Thoughts";
import WhatIDo from "../components/Homepage/WhatIDo";

const HomePage = () => {
  return (
    <>
      <HeaderCarousel />
      <About />
      <WhatIDo />
      <Thoughts />
      <CallMe />
    </>
  );
};

export default HomePage;
