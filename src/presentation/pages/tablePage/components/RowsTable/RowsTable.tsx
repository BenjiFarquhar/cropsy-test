import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import columns, { prunedToTarget } from "./ColumnDefinitions";
import { Row } from "../../../../../domain/row/Row";
import { Box, Typography } from "@mui/material";

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

  totalVines(rows: Row[]) {
    return rows.reduce(
      (total, row) => total + row.vineCounts.reduce((a, b) => a + b, 0),
      0
    );
  }

  prunedToTarget(rows: Row[]): number {
    const x = rows.reduce(
      (total, row) => total + (prunedToTarget(row.customStats) ?? 0),
      0
    );

    const y = x / rows.length;

    return y;
  }

  render() {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", textAlign: "center" }}
          >
            Pruned to Target:
            {` ${this.prunedToTarget(this.props.rows).toFixed(1)}%`}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: "flex", textAlign: "center" }}
          >
            Total Vines: {this.totalVines(this.props.rows)}
          </Typography>
        </Box>
        <DataGrid
          sx={{ height: this.state.height - 150 }}
          rows={this.props.rows}
          columns={this.state.columns}
          initialState={{
            pagination: {
              paginationModel: {},
            },
          }}
        />
      </Box>
    );
  }
}
