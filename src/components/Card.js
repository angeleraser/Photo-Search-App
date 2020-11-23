import React from "react";
import PropTypes from "prop-types";
import { useImage } from "../hooks/useImage";
import { CardSkeleton } from "./CardSkeleton";
export const Card = ({
  img: {
    urls: { regular },
    id,
    alt_description,
    links: { download },
  },
}) => {
  const [isLoaded] = useImage(regular);
  return isLoaded ? (
    <div key={id} className="card">
      <div className="img-wrapper">
        <img src={regular} alt={alt_description} className="card__image" />
      </div>
      <div className="download">
        <button>View Full size</button>
        <a target="_blank" rel="nopeneer noreferrer" href={download}>
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
