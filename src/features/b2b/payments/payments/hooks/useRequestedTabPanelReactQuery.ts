import { GridColDef } from "@mui/x-data-grid";
import { fetchPayments } from "../services/payments";
import { useQuery } from "@tanstack/react-query";

const useRequestedTabPanelReactQuery = () => {
  const {
    data: rows,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });

  const columns: GridColDef<(typeof rows)[]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value: any, row: any) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  return {
    columns,
    rows,
    loading: isLoading,
  };
};

export default useRequestedTabPanelReactQuery;
