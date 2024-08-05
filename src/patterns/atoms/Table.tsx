import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import Row from "./Row";

interface ITableProps extends DataGridProps {
  paginationModel: {
    pageSize: number;
    page: number;
  };
}

const Table = (props: ITableProps) => {
  return (
    <DataGrid
      pageSizeOptions={props.pageSizeOptions || [5, 10, 25]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{ minHeight: 200 }}
      {...props}
    />
  );
};

export default Table;
