import React, { useContext} from "react";
import { SearchContext } from "../../App";
import { Card } from "../Card/Card";
import { LoadingCards } from "./LoadingCards";
import { LoadMoreButton } from "./LoadMoreButton";
export const CardsGrid = () => {
  const {
    picsData: { pics, loading },
    pageData: { maxPages, currentPage, perPage },
  } = useContext(SearchContext);
  let animationDelay = -50;
  return !pics.length && loading ? (
    <LoadingCards />
  ) : (
    <section className="container">
      <div className="cards-grid">
        {pics.map((img, i) => {
          if ((i + 1) % perPage === 0) animationDelay = -50;
          animationDelay += 50;
          return (
            <Card key={img.id} img={img} animationDelay={animationDelay} />
          );
        })}
      </div>
      {!!pics.length && maxPages > currentPage && <LoadMoreButton />}
    </section>
  );
};
