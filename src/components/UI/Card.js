import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoreInfoButton from "./MoreInfoButton";
import HorizontalLine from "../../pages/BoardSection/HorizontalLine";
import clockIcon from "../../Assets/Image/icon_clock.png";
import styled from "styled-components";

const Card = (props) => {
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    fetch("./Data/BoardSectionData.json")
      .then((res) => res.json())
      .then((data) => {
        setNoticeList(data);
      });
  }, []);

  console.log(noticeList);

  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{props.cardTitle}</CardTitle>
        <MoreInfoButton />
      </CardHeader>
      <HorizontalLine />
      <div>
        {noticeList.map((content, idx) => {
          return (
            <CardContent key={idx}>
              <CardContentLeft>
                <ContentTitle to="/">{content.title}</ContentTitle>
              </CardContentLeft>
              <CardContentRight>
                <ContentDateIcon src={clockIcon} />
                <ContentDate>{content.date}</ContentDate>
              </CardContentRight>
            </CardContent>
          );
        })}
      </div>
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

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const CardContentLeft = styled.div`
  width: 30vw;
  margin: 0 auto;
  overflow: hidden;
`;

const CardContentRight = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin: 0 auto;
`;

const ContentTitle = styled(Link)`
  color: #343638;
  font-size: 16px;
  text-decoration: none;
`;

const ContentDateIcon = styled.img`
  width: 16px;
  margin-right: 8px;
`;

const ContentDate = styled.span`
  color: #343638;
  font-size: 16px;
`;
