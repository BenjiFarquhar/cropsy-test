import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { red } from "@mui/material/colors";
import React, { useMemo, useRef } from "react";
import BlocksFilter from "./components/blocksFilter/BlocksFilter";
import RowsTable from "./components/rowsTable/RowsTable";

export default function TablePage() {
  let rowsTableRef: React.RefObject<RowsTable> = useRef(null);

  useMemo(() => {
    rowsTableRef = React.createRef<RowsTable>();
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ mt: "30px", backgroundColor: red[500], height: "100%" }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "white",
        }}
      >
        <BlocksFilter rowsTableRef={rowsTableRef} />
        <Grid
          xs
          sx={{
            p: 1,
          }}
        >
          <RowsTable ref={rowsTableRef} />
        </Grid>
      </Grid>
    </Container>
  );
}
