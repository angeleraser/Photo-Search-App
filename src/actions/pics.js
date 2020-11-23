import { picsTypes } from "../types/types";
import { page_updateCurrentPage, page_updateMaxPages } from "./page";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "jps65IS4hAGYNTfQxpPMdCypZg-uMbYsyOaMN2oqYns",
});

export const pics_SetQuery = (value) => ({
  type: picsTypes.SetQuery,
  payload: value,
});

export const pics_SavePhotos = (pics) => ({
  type: picsTypes.SavePhotos,
  payload: pics,
});

export const pics_StartLoading = () => ({ type: picsTypes.StartLoading });

export const pics_FinishLoading = () => ({ type: picsTypes.FinishLoading });

export const pics_SetFetchError = (error) => ({
  type: picsTypes.SetFetchError,
  payload: error,
});

export const pics_RemoveFetchError = () => ({
  type: picsTypes.SetFetchError,
});

export const pics_CleanAllState = () => ({ type: picsTypes.CleanAllState });

export const pics_fetchPhotos = (state) => {
  return async ({ pageNumber = 1 }) => {
    const {
      pageData: { perPage },
      picsData,
      picsDispatch,
      pageDispatch,
    } = state;
    try {
      console.log(
        `Searching ${perPage} photos by "${picsData.query}" - Page: ${pageNumber}`
      );
      picsDispatch(pics_StartLoading());
      const resp = await unsplash.search.photos(
        picsData.query,
        pageNumber,
        perPage
      );
      const data = await toJson(resp);
      picsDispatch(pics_SavePhotos(data.results));
      if (picsData.pics.length) {
        window.scrollBy({ top: 380, behavior: "smooth" });
      }
      pageDispatch(page_updateMaxPages(data.total_pages));
      pageDispatch(page_updateCurrentPage());
      picsDispatch(pics_FinishLoading());
      console.log("Search pics done!", data);
    } catch (error) {
      console.log(error);
      picsDispatch(pics_SetFetchError(error));
    } finally {
      picsDispatch(pics_FinishLoading());
    }
  };
};
