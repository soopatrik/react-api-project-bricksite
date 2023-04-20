import React from "react";
import Card from "./Card";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Card className="search-bar">
      <input
        type="text"
        placeholder="Search for a cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="hoverable">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </Card>
  );
};

export default SearchBar;
