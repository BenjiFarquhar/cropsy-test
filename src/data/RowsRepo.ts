import axios from "axios";
import IRowDto from "../domain/row/IRowDto";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IBlockSearchDto from "../domain/block/IBlockSearchDto";
import { Row } from "../domain/row/Row";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

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
    getRowsById: build.query<Row[], IBlockSearchDto[]>({
      async queryFn(
        selectedBlocks: IBlockSearchDto[],
        _queryApi,
        _extraOptions,
        fetchRows
      ) {
        const rowReports: Row[] = (
          await Promise.all(
            selectedBlocks.map(async (block): Promise<Row[]> => {
              const dtos = (await fetchRows(
                `example_row_reports_block_${block.id}.json`
              )) as QueryReturnValue<IRowDto[]>;
              return dtos.data!.map((dto) => Row.fromDto(dto, block.name));
            })
          )
        ).flat();
        return { data: rowReports as Row[] };
      },
    }),
  }),
});

export const { useGetRowsByIdQuery } = rowsApi;
