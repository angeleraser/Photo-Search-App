import React, { useContext } from "react";
import { SearchContext } from "../App";
export const SearchPhotos = () => {
  const {
    query,
    setQuery,
    picsData: { pics, resetSearch, fetchPhotos, loading },
  } = useContext(SearchContext);
  const searchPhotos = (e) => {
    e.preventDefault();
    if (query.trim().length) {
      if (pics.length) {
        resetSearch();
      }
      fetchPhotos();
    }
  };
  return (
    <div className="search-photos">
      <form onSubmit={searchPhotos} className="form">
        <label htmlFor="query" className="label">
          <i>📷</i>
          <input
            type="text"
            placeholder='Try "dog" or "apple"'
            className="input"
            name="query"
            id="query"
            value={query}
            onChange={({ target: { value } }) => setQuery(value)}
          />
        </label>
        <button disabled={loading} type="submit" className="button">
          {loading ? "..." : "Search"}
        </button>
      </form>
    </div>
  );
};
