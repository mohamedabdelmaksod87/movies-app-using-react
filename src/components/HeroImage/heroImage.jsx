import React from "react";
import { Wrapper, Content, Text } from "./heroImage.style";

export default function HeroImage(props) {
  const { image, title, text } = props;
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
}
