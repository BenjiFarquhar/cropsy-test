import axios from "axios";
import RowDto from "../domain/row/RowReportSearchDto";

export const getRowReportsById = async (id: number): Promise<RowDto[]> => {
  if (id === 462 || id === 463) {
    const response = await axios.get<RowDto[]>(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_row_reports_block_${id}.json`
    );
    return response.data;
  }
  return [];
};
