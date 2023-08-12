import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CropsyApp from "./presentation/CropsyApp";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import cropsyTheme from "./presentation/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={cropsyTheme}>
      <CropsyApp />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
