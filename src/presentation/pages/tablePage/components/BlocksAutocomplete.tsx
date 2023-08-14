import {
  Autocomplete,
  AutocompleteInputChangeReason,
  TextField,
} from "@mui/material";
import React from "react";
import { getBlocks } from "../../../../data/BlocksRepo";
import IBlockSearchDto from "../../../../domain/block/IBlockSearchDto";

export default class BlocksAutocomplete extends React.Component<
  {
    onChange: (block: IBlockSearchDto) => void;
  },
  { options: IBlockSearchDto[]; value: IBlockSearchDto | null }
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
      <Autocomplete<IBlockSearchDto>
        sx={{ backgroundColor: "white" }}
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
          <TextField
            {...params}
            label="Blocks"
            InputLabelProps={{
              style: { color: "black" },
            }}
            variant="outlined"
          />
        )}
      />
    );
  }
}
