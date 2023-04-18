import React from "react";
import Card from "./Card";

const SearchBar = () => {
  return (
    <Card className="search-bar">
      <input type="text" placeholder="Search for a cryptocurrency..." />
      <button className="hoverable">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </Card>
  );
};

export default SearchBar;
