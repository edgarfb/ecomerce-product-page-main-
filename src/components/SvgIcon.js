import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: ${(props) => props.width || "22px"};
  height: ${(props) => props.height || "20px"};
  fill: ${(props) => props.fill || "#69707d"};
  xmlns: "http://www.w3.org/2000/svg";
  &:hover {
    cursor: pointer;
  }
`;

export default Svg;
