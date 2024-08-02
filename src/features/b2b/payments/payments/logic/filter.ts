export const filter = () => {
    const onChangeStates = (state: any): void => {
        throw new Error("Function not implemented.");
    }

    const onChangePaymentType = (state: any): void => {
        throw new Error("Function not implemented.");
    }

    const onChangeDemoType = (state: any): void => {
        throw new Error("Function not implemented.");
    }

    const onChangeDateOfActivity = (state: any): void => {
        throw new Error("Function not implemented.");
    }

    
    
    return [
        {
          placeholder: "States",
          onChange: onChangeStates,
          options: [
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
          ],
        },
        {
          placeholder: "Payment Type",
          onChange: onChangePaymentType,
          options: [
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
          ],
        },
        {
          placeholder: "Demo Type",
          onChange: onChangeDemoType,
          options: [
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
          ],
        },
        {
          placeholder: "Date of Activity",
          onChange: onChangeDateOfActivity,
          options: [
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
          ],
        },
      ]
}