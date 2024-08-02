import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import Row from "./Row";

interface ITableProps extends DataGridProps {
  pagination?: any;
}

const Table = (props: ITableProps) => {
  return (
    <DataGrid
      initialState={{ pagination: props.pagination || { pageSize: 15 } }}
      pageSizeOptions={props.pageSizeOptions || [5, 10, 25]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{ minHeight: 200 }}
      {...props}
    />
  );
};

export default Table;
