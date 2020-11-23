import { pageTypes } from "../types/types";

export const page_updateCurrentPage = () => ({
  type: pageTypes.UpdateCurrentPage,
});
export const page_updateMaxPages = (pagesCount) => ({
  type: pageTypes.UpdateMaxPages,
  payload: pagesCount,
});
export const page_resetPageState = () => ({ type: pageTypes.ResetState });
