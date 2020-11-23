import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useImage } from "../../hooks/useImage";
import { CardSkeleton } from "./CardSkeleton";
import { SearchContext } from "../../App";
import { modal_Open } from "../../actions/fullViewModal";
export const Card = ({
  img: {
    urls: { regular, full },
    id,
    alt_description,
    links: { download },
  },
  animationDelay,
}) => {
  const [isLoaded] = useImage(regular);
  const { modalDispatch } = useContext(SearchContext);
  return isLoaded ? (
    <div
      style={{ animationDelay: `${animationDelay}ms` }}
      key={id}
      className="card">
      <div className="img-wrapper">
        <img src={regular} alt={alt_description} className="card__image" />
      </div>
      <div className="download">
        <button
          onClick={() => {
            modalDispatch(modal_Open({ url: full, alt_description }));
          }}>
          View Full size
        </button>
        <a
          download
          target="_blank"
          rel="nopeneer noreferrer"
          href={download}>
          {" "}
          <i>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z"></path>
            </svg>
          </i>{" "}
          Download
        </a>
      </div>
    </div>
  ) : (
    <CardSkeleton />
  );
};

Card.defaultProps = {
  img: {},
};

Card.propTypes = {
  img: PropTypes.object.isRequired,
};
