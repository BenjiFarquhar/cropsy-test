import { createTheme } from "@mui/material/styles";

const cropsyTheme = createTheme({
  palette: {
    primary: {
      main: "#f2f2f7",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "#000000",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#5cc974",
            color: "#FFFFFF",
          },
        },
      ],
    },
  },
});

export default cropsyTheme;
