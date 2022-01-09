import React from "react";
import styled from "styled-components";
import SvgIcon from "./SvgIcon";
import { useSelector, useDispatch } from "react-redux";

const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  z-index: 10;
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  min-width: 230px;
  width: 70vw;
  height: 100vh;
  background-color: white;
  z-index: 20;
  box-sizing: border-box;
  padding: 2rem 1.5rem;
`;
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  &:first-child {
    margin-top: 2rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <BackDrop></BackDrop>
      <MobileMenuContainer>
        <SvgIcon onClick={() => dispatch({ type: "HIDE_MENU" })}>
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </SvgIcon>
        <Ul>
          <ListItem>Collections</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
        </Ul>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
