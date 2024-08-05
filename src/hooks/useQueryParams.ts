import { useEffect, useMemo, useState } from "react";

/**
 * Custom hook to get query parameters from the URL.
 * @returns {URLSearchParams} An instance of URLSearchParams containing the query parameters.
 */
const useQueryParams = () => {
  const [search, setSearch] = useState(window.location.search);

  useEffect(() => {
    const handleUrlChange = () => {
      setSearch(window.location.search);
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("pushstate", handleUrlChange);
    window.addEventListener("replacestate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("pushstate", handleUrlChange);
      window.removeEventListener("replacestate", handleUrlChange);
    };
  }, []);

  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQueryParams;

// Add this to your application initialization code
const originalPushState = window.history.pushState;
const originalReplaceState = window.history.replaceState;

window.history.pushState = function (...args) {
  const result = originalPushState.apply(this, args);
  const event = new Event("pushstate");
  window.dispatchEvent(event);
  return result;
};

window.history.replaceState = function (...args) {
  const result = originalReplaceState.apply(this, args);
  const event = new Event("replacestate");
  window.dispatchEvent(event);
  return result;
};
