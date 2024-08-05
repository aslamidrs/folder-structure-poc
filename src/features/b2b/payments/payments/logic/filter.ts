import useQueryParams from "../../../../../hooks/useQueryParams";
import useSetQueryParams from "../../../../../hooks/useSetQueryParams";

export const filter = () => {
  const setQueryParams = useSetQueryParams();
  const queryParams = useQueryParams();
  const onChangeStates = (state: any): void => {
    setQueryParams({ states: state || "All" });
  };

  const onChangePaymentType = (state: any): void => {
    setQueryParams({ paymentType: state || "All" });
  };

  const onChangeDemoType = (state: any): void => {
    setQueryParams({ demoType: state || "All" });
  };

  const onChangeDateOfActivity = (state: any): void => {
    setQueryParams({ dateOfActivity: state || "All" });
  };

  return [
    {
      placeholder: "States",
      onChange: onChangeStates,
      options: [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
      ],
      value: queryParams.get("states") || "all",
    },
    {
      placeholder: "Payment Type",
      onChange: onChangePaymentType,
      options: [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
      ],
      value: queryParams.get("paymentType") || "all",
    },
    {
      placeholder: "Demo Type",
      onChange: onChangeDemoType,
      options: [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
      ],
      value: queryParams.get("demoType") || "all",
    },
    {
      placeholder: "Date of Activity",
      onChange: onChangeDateOfActivity,
      options: [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
      ],
      value: queryParams.get("dateOfActivity") || "all",
    },
  ];
};
