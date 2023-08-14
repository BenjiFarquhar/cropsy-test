import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import columns, { prunedToTargetAverage } from "./ColumnDefinitions";
import { Row } from "../../../../../domain/row/Row";
import { Box, Typography } from "@mui/material";

export default class RowsTable extends React.Component<
  {},
  { columns: GridColDef<Row>[]; height: number; rows: Row[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = { columns: columns, height: 0, rows: [] };
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

  updateRows(rows: Row[]) {
    this.setState({ rows: rows });
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
            {this.state.rows.length > 0
              ? ` ${prunedToTargetAverage(this.state.rows).toFixed(1)}%`
              : " -"}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: "flex", textAlign: "center" }}
          >
            Total Vines:{" "}
            {this.state.rows.length > 0
              ? this.totalVines(this.state.rows)
              : "-"}
          </Typography>
        </Box>
        <DataGrid
          sx={{ height: this.state.height - 150 }}
          rows={this.state.rows}
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
