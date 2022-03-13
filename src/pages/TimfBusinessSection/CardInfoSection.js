import React from "react";
import Button from "../../components/UI/Button";
import styled from "styled-components";

const CardInfoSection = (props) => {
  return (
    <CardInfoContainer>
      <CardImage src={props.image} alt={props.title} />
      <CardInfo>
        <CardInfoContent>
          <CardInfoTitle>{props.title}</CardInfoTitle>
          <CardInfoSubtitle>{props.subtitle}</CardInfoSubtitle>
        </CardInfoContent>
        <Button>더 알아보기</Button>
      </CardInfo>
    </CardInfoContainer>
  );
};

export default CardInfoSection;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 300px;
  width: 25%;
  padding: 16px;
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 300px;
`;

const CardInfo = styled.div`
  padding: 20px;
`;

const CardInfoContent = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
`;

const CardInfoTitle = styled.h4`
  color: #343638;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const CardInfoSubtitle = styled.p`
  font-size: 14px;
`;
