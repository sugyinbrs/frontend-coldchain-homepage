import React from "react";
import styled from "styled-components";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <PrevArrow onClick={prevSlide}>&#10094;</PrevArrow>
      <NextArrow onClick={nextSlide}>&#10095;</NextArrow>
    </>
  );
};

export default Arrows;

const PrevArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 8%;
  width: auto;
  padding: 8px;
  margin-top: -24px;
  border: none;
  background: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;

  &:hover {
    opacity: 1;
    transition: all ease-in;
  }
`;

const NextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 8%;
  width: auto;
  padding: 8px;
  margin-top: -24px;
  border: none;
  background: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;

  &:hover {
    opacity: 1;
    transition: all ease-in;
  }
`;
