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
  { columns: GridColDef<Row>[]; height: number }
> {
  constructor(props: Rows) {
    super(props);
    this.state = { columns: columns, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    return (
      <DataGrid
        sx={{ height: this.state.height - 100 }}
        rows={this.props.rows}
        columns={this.state.columns}
        initialState={{
          pagination: {
            paginationModel: {},
          },
        }}
      />
    );
  }
}
