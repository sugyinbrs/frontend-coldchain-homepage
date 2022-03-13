import React from "react";
import Board from "./BoardSection/Board";
import CarouselSlider from "./CarouselSlider/CarouselSlider";
import SloganSection from "./SloganSection/SloganSection";
import TimfBusinessSection from "./TimfBusinessSection/TimfBusinessSection";

const Main = () => {
  return (
    <>
      <CarouselSlider />
      <SloganSection />
      <TimfBusinessSection />
      <Board />
    </>
  );
};

export default Main;
