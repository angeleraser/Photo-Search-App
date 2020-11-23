/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "jps65IS4hAGYNTfQxpPMdCypZg-uMbYsyOaMN2oqYns",
});
export const usePics = ({ keyword, nextPage, perPage, setPageData }) => {
  const isMounted = useRef(true);
  const [{ pics, loading, error }, setPics] = useState({
    pics: [],
    loading: false,
    error: null,
  });
  const fetchPhotos = async () => {
    if (isMounted.current) {
      try {
        console.log("Searching pics...");
        setPics((prev) => ({ ...prev, loading: true, error: null }));
        const resp = await unsplash.search.photos(keyword, nextPage, perPage);
        const data = await toJson(resp);
        setPics((prev) => ({
          ...prev,
          loading: false,
          pics: [...prev.pics, ...data.results],
        }));
        setPageData((prev) => ({
          ...prev,
          maxPages: data.total_pages,
          nextPage: prev.nextPage + 1,
        }));
        console.log("Search pics done!", data);
      } catch (error) {
        console.log(error);
        setPics((prev) => ({ ...prev, loading: false, error }));
      }
    }
  };
  const resetSearch = () => {
    if (isMounted.current) {
      setPics({
        pics: [],
        loading: false,
        error: null,
      });
      setPageData((prev) => ({ ...prev, maxPages: 1, nextPage: 1 }));
    }
  };
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return [
    {
      pics,
      loading,
      error,
    },
    fetchPhotos,
    resetSearch,
  ];
};
