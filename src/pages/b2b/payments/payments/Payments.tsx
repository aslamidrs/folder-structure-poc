import payments from "../../../../features/b2b/payments/payments";
import PaymentsTemplate from "../../../../patterns/templates/b2b/Payments/PaymentsPageLayout";

const Payments = () => {
  const {
    tabList,
    handleTabChange,
    breadcrumbs,
    filters,
    tabPanels,
    switchTabs,
    currentTab,
    currentSwitchBtn,
    loading,
    handleSwitchChange,
    handleSearch,
    searchValue,
  } = payments();

  return (
    <PaymentsTemplate
      title="Payments"
      handleSearch={handleSearch}
      handleDownload={function (): void {
        throw new Error("Function not implemented.");
      }}
      currentTab={currentTab}
      currentSwitchBtn={currentSwitchBtn}
      handleTabChange={handleTabChange}
      tabs={switchTabs}
      breadcrumbs={breadcrumbs}
      tabList={tabList}
      tabPanels={tabPanels}
      filters={filters}
      loading={loading}
      handleSwitchChange={handleSwitchChange}
      searchValue={searchValue}
    />
  );
};

export default Payments;
