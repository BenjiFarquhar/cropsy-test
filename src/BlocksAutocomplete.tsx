import {
  Autocomplete,
  AutocompleteInputChangeReason,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { getBlocks } from "./data/blocks_repo";

function BlocksAutocomplete() {
  const [options, setOptions] = useState([]);

  const getData = (searchTerm: string) => {
    getBlocks(searchTerm)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(
          "search term: " + searchTerm + ", results: ",
          myJson.products
        );
        const updatedOptions = myJson.products.map((p: any) => {
          return { title: p.title };
        });
        setOptions(updatedOptions);
      });
  };

  const onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (value) {
      getData(value);
    } else {
      setOptions([]);
    }
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      onInputChange={onInputChange}
      getOptionLabel={(option: any) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
}

export default BlocksAutocomplete;
