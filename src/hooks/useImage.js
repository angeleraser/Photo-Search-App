import { useEffect, useRef, useState } from "react";

export const useImage = (url) => {
  const isMounted = useRef(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const newImg = new Image();
  newImg.onload = () => {
    if (isMounted.current) {
      setIsLoaded(true);
    }
  };
  newImg.onerror = () => {
    if (isMounted.current) {
      setIsLoaded(true);
    }
  };
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  newImg.src = url;
  return [isLoaded];
};
