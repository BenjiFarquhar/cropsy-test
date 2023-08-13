import axios from "axios";
import IBlockSearchDto from "../domain/block/IBlockSearchDto";

export const getBlocks = async (filter: string): Promise<IBlockSearchDto[]> => {
  const response = await axios.get<IBlockSearchDto[]>(
    `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_blocks.json`
  );
  return response.data.filter((d: { id: number; name: string }) =>
    d.name.toLowerCase().includes(filter.toLowerCase())
  );
};
