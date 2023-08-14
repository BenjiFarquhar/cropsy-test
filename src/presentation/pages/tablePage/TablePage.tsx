import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { red } from "@mui/material/colors";
import BlocksAutocomplete from "./components/BlocksAutocomplete";
import React, { useMemo, useRef } from "react";
import BlocksDisplay from "./components/BlocksDisplay";
import RowsTable from "./components/RowsTable/RowsTable";
import { getRowReportsById } from "../../../data/RowsRepo";
import { Row } from "../../../domain/row/Row";
import theme from "../../theme";

export default function TablePage() {
  let blocksDisplay: React.RefObject<BlocksDisplay> = useRef(null);
  let rowsTable: React.RefObject<RowsTable> = useRef(null);

  useMemo(() => {
    blocksDisplay = React.createRef<BlocksDisplay>();
    rowsTable = React.createRef<RowsTable>();
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ mt: "30px", backgroundColor: red[500], height: "100%" }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "white",
        }}
      >
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

              rowsTable.current?.updateRows(rowReports);
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
        <Grid
          xs
          sx={{
            p: 1,
          }}
        >
          <RowsTable ref={rowsTable} />
        </Grid>
      </Grid>
    </Container>
  );
}
