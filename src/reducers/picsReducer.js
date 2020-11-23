import { picsTypes } from "../types/types";
export const pics_initialState = {
  query: "",
  pics: [],
  loading: false,
  error: null,
};
export const picsReducer = (state = pics_initialState, { type, payload }) => {
  switch (type) {
    case picsTypes.SetQuery:
      return {
        ...state,
        query: payload,
      };
    case picsTypes.SavePhotos:
      return {
        ...state,
        pics: [...state.pics, ...payload],
      };
    case picsTypes.StartLoading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case picsTypes.FinishLoading:
      return {
        ...state,
        loading: false,
      };
    case picsTypes.SetFetchError:
      return {
        ...state,
        error: payload,
      };
    case picsTypes.CleanAllState:
      return {
        ...pics_initialState,
        query: state.query,
      };
    default:
      return state;
  }
};
