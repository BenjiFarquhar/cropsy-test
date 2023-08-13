import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Row } from "../../../../../domain/row/Row";

const columns: GridColDef<Row>[] = [
  {
    field: "attribute",
    headerName: "Attribute",
    width: 150,
  },
  { field: "blockName", headerName: "Block Name", width: 150 },
  {
    field: "rowId",
    headerName: "Row Id",
    width: 110,
  },
  {
    field: "prunedToTarget",
    headerName: "Pruned to Target %",
    type: "number",
    width: 200,
  },
  {
    field: "cane0",
    headerName: "Cane 0",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 0)?.vinecount,
  },
  {
    field: "cane1",
    headerName: "Cane 1",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 1)?.vinecount,
  },
  {
    field: "cane2",
    headerName: "Cane 2",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 2)?.vinecount,
  },
  {
    field: "cane3",
    headerName: "Cane 3",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 3)?.vinecount,
  },
  {
    field: "cane4",
    headerName: "Cane 4",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 4)?.vinecount,
  },
];

export default columns;
