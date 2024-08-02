import React, { ReactNode, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Row, Table, Text } from "../../../atoms";
import {
  FilterControls,
  SearchAndActions,
  StatusTabs,
  TabNavigation,
} from "../../../organisms";

import { Tabs } from "../../../molecules";

interface IPaymentsTemplateProps {
  loading: boolean;
  handleSearch: (query: string) => void;
  handleDownload: () => void;
  currentSwitchBtn: string;
  currentTab: number;
  handleTabChange: (tab: string) => void;
  tabs: any;
  breadcrumbs: any;
  tabList: { key: string | number; label: string }[];
  tabPanels: { key: string | number; rows: any; columns: any }[];
  filters: {
    onChange: (state: any) => void;
    placeholder: string;
    options: { value: string; label: string }[];
  }[];
  title: string;
  handleTabsChange: (
    event: React.SyntheticEvent | null,
    value: string | number | null
  ) => void;
}

const PaymentsTemplate: React.FC<IPaymentsTemplateProps> = (
  props: IPaymentsTemplateProps
) => {
  const tabPanels = useMemo(() => {
    return props.tabPanels.map((panel) => {
      return {
        key: panel.key,
        panel: (
          <Table
            loading={props.loading}
            rows={panel.rows}
            columns={panel.columns}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={{ pageSize: 10, page: 0 }}
            autoHeight
          />
        ),
      };
    });
  }, [props.tabPanels]);
  return (
    <Row
      configurationName="default"
      padding={2}
      boxShadow={1}
      bgcolor="background.paper"
    >
      <Button configurationName="SolidLgDanger">TestBtn</Button>
      <Text level="h1">{props.title}</Text>
      <SearchAndActions
        breadcrumbs={props.breadcrumbs}
        onSearch={props.handleSearch}
        onDownload={props.handleDownload}
        searchPlaceholder="PO Number, Retailer name"
      />
      <Row configurationName="start" marginBottom={3}>
        <TabNavigation
          tabs={props.tabs}
          currentTab={props.currentSwitchBtn}
          onTabChange={props.handleTabChange}
        />
      </Row>
      <Tabs
        onChange={props.handleTabsChange}
        filters={props.filters}
        tabList={props.tabList}
        currentTab={props.currentTab}
        tabPanels={tabPanels}
      />
    </Row>
  );
};

export default PaymentsTemplate;
