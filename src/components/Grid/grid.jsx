import React from "react";
import { Wrapper, Content } from "./grid.style";

export default function Grid(props) {
  const { searchTerm, children, header } = props;

  return (
    <Wrapper>
      <h1>{searchTerm ? "Search Results" : header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}
