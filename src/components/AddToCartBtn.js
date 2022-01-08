import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import cartIcon from "../images/icon-cart.svg";

const Btn = styled.button`
  width: 100%;
`;

const AddToCartBtn = () => {
  return (
    <Btn>
      <Icon src={cartIcon} width="15px" height="15px" />
      Add to cart
    </Btn>
  );
};

export default AddToCartBtn;
