import logo from "./logo.svg";
import CpAppBar from "./presentation/components/layout/AppBar";
import {
  Autocomplete,
  Box,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, red } from "@mui/material/colors";
import BlocksAutocomplete from "./BlocksAutocomplete";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <CpAppBar />
      <Grid container spacing={3}>
        <Grid sx={{ width: "400px", height: "600px" }}>
          <Paper sx={{ backgroundColor: red[500] }}>
            <BlocksAutocomplete />
          </Paper>
        </Grid>
        <Grid xs>
          <Paper>right</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
