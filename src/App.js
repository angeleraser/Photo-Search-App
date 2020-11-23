import { createContext, useState } from "react";
import { CardsGrid } from "./components/CardsGrid";
import { SearchPhotos } from "./components/SearchPhotos";
import { usePics } from "./hooks/usePics";
export const SearchContext = createContext();
const App = () => {
  const [query, setQuery] = useState("");
  const [{ nextPage, perPage, maxPages }, setPageData] = useState({
    nextPage: 1,
    perPage: 10,
    maxPages: 1,
  });
  const [{ pics, loading }, fetchPhotos, resetSearch] = usePics({
    keyword: query,
    perPage,
    nextPage,
    maxPages,
    setPageData,
  });
  const providerValue = {
    query,
    setQuery,
    picsData: {
      loading,
      fetchPhotos,
      pics,
      resetSearch,
    },
    pageData: {
      perPage,
      nextPage,
      maxPages,
      setPageData,
    },
  };
  return (
    <div className="wrapper">
      <h1 className="title">React Photo Search</h1>
      <SearchContext.Provider value={providerValue}>
        <SearchPhotos />
        <CardsGrid />
      </SearchContext.Provider>
    </div>
  );
};

export default App;
