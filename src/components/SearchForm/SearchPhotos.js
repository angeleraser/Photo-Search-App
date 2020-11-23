import React, { useContext } from "react";
import { page_resetPageState } from "../../actions/page";
import { pics_CleanAllState, pics_SetQuery } from "../../actions/pics";
import { SearchContext } from "../../App";
export const SearchPhotos = () => {
  const {
    picsData: { pics, loading, query, fetchPhotos },
    picsDispatch,
    pageDispatch,
  } = useContext(SearchContext);
  const searchPhotos = (e) => {
    e.preventDefault();
    if (query.trim().length) {
      if (pics.length) {
        pageDispatch(page_resetPageState());
        picsDispatch(pics_CleanAllState());
      }
      fetchPhotos({ pageNumber: 1 });
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
            onChange={({ target: { value } }) =>
              picsDispatch(pics_SetQuery(value))
            }
          />
        </label>
        <button disabled={loading} type="submit" className="button">
          {loading ? "..." : "Search"}
        </button>
      </form>
    </div>
  );
};
