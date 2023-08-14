import CropsyAppBar from "./components/CropsyAppBar";
import { Box, CssBaseline } from "@mui/material";
import TablePage from "./pages/tablePage/TablePage";

export default function CropsyApp() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <CssBaseline />
      <CropsyAppBar />
      <TablePage />
    </Box>
  );
}
