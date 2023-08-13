import axios from "axios";
import IRowDto from "../domain/row/IRowDto";

export const getRowReportsById = async (id: number): Promise<IRowDto[]> => {
  if (id === 462 || id === 463) {
    const response = await axios.get<IRowDto[]>(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_row_reports_block_${id}.json`
    );
    return response.data;
  }
  return [];
};
