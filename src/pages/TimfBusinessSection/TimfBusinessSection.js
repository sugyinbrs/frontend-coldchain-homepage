import React from "react";
import styled from "styled-components";

const TimfBusinessSection = () => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>TIMF BUSINESS</SectionTitle>
        <HorizontalLine />
      </SectionTitleContainer>
    </SectionContainer>
  );
};

export default TimfBusinessSection;

const SectionContainer = styled.section``;

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
