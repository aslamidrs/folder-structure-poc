import useQueryParams from "../../../../../hooks/useQueryParams";
import useSetQueryParams from "../../../../../hooks/useSetQueryParams";

const useSearchAndAction = () => {
  const setQueryParams = useSetQueryParams();
  const queryParams = useQueryParams();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParams({ search: e.target.value });
  };
  return {
    handleSearch,
    searchValue: queryParams.get("search") || "",
  };
};

export default useSearchAndAction;
