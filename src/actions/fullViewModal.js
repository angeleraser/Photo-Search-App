import { modalTypes } from "../types/types";
export const modal_Open = (currentImageSrc) => ({
  type: modalTypes.Open,
  payload: { ...currentImageSrc },
});
export const modal_Close = () => ({ type: modalTypes.Close });
