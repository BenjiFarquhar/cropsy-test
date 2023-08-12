import logo from "./logo.svg";
import CpAppBar from "./presentation/components/layout/AppBar";
import { Box, Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, red } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box>
      <CssBaseline />
      <CpAppBar></CpAppBar>
      <Grid container spacing={3}>
        <Grid sx={{ width: "400px", height: "600px", backgroundColor: red }}>
          <Item>left</Item>
        </Grid>
        <Grid xs>
          <Item>right</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
