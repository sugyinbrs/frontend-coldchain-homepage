import React from "react";
import styled from "styled-components";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <ArrowsCode>
      <PrevArrow onClick={prevSlide}>&#10094;</PrevArrow>
      <NextArrow onClick={nextSlide}>&#10095;</NextArrow>
    </ArrowsCode>
  );
};

export default Arrows;

const ArrowsCode = styled.div``;

const PrevArrow = styled.span``;

const NextArrow = styled.span``;
