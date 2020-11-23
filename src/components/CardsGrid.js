import React, { useContext } from "react";
import { Card } from "./Card";
import { SearchContext } from "../App";
import { LoadingCards } from "./LoadingCards";
import { LoadMoreButton } from "./LoadMoreButton";
export const CardsGrid = () => {
  const {
    picsData: { pics, loading },
    pageData: { maxPages, nextPage },
  } = useContext(SearchContext);
  return !pics.length && loading ? (
    <LoadingCards />
  ) : (
    <section className="container">
      <div className="cards-grid">
        {pics.map((img) => (
          <Card key={img.id} img={img} />
        ))}
      </div>
      {!!pics.length && maxPages > nextPage && <LoadMoreButton />}
    </section>
  );
};
