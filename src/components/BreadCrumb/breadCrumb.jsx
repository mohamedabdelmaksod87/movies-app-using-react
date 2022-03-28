import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./breadCrumb.style";

export default function BreadCrumb(props) {
  const { movieTitle } = props;
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
}
