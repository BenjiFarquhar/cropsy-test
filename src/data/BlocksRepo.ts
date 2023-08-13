import axios from "axios";
import BlockSearchDto from "../domain/block/BlockSearchDto";

export const getBlocks = async (filter: string): Promise<BlockSearchDto[]> => {
  const response = await axios.get<BlockSearchDto[]>(
    `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_blocks.json`
  );
  return response.data.filter((d: { id: number; name: string }) =>
    d.name.toLowerCase().includes(filter.toLowerCase())
  );
};
