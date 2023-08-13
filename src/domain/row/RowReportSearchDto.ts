import RowReportCustomStat from "./RowReportCustomStat";

export default interface RowSearchDto {
  id: number;
  attribute: string;
  blockId: number;
  customStats: RowReportCustomStat[];
  modifiedOn: string;
  rowId: number;
  scanArea: number;
  scanDate: string;
  scanWindowStart: string;
  vineCounts: number[];
}
