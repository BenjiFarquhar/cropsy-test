import {
  Autocomplete,
  AutocompleteInputChangeReason,
  TextField,
} from "@mui/material";
import React from "react";
import { getBlocks } from "../../../../data/BlocksRepo";
import BlockSearchDto from "../../../../domain/block/BlockSearchDto";

export default class BlocksAutocomplete extends React.Component<
  {
    onChange: (block: BlockSearchDto) => void;
  },
  { options: BlockSearchDto[]; value: BlockSearchDto | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { options: [], value: null };
  }

  onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    searchTerm: string,
    reason: AutocompleteInputChangeReason
  ): void => {
    if (searchTerm) {
      getBlocks(searchTerm).then((myJson) =>
        this.setState({ options: myJson })
      );
    } else {
      this.setState({ options: [] });
    }
  };

  render() {
    return (
      <Autocomplete<BlockSearchDto>
        options={this.state.options}
        filterOptions={(_) => _}
        isOptionEqualToValue={() => false}
        value={this.state.value}
        onSelect={(_) => {
          this.setState({ value: null });
        }}
        onChange={(_, value) => {
          if (value) {
            this.props.onChange(value!);
          }
        }}
        onInputChange={this.onInputChange}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Blocks" variant="outlined" />
        )}
      />
    );
  }
}
