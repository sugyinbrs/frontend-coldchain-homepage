import React from "react";
import { MENUS } from "./NavbarData";
import styled from "styled-components";

const NavbarList = () => {
  return (
    <NavbarListContainer>
      <DropDown>
        {MENUS.map((menu, idx) => {
          return (
            <DropDownHeaderContainer key={idx}>
              <DropDownHeader>{menu}</DropDownHeader>
            </DropDownHeaderContainer>
          );
        })}
      </DropDown>
    </NavbarListContainer>
  );
};

export default NavbarList;

const NavbarListContainer = styled.div`
  margin-right: 40px;
`;

const DropDown = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const DropDownHeaderContainer = styled.li`
  padding-right: 20px;

  &:nth-child(5) {
    padding-right: 0px;
  }
`;

const DropDownHeader = styled.div`
  padding: 8px;
  color: #606060;
  font-size: 14px;
  cursor: pointer;
`;
