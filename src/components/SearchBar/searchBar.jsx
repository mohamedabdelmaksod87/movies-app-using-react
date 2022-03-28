import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./searchBar.style";

export default function SearchBar(props) {
  const { setSearchTerm } = props;
  const [searchBar, setSearchBar] = useState("");
  const initial = useRef(true);

  const handleSearchBar = (eve) => {
    setSearchBar(eve.currentTarget.value);
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(searchBar);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchBar, setSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={handleSearchBar}
          value={searchBar}
        />
      </Content>
    </Wrapper>
  );
}
