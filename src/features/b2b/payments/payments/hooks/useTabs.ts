import { useMemo } from "react";
import useQueryParams from "../../../../../hooks/useQueryParams";
import useSetQueryParams from "../../../../../hooks/useSetQueryParams";

const useTabs = () => {
  const tabList = [
    { key: 1, label: "REQUESTED" },
    { key: 5, label: "PENDING" },
    { key: 2, label: "APPROVED" },
    { key: 3, label: "REJECTED" },
    { key: 4, label: "COMPLETED" },
  ];
  const setQueryParams = useSetQueryParams();
  const handleTabChange = (
    event: React.SyntheticEvent | null,
    value: string | number | null
  ) => {
    setQueryParams({ tab: value?.toString() || "0" });
  };

  const handleSwitchChange = (
    event: React.SyntheticEvent | null,
    value: string | number | null
  ) => {
    setQueryParams({ switchBtn: value?.toString() || "REGULAR" });
  };

  const queryParams = useQueryParams();

  const currentSwitchBtn = queryParams.get("switchBtn") || "REGULAR";
  const currentTab = parseInt(queryParams.get("tab") || "0");
  return {
    tabList,
    handleTabChange,
    currentTab,
    currentSwitchBtn,
    handleSwitchChange,
  };
};

export default useTabs;
