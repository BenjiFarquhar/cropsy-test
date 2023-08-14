import { Box, Button } from "@mui/material";
import BlocksDisplay from "./components/BlocksDisplay";
import BlocksAutocomplete from "./components/BlocksAutocomplete";
import theme from "../../../../CropsyTheme";
import React, { useMemo, useRef } from "react";
import { Row } from "../../../../../domain/row/Row";
import { getRowReportsById } from "../../../../../data/RowsRepo";
import RowsTable from "../rowsTable1/RowsTable";

type BlocksFilterProps = {
  rowsTableRef: React.RefObject<RowsTable>;
};

export default function BlocksFilter(props: BlocksFilterProps) {
  let blocksDisplay: React.RefObject<BlocksDisplay> = useRef(null);

  useMemo(() => {
    blocksDisplay = React.createRef<BlocksDisplay>();
  }, []);

  return (
    <Box
      sx={{
        width: "300px",
        flexDirection: "column",
        alignContent: "stretch",
        alignItems: "stretch",
        backgroundColor: theme.palette.primary.main,
        p: 1,
        mb: "11px",
      }}
    >
      <BlocksDisplay ref={blocksDisplay} />
      <BlocksAutocomplete
        onChange={(block) => blocksDisplay.current?.updateBlocks(block)}
      />
      <Button
        variant="contained"
        fullWidth={true}
        onClick={async () => {
          const rowReports: Row[] = (
            await Promise.all(
              blocksDisplay.current!.state.blocks.map(
                async (block): Promise<Row[]> => {
                  var dtos = await getRowReportsById(block.id);

                  return dtos.map((dto) => Row.fromDto(dto, block.name));
                }
              )
            )
          ).flat();

          props.rowsTableRef.current?.updateRows(rowReports);
        }}
        sx={{
          my: 2,
          flexDirection: "row",
          flex: 1,
        }}
      >
        Apply Filter
      </Button>
    </Box>
  );
}
