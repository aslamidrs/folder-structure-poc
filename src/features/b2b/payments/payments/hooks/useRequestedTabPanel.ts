import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchPayments } from "../services/payments";

const useRequestedTabPanel = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const fetchInitData = useCallback(async () => {
    setLoading(true);
    const rows = await fetchPayments();
    setLoading(false);
    return rows;
  }, []);

  useEffect(() => {
    fetchInitData().then((rows) => {
      setRows(rows);
    });
  }, [fetchInitData]);

  return {
    columns,
    rows,
    loading,
  };
};

export default useRequestedTabPanel;
