import RowReportCustomStat from "./RowReportCustomStat";

export interface Row {
  id: number;
  attribute: string;
  blockId: number;
  blockName: string;
  customStats: RowReportCustomStat[];
  modifiedOn: string;
  rowId: number;
  scanArea: number;
  scanDate: string;
  scanWindowStart: string;
  vineCounts: number[];
}
