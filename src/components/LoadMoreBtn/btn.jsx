import React from "react";
import { Wrapper } from "./btn.style";

export default function LoadMoreBtn(props) {
  const { loadMore } = props;
  return (
    <Wrapper type="button" onClick={() => loadMore()}>
      load More
    </Wrapper>
  );
}
