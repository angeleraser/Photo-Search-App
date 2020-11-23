import { createContext, useReducer } from "react";
import { pics_fetchPhotos } from "./actions/pics";
import { CardsGrid } from "./components/CardsGrid/CardsGrid";
import { FullViewModal } from "./components/FullViewModal/FullViewModal";
import { SearchPhotos } from "./components/SearchForm/SearchPhotos";
import { modalReducer, modal_initialState } from "./reducers/modalReducer";
import { pageReducer, page_initialState } from "./reducers/pageReducer";
import { picsReducer, pics_initialState } from "./reducers/picsReducer";
export const SearchContext = createContext();
const App = () => {
  const [picsData, picsDispatch] = useReducer(picsReducer, pics_initialState);
  const [pageData, pageDispatch] = useReducer(pageReducer, page_initialState);
  const [modal, modalDispatch] = useReducer(modalReducer, modal_initialState);
  const handleFetchPhotos = pics_fetchPhotos({
    picsData,
    pageData,
    pageDispatch,
    picsDispatch,
  });
  const providerValue = {
    picsData: {
      ...picsData,
      fetchPhotos: handleFetchPhotos,
    },
    pageData,
    modal,
    pageDispatch,
    picsDispatch,
    modalDispatch,
  };
  return (
    <SearchContext.Provider value={providerValue}>
      <h1 className="title">React Photo Search</h1>
      <SearchPhotos />
      <CardsGrid />
      <FullViewModal />
    </SearchContext.Provider>
  );
};

export default App;
