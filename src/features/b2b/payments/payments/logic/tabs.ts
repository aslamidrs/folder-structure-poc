export const tabs = () => {
     const tabList = [
    { key: 1, label: "REQUESTED" },
    { key: 5, label: "PENDING" },
    { key: 2, label: "APPROVED" },
    { key: 3, label: "REJECTED" },
    { key: 4, label: "COMPLETED" },
     ];
    const handleTabChange = (tab: string) => {
        throw new Error("Function not implemented.");
    }
    return {tabList, handleTabChange}
}