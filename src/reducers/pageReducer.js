import { pageTypes } from "../types/types";

export const page_initialState = {
  currentPage: 0,
  perPage: 12,
  maxPages: 0,
};

export const pageReducer = (state = page_initialState, { type, payload }) => {
  switch (type) {
    case pageTypes.ResetState:
      return {
        ...page_initialState,
      };
    case pageTypes.UpdateCurrentPage:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case pageTypes.UpdateMaxPages:
      return {
        ...state,
        maxPages: payload,
      };
    default:
      return state;
  }
};
