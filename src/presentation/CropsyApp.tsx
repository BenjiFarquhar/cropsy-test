import CpAppBar from "./components/layout/AppBar";
import { Box, CssBaseline } from "@mui/material";
import { purple } from "@mui/material/colors";
import TablePage from "./pages/tablePage/TablePage";

export default function CropsyApp() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <CssBaseline />
      <CpAppBar />
      <TablePage />
    </Box>
  );
}
