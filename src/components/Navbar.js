import React from "react";
import styled from "styled-components";
import userProfileImage from "../images/image-avatar.png";
import cartIcon from "../images/icon-cart.svg";
import SvgIcon from "./SvgIcon";
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
  // const menuActived = useSelector((state) => state.menu.active);
  const active = useSelector((state) => state.cart.active);

  const dispatch = useDispatch();
  return (
    <Nav>
      <Box>
        <Icon
          src={menuIcon}
          width="20px"
          height="20px"
          mgr="1rem"
          onClick={() => dispatch({ type: "SHOW_MENU" })}
        ></Icon>
        <Brand>sneakers</Brand>
      </Box>
      <Box>
        <SvgIcon
          fill={active ? "black" : ""}
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fillRule="nonzero"
          />
        </SvgIcon>

        <Icon src={userProfileImage} mgl="1rem"></Icon>
      </Box>
    </Nav>
  );
}

export default Navbar;
