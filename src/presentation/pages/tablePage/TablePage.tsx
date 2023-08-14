import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, green, red } from "@mui/material/colors";
import BlocksAutocomplete from "./components/BlocksAutocomplete";
import React from "react";
import IBlockSearchDto from "../../../domain/block/IBlockSearchDto";
import BlocksDisplay from "./components/BlocksDisplay";
import RowsTable from "./components/RowsTable/RowsTable";
import { getRowReportsById } from "../../../data/RowsRepo";
import { Row } from "../../../domain/row/Row";
import theme from "../../theme";

type TableState = {
  selectedBlocks: IBlockSearchDto[];
  rows: Row[];
};

export default class TablePage extends React.Component<{}, TableState> {
  constructor(props: {}) {
    super(props);
    this.state = { selectedBlocks: [], rows: [] };
  }

  render() {
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
            <BlocksDisplay
              blocks={this.state.selectedBlocks.sort((a, b) =>
                a.name.localeCompare(b.name)
              )}
              onBlockDeleted={(block) =>
                this.setState({
                  selectedBlocks: this.state.selectedBlocks.filter(
                    (b) => b.id !== block.id
                  ),
                })
              }
            />
            <BlocksAutocomplete
              onChange={(block) => {
                const blocks = this.state.selectedBlocks;
                if (!this.state.selectedBlocks.find((b) => b.id === block.id)) {
                  blocks.push(block);
                } else {
                  blocks.splice(
                    this.state.selectedBlocks.findIndex(
                      (b) => b.id === block.id
                    ),
                    1
                  );
                }
                this.setState({ selectedBlocks: blocks });
              }}
            />
            <Button
              variant="contained"
              fullWidth={true}
              onClick={async () => {
                const rowReports: Row[] = (
                  await Promise.all(
                    this.state.selectedBlocks.map(
                      async (block): Promise<Row[]> => {
                        var dtos = await getRowReportsById(block.id);

                        return dtos.map((dto) => Row.fromDto(dto, block.name));
                      }
                    )
                  )
                ).flat();

                this.setState({ rows: rowReports });
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
            <RowsTable rows={this.state.rows} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
