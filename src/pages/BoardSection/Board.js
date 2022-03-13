import React from "react";
import Card from "../../components/UI/Card";
import HorizontalLine from "./HorizontalLine";
import styled from "styled-components";

const Board = () => {
  return (
    <BoardContainer>
      <HorizontalLine />
      <BoardWrapper>
        <BoardContentWrapper>
          <BoardTitle>공지사항</BoardTitle>
          <Card cardTitle={"Notice"} />
        </BoardContentWrapper>
        <BoardContentWrapper>
          <BoardTitle>보도자료</BoardTitle>
          <Card cardTitle={"TimF News"} />
        </BoardContentWrapper>
      </BoardWrapper>
      <HorizontalLine />
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.section`
  padding: 0 15px;
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

const BoardContentWrapper = styled.div`
  margin: 0 auto;
`;

const BoardTitle = styled.h2`
  margin: 0 0 32px 8px;
  font-size: 20px;
  font-weight: bold;
`;
