import axios from "axios";
import IRowDto from "../domain/row/IRowDto";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Row } from "../domain/row/Row";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { getBlocks } from "./BlocksRepo";

// Not much benefit adding this to redux as it is only used for component state
export const getRowReportsById = async (id: number): Promise<IRowDto[]> => {
  if (id === 462 || id === 463) {
    const response = await axios.get<IRowDto[]>(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_row_reports_block_${id}.json`
    );
    return response.data;
  }
  return [];
};

export const rowsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://raw.githubusercontent.com/wjsoft08/test-data/main/api/",
  }),
  endpoints: (build) => ({
    getAllRows: build.query<Row[], {}>({
      async queryFn(_args, _queryApi, _extraOptions, fetchRows) {
        const allBlocks = await getBlocks("c");
        const rowReports: Row[] = (
          await Promise.all(
            allBlocks.map(async (block): Promise<Row[]> => {
              const dtos =
                block.id === 462 || block.id === 463
                  ? ((await fetchRows(
                      `example_row_reports_block_${block.id}.json`
                    )) as QueryReturnValue<IRowDto[]>)
                  : { data: [] };
              return dtos.data!.map((dto) => Row.fromDto(dto, block.name));
            })
          )
        ).flat();
        return { data: rowReports };
      },
    }),
  }),
});

export const { useGetAllRowsQuery } = rowsApi;
