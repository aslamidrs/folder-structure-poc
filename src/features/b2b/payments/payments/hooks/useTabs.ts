import { useMemo } from "react";

const useTabs = () => {
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


    const currentTab = useMemo(() => {
        return 0
    }, []);

    return {tabList, handleTabChange, currentTab}
}

export default useTabs;