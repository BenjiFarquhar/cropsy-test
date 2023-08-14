import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CropsyApp from "./presentation/CropsyApp";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import cropsyTheme from "./presentation/CropsyTheme";
import { Provider } from "react-redux";
import { cropsyStore } from "./_config/CropsyStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={cropsyStore}>
      <ThemeProvider theme={cropsyTheme}>
        <CropsyApp />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
