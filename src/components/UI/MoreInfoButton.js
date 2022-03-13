import React from "react";
import plusIcon from "../../Assets/Image/icon_plus.png";
import styled from "styled-components";

const MoreInfoButton = () => {
  return (
    <>
      <ButtonIcon src={plusIcon} alt="더 보기 버튼"></ButtonIcon>
    </>
  );
};

export default MoreInfoButton;

const ButtonIcon = styled.img`
  width: 12px;
`;
