import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <UpperContainer>
        <InfoBoxContainer>
          <HorizontalLine />
          <InfoTitle>Timf</InfoTitle>
          <HorizontalLine />
          <InfoContent>상호명: (주)팀프레시</InfoContent>
          <InfoContent>사업자등록번호: 561-88-01138</InfoContent>
          <InfoContent>대표자: 이성일</InfoContent>
        </InfoBoxContainer>
        <InfoBoxContainer>
          <HorizontalLine />
          <InfoTitle>Contact us</InfoTitle>
          <HorizontalLine />
          <InfoContent>Tel: 02-423-0525</InfoContent>
          <InfoContent>Fax: 02-3432-0525</InfoContent>
          <InfoContent>E-mail: info@timf.co.kr</InfoContent>
          <InfoContent>서울특별시 송파구 위례성대로 12길 15-1</InfoContent>
          <br />
          <InfoContent>영업 및 제휴 문의:</InfoContent>
          <InfoContent>E-mail: sales@timf.co.kr</InfoContent>
        </InfoBoxContainer>
        <InfoBoxContainer>
          <HorizontalLine />
          <InfoTitle>Others</InfoTitle>
          <HorizontalLine />
          <InfoLinkContent to="/">인재채용</InfoLinkContent>
          <InfoLinkContent to="/">사업자등록번호: 561-88-01138</InfoLinkContent>
          <InfoLinkContent to="/">대표자: 이성일</InfoLinkContent>
        </InfoBoxContainer>
      </UpperContainer>
      <LowerContainer>
        <CopyrightInfoContainer>
          <HorizontalLine width="100%" />
          <InfoContent>© TeamFresh All right reserved</InfoContent>
        </CopyrightInfoContainer>
      </LowerContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #31353e;
  color: #d5d5d5;
  font-size: 13.6px;
  line-height: 22px;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 15px;
`;

const LowerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InfoBoxContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const CopyrightInfoContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const HorizontalLine = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "80%"};
  margin: 13px auto 16px;
  border: 0.5px solid #d5d5d5;
`;

const InfoTitle = styled.h5`
  margin-bottom: 8px;
  text-align: center;
`;

const InfoContent = styled.p`
  margin-bottom: 13px;
  text-align: center;
`;

const InfoLinkContent = styled(Link)`
  display: block;
  margin-bottom: 13px;
  text-align: center;
  color: #d5d5d5;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
