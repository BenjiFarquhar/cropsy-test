import { Box, Chip, List, ListItem, Stack } from "@mui/material";
import React from "react";
import IBlockSearchDto from "../../../../../../domain/block/IBlockSearchDto";

type BlocksDisplayState = {
  blocks: IBlockSearchDto[];
};

type BlocksDisplayProps = {
  ref: React.RefObject<BlocksDisplay>;
};

export default class BlocksDisplay extends React.Component<
  BlocksDisplayProps,
  BlocksDisplayState
> {
  constructor(props: any) {
    super(props);
    this.state = { blocks: [] };
  }

  updateBlocks(block: IBlockSearchDto): void {
    const blocks = this.state.blocks;
    if (!this.state.blocks.find((b) => b.id === block.id)) {
      blocks.push(block);
    } else {
      blocks.splice(
        this.state.blocks.findIndex((b) => b.id === block.id),
        1
      );
    }
    this.setState({ blocks: blocks });
  }

  render(): JSX.Element {
    return (
      <Box
        sx={{
          height: "500px",
          backgroundColor: "white",
          mb: 2,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <List
          component={Stack}
          direction="row"
          sx={{
            display: "flex",
            flexFlow: "row wrap",
          }}
        >
          {this.state.blocks.map((block) => (
            <ListItem
              key={block.id}
              sx={{
                width: "auto",
                position: "relative",
              }}
            >
              <Chip
                label={block.name}
                onDelete={() =>
                  this.setState({
                    blocks: this.state.blocks.filter((b) => b.id !== block.id),
                  })
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}
