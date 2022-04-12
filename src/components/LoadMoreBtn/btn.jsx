import React from "react";
import { Wrapper } from "./btn.style";
import PropTypes from "prop-types";

export default function LoadMoreBtn(props) {
  const { loadMore } = props;
  return (
    <Wrapper type="button" onClick={() => loadMore()}>
      load More
    </Wrapper>
  );
}

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func,
};
