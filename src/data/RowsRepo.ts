import axios from "axios";
import RowReportSearchDto from "../domain/row/RowReportSearchDto";

export const getRowReportsById = async (
  id: number
): Promise<RowReportSearchDto[]> => {
  if (id === 462 || id === 463) {
    const response = await axios.get<RowReportSearchDto[]>(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_row_reports_block_${id}.json`
    );
    return response.data;
  }
  return [];
};
