import React from "react";
import styled from "styled-components";
import userProfileImage from "../../images/image-avatar.png";
import cartIcon from "../../images/icon-cart.svg";
import menuIcon from "../../images/icon-menu.svg";

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Brand = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

const UserImage = styled.img`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  margin-left: ${(props) => props.mgl || "0"};
  margin-right: ${(props) => props.mgr || "0"};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(UserImage)`
  border-radius: 0;
`;

const Box = styled.div`
  display: flex;
  align-items: baseline;
`;

function Navbar() {
  return (
    <Nav>
      <Box>
        <Icon src={menuIcon} width="20px" height="20px" mgr="1rem"></Icon>
        <Brand>sneakers</Brand>
      </Box>
      <Box>
        <Icon src={cartIcon}></Icon>
        <UserImage src={userProfileImage} mgl="1rem"></UserImage>
      </Box>
    </Nav>
  );
}

export default Navbar;
