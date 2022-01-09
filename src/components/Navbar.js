import React from "react";
import styled from "styled-components";
import userProfileImage from "../images/image-avatar.png";
import SvgIcon from "./SvgIcon";
import { Icon } from "./Icon";
import { useSelector, useDispatch } from "react-redux";

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  margin-left: 0.5rem;
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
  const active = useSelector((state) => state.cart.active);

  const dispatch = useDispatch();
  return (
    <Nav>
      <Box>
        <SvgIcon height="16px" onClick={() => dispatch({ type: "SHOW_MENU" })}>
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </SvgIcon>
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
