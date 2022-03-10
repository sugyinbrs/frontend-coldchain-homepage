import React from "react";
import NavbarList from "./NavbarList";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Navigator>
      <Icon>
        <img
          alt="팀프레시 로고"
          src="https://www.teamfresh.co.kr/resources/assets/img/logo.png"
        />
      </Icon>
      <NavbarList />
    </Navigator>
  );
};

export default Navbar;

const Navigator = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 13px;
`;

const Icon = styled.div`
  img {
    width: 100px;
    margin-left: 40px;
  }
`;
