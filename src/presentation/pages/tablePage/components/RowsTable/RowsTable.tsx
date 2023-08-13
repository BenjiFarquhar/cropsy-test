import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import columns from "./ColumnDefinitions";
import { Row } from "../../../../../domain/row/Row";

export type Rows = {
  rows: Row[];
};

export default class RowsTable extends React.Component<
  Rows,
  { columns: GridColDef<Row>[] }
> {
  constructor(props: Rows) {
    super(props);
    this.state = { columns: columns };
  }

  render() {
    return (
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.props.rows}
          columns={this.state.columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    );
  }
}
