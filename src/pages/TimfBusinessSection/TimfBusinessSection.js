import React from "react";
import CardInfoSection from "./CardInfoSection";
import { INFO_CONTENTS } from "./CardInfoData";
import styled from "styled-components";

const TimfBusinessSection = () => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>TIMF BUSINESS</SectionTitle>
        <HorizontalLine />
      </SectionTitleContainer>
      <CardInfoSectionContainer>
        {INFO_CONTENTS.map((content, idx) => {
          return (
            <CardInfoSection
              key={idx}
              image={content.image}
              title={content.title}
              subtitle={content.subtitle}
            />
          );
        })}
      </CardInfoSectionContainer>
    </SectionContainer>
  );
};

export default TimfBusinessSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`;

const SectionTitleContainer = styled.div`
  padding: 32px;
`;

const SectionTitle = styled.h1`
  width: 70%;
  padding: 24px;
  margin: 0 auto;
  color: #343638;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const HorizontalLine = styled.hr`
  width: 70%;
  border: 1px solid #b4b4b4;
`;

const CardInfoSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 32px;
`;
