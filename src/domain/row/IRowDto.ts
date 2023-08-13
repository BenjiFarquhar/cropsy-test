import IRowReportCustomStat from "./IRowReportCustomStat";

export default interface IRowDto {
  id: number;
  attribute: string;
  blockId: number;
  customStats: IRowReportCustomStat[];
  modifiedOn: string;
  rowId: number;
  scanArea: number;
  scanDate: string;
  scanWindowStart: string;
  vineCounts: number[];
}
