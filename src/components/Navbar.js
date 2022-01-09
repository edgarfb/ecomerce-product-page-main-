import React from "react";
import styled from "styled-components";
import userProfileImage from "../images/image-avatar.png";
import cartIcon from "../images/icon-cart.svg";
import menuIcon from "../images/icon-menu.svg";
import { Icon } from "./Icon";
import { useSelector, useDispatch } from "react-redux";

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

const Box = styled.div`
  display: flex;
  align-items: baseline;
`;

function Navbar() {
  const dispatch = useDispatch();
  return (
    <Nav>
      <Box>
        <Icon src={menuIcon} width="20px" height="20px" mgr="1rem"></Icon>
        <Brand>sneakers</Brand>
      </Box>
      <Box>
        <Icon
          src={cartIcon}
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        ></Icon>
        <Icon src={userProfileImage} mgl="1rem"></Icon>
      </Box>
    </Nav>
  );
}

export default Navbar;
