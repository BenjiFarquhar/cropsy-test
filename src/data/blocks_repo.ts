import axios from "axios";

export const getBlocks = async (filter: string) => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/wjsoft08/test- data/main/api/example_blocks.json`
  );
  return response.data.filter((d: { id: number; name: string }) =>
    d.name.includes(filter)
  );
};
