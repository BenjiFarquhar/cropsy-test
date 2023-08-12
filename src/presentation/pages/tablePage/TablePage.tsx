import { Box, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, green, red } from "@mui/material/colors";
import BlocksAutocomplete from "./components/BlocksAutocomplete";
import React from "react";
import BlockSearchDto from "../../../domain/block";
import BlocksDisplay from "./components/BlocksDisplay";

class TablePage extends React.Component<
  {},
  { selectedBlocks: BlockSearchDto[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = { selectedBlocks: [] };
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
            backgroundColor: blue[500],
          }}
        >
          <Box
            sx={{
              width: "400px",
              flexDirection: "column",
              backgroundColor: green[500],
              p: 1,
            }}
          >
            <BlocksDisplay
              blocks={this.state.selectedBlocks}
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
          </Box>
          <Grid xs>
            <Paper>right</Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default TablePage;
