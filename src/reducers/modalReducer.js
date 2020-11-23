import { modalTypes } from "../types/types";

export const modal_initialState = {
  isOpen: false,
  currentImageSrc: {
    url: "",
    alt_description: "",
  },
};

export const modalReducer = (state = modal_initialState, { type, payload }) => {
  switch (type) {
    case modalTypes.Open:
      return {
        currentImageSrc: { ...payload },
        isOpen: true,
      };
    case modalTypes.Close:
      return {
        currentImageSrc: {},
        isOpen: false,
      };
    default:
      return state;
  }
};
