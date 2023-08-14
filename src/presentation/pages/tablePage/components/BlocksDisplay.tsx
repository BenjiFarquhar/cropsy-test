import { Box, Chip, List, ListItem, Stack } from "@mui/material";
import React from "react";
import IBlockSearchDto from "../../../../domain/block/IBlockSearchDto";

export default class BlocksDisplay extends React.Component<
  {
    blocks: IBlockSearchDto[];
    onBlockDeleted: (block: IBlockSearchDto) => void;
  },
  {}
> {
  constructor(props: any) {
    super(props);
    this.state = { options: [] };
  }

  render() {
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
          {this.props.blocks.map((block) => (
            <ListItem
              key={block.id}
              sx={{
                width: "auto",
                position: "relative",
              }}
            >
              <Chip
                label={block.name}
                onDelete={() => this.props.onBlockDeleted(block)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}
