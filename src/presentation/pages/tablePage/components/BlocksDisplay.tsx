import { Box, Chip, ListItem } from "@mui/material";
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
      <Box sx={{ height: "500px", backgroundColor: "white", mb: 2 }}>
        {this.props.blocks.map((block) => (
          <ListItem key={block.id}>
            <Chip
              label={block.name}
              onDelete={() => this.props.onBlockDeleted(block)}
            />
          </ListItem>
        ))}
      </Box>
    );
  }
}
