import { ToggleButtonGroup } from "@mui/joy";
import React from "react";
import { Button } from "../atoms";
// import { TabGroup } from '../molecules';

interface tab {
  id: string | number;
  value: string;
  label: string;
}
interface TabNavigationProps {
  currentTab: string;
  tabs: tab[];
  onTabChange: (event: React.SyntheticEvent, value: string | null) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  currentTab,
  onTabChange,
  tabs,
}) => {
  return (
    <ToggleButtonGroup variant="soft" value={currentTab} onChange={onTabChange}>
      {tabs.map((tab) => (
        <Button
          configurationName="OutlinedMdPrimary"
          key={tab.id}
          value={tab.value}
        >
          {tab.label}
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};

export default TabNavigation;
