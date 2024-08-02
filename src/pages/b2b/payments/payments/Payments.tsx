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
  } = payments();

  return (
    <PaymentsTemplate
      title="Payments"
      handleSearch={function (query: string): void {
        throw new Error("Function not implemented.");
      }}
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
    />
  );
};

export default Payments;
