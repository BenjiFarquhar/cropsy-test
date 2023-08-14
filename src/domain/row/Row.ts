import IRowReportCustomStat from "./IRowReportCustomStat";
import IRowDto from "./IRowDto";

export class Row {
  id: number;
  attribute: string;
  blockId: number;
  blockName: string;
  customStats: IRowReportCustomStat[];
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
    customStats: IRowReportCustomStat[],
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

  static fromDto(dto: IRowDto, blockName: string): Row {
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

  prunedToTargetPercent = (): number | null => {
    const caneCount0 = this.customStats.find((stat) => stat.attributeVal === 0)
        ?.vinecount!,
      caneCount1 = this.customStats.find((stat) => stat.attributeVal === 1)
        ?.vinecount!,
      caneCount2 = this.customStats.find((stat) => stat.attributeVal === 2)
        ?.vinecount!,
      caneCount3 = this.customStats.find((stat) => stat.attributeVal === 3)
        ?.vinecount!,
      caneCount4 = this.customStats.find((stat) => stat.attributeVal === 4)
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

  static prunedToTargetAverage = (rows: Row[]): number => {
    const prunedToTargetTotal = rows.reduce(
      (total, row) => total + (row.prunedToTargetPercent() ?? 0),
      0
    );

    const prunedToTargetAverage = prunedToTargetTotal / rows.length;

    return prunedToTargetAverage;
  };
}
