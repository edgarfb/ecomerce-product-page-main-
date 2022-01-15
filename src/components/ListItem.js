import React from "react";
import styled from "styled-components";

export const ListItem = styled.li`
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
