import React, { useState } from "react";
import Arrows from "./Arrows";
import { IMAGES } from "./CarouselSliderData";
import styled from "styled-components";

const CarouselSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = IMAGES.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
      {IMAGES.map((image, idx) => {
        return (
          <div key={idx}>
            {idx === current && (
              <>
                <SlideImage src={image.urls} alt={image.title} />
                <SlideDescription>
                  <SlideTitle>{image.title}</SlideTitle>
                  <SlideSubtitle>{image.subtitle}</SlideSubtitle>
                </SlideDescription>
              </>
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default CarouselSlider;

const StyledSlider = styled.section`
  height: 100vh;
  overflow: hidden;
`;

const SlideImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SlideDescription = styled.div`
  position: absolute;
  top: 41%;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 1.2;
`;

const SlideTitle = styled.h1`
  margin-bottom: 8px;
  color: #fff;
  font-size: 200%;
  font-weight: bold;
`;

const SlideSubtitle = styled.h3`
  color: #fff;
  font-size: 300%;
  font-weight: bold;
  opacity: 0.8;
`;
