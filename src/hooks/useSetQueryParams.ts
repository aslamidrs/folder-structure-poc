import { useCallback } from "react";

/**
 * Custom hook to set query parameters in the URL.
 * @returns {Function} A function to set query parameters.
 */
const useSetQueryParams = () => {
  const setQueryParams = useCallback((params: Record<string, string>) => {
    const url = new URL(window.location.href);

    Object.keys(params).forEach((key) => {
      if (params[key]) {
        url.searchParams.set(key, params[key]);
      } else {
        url.searchParams.delete(key);
      }
    });

    window.history.pushState({}, "", url.toString());
  }, []);

  return setQueryParams;
};

export default useSetQueryParams;
