import useRequestedTabPanel from "./hooks/useRequestedTabPanel";
import useRequestedTabPanelReactQuery from "./hooks/useRequestedTabPanelReactQuery";
import useSearchAndAction from "./hooks/useSearchAndAction";
import useTabs from "./hooks/useTabs";
import { breadcrumbs } from "./logic/breadcrumbs";
import { filter } from "./logic/filter";

const payments = () => {
  const { rows, columns, loading } = useRequestedTabPanelReactQuery();
  // const { rows, columns, loading } = useRequestedTabPanel();

  const switchTabs = [
    { id: 1, label: "REGULAR", value: "REGULAR" },
    { id: 2, label: "GST PAYMENTS", value: "GST PAYMENTS" },
  ];
  const {
    tabList,
    handleTabChange,
    currentTab,
    handleSwitchChange,
    currentSwitchBtn,
  } = useTabs();
  const filters = filter();
  const breadcrumbsData = breadcrumbs();
  const { handleSearch, searchValue } = useSearchAndAction();
  const tabPanels: any = [
    {
      id: 1,
      rows,
      columns,
    },
  ];
  return {
    tabList,
    handleTabChange,
    breadcrumbs: breadcrumbsData,
    filters,
    tabPanels,
    switchTabs,
    currentTab,
    loading,
    currentSwitchBtn,
    handleSwitchChange,
    handleSearch,
    searchValue,
  };
};

export default payments;
