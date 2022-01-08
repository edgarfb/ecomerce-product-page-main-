import React from "react";
import styled from "styled-components";

export const Icon = styled.img`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  margin-left: ${(props) => props.mgl || "0"};
  margin-right: ${(props) => props.mgr || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  &:hover {
    cursor: pointer;
  }
`;
