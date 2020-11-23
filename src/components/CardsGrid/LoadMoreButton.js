import React, { useContext } from "react";
import { SearchContext } from "../../App";
export const LoadMoreButton = () => {
  const {
    picsData: { loading, fetchPhotos },
    pageData: { currentPage },
  } = useContext(SearchContext);
  const handleFetchMorePhotos = () => {
    console.log(currentPage);
    fetchPhotos({ pageNumber: currentPage + 1 });
  };
  return (
    <button
      onClick={handleFetchMorePhotos}
      disabled={loading}
      className="load-more-button">
      {" "}
      {loading ? (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      ) : (
        "Load more"
      )}
    </button>
  );
};
