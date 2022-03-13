import React from "react";
import { IMAGES } from "../CarouselSlider/CarouselSliderData";
import styled from "styled-components";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaTitle>Connect</SocialMediaTitle>
      <SocialMediaLink>
        <TimfSocialMedia href="https://www.facebook.com/teamfresh.timf">
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt="Facebook Link Logo"
          />
        </TimfSocialMedia>
        <TimfSocialMedia href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="Youtube Link Logo"
          />
        </TimfSocialMedia>
      </SocialMediaLink>
    </SocialMediaContainer>
  );
};

export default SocialMedia;

const SocialMediaContainer = styled.section`
  padding: 32px 15px;
`;

const SocialMediaTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 32px;
  text-align: center;
`;

const SocialMediaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimfSocialMedia = styled.a`
  padding: 32px;

  &:hover {
    filter: grayscale(50%);
  }
`;

const Icon = styled.img`
  width: 70px;
`;
