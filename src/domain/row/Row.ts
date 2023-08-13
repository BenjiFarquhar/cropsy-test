import RowReportCustomStat from "./RowReportCustomStat";
import RowDto from "./RowReportSearchDto";

export class Row {
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

  constructor(
    id: number,
    attribute: string,
    blockId: number,
    blockName: string,
    customStats: RowReportCustomStat[],
    modifiedOn: string,
    rowId: number,
    scanArea: number,
    scanDate: string,
    scanWindowStart: string,
    vineCounts: number[]
  ) {
    this.id = id;
    this.attribute = attribute;
    this.blockId = blockId;
    this.blockName = blockName;
    this.customStats = customStats;
    this.modifiedOn = modifiedOn;
    this.rowId = rowId;
    this.scanArea = scanArea;
    this.scanDate = scanDate;
    this.scanWindowStart = scanWindowStart;
    this.vineCounts = vineCounts;
  }

  static fromDto(dto: RowDto, blockName: string): Row {
    return new Row(
      dto.id,
      dto.attribute,
      dto.blockId,
      blockName,
      dto.customStats,
      dto.modifiedOn,
      dto.rowId,
      dto.scanArea,
      dto.scanDate,
      dto.scanWindowStart,
      dto.vineCounts
    );
  }
}
