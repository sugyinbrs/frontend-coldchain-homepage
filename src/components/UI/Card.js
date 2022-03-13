import React from "react";
import { Link } from "react-router-dom";
import MoreInfoButton from "./MoreInfoButton";
import HorizontalLine from "../../pages/BoardSection/HorizontalLine";
import clockIcon from "../../Assets/Image/icon_clock.png";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Notice</CardTitle>
        <MoreInfoButton />
      </CardHeader>
      <CardContentWrapper>
        <CardContent>
          <ContentTitle to="/">{props.title}</ContentTitle>
          <ContentDateIcon src={clockIcon} />
          <ContentDate>{props.date}</ContentDate>
        </CardContent>
      </CardContentWrapper>
      <HorizontalLine />
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  padding: 32px;
  border: 1px solid #eeeeee;
  background-color: #fafafa;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const CardTitle = styled.h5`
  margin-right: 10px;
  font-size: 20px;
`;

const CardContentWrapper = styled.div``;

const CardContent = styled.div``;

const ContentTitle = styled(Link)``;

const ContentDateIcon = styled.img``;

const ContentDate = styled.p``;
