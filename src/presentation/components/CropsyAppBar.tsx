import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PruneToTargetWarningIcon from "./PruneToTargetWarningIcon";

const pages = ["Map", "Dashboard", "Table"];

export default function CropsyAppBar() {
  return (
    <AppBar
      position="relative"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", mr: 1 }}>
            <img
              src={require("../../assets/logo.svg").default}
              alt="Cropsy Logo"
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, display: "block" }}>
                {page}
              </Button>
            ))}
            <Box sx={{ my: 2, ml: 1, display: "block" }}>
              <PruneToTargetWarningIcon />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
