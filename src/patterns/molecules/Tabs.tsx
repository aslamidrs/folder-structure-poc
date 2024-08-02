import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  TabList as MuiTabList,
  TabPanel as MuiTabPanel,
  TabsProps as MuiTabsProps,
} from "@mui/joy";
import { FilterControls } from "../organisms";

interface ITabsProps extends MuiTabsProps {
  tabList: { key: string | number; label: string }[];
  tabPanels: { key: string | number; panel: React.ReactNode }[];
  defaultValue?: number;
  filters: any;
  currentTab: number;
}

const Tabs = ({
  tabList,
  tabPanels,
  defaultValue = 0,
  filters,
  currentTab,
  ...props
}: ITabsProps) => {
  return (
    <MuiTabs value={currentTab} defaultValue={defaultValue} {...props}>
      <MuiTabList>
        {tabList.map((tab, index) => (
          <MuiTab key={tab.key} value={index}>
            {tab.label}
          </MuiTab>
        ))}
      </MuiTabList>
      <FilterControls filters={filters} />
      {tabPanels.map((tab, index) => (
        <MuiTabPanel key={tab.key} value={index}>
          {tab.panel}
        </MuiTabPanel>
      ))}
    </MuiTabs>
  );
};

export default Tabs;
