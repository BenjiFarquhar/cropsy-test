import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Row } from "../../../../../domain/row/Row";
import IRowReportCustomStat from "../../../../../domain/row/IRowReportCustomStat";

export const prunedToTargetAverage = (rows: Row[]): number => {
  const prunedToTargetTotal = rows.reduce(
    (total, row) => total + (prunedToTargetForRow(row.customStats) ?? 0),
    0
  );

  const prunedToTargetAverage = prunedToTargetTotal / rows.length;

  return prunedToTargetAverage;
};

export const prunedToTargetForRow = (
  customStats: IRowReportCustomStat[]
): number | null => {
  const caneCount0 = customStats.find((stat) => stat.attributeVal === 0)
      ?.vinecount!,
    caneCount1 = customStats.find((stat) => stat.attributeVal === 1)
      ?.vinecount!,
    caneCount2 = customStats.find((stat) => stat.attributeVal === 2)
      ?.vinecount!,
    caneCount3 = customStats.find((stat) => stat.attributeVal === 3)
      ?.vinecount!,
    caneCount4 = customStats.find((stat) => stat.attributeVal === 4)
      ?.vinecount!;
  let highestCaneCount;
  if (caneCount4 != 0) {
    highestCaneCount = caneCount4;
  } else if (caneCount3 != 0) {
    highestCaneCount = caneCount3;
  } else if (caneCount2 != 0) {
    highestCaneCount = caneCount2;
  } else if (caneCount1 != 0) {
    highestCaneCount = caneCount1;
  } else {
    highestCaneCount = caneCount0;
  }
  const totalCaneCounts =
    caneCount0 + caneCount1 + caneCount2 + caneCount3 + caneCount4;
  const result = (highestCaneCount / totalCaneCounts) * 100;
  return Number.isNaN(result) ? null : result;
};

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
    valueGetter: (params: GridValueGetterParams<Row>) =>
      prunedToTargetForRow(params.row.customStats)?.toFixed(1),
  },
  {
    field: "cane0",
    headerName: "0 Canes",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 0)?.vinecount,
  },
  {
    field: "cane1",
    headerName: "1 Cane",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 1)?.vinecount,
  },
  {
    field: "cane2",
    headerName: "2 Canes",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 2)?.vinecount,
  },
  {
    field: "cane3",
    headerName: "3 Canes",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 3)?.vinecount,
  },
  {
    field: "cane4",
    headerName: "4 Canes",
    width: 110,
    valueGetter: (params: GridValueGetterParams<Row>) =>
      params.row.customStats.find((stat) => stat.attributeVal === 4)?.vinecount,
  },
];

export default columns;
