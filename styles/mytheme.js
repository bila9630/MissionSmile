import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#fff0c4",
      main: "#ffc000",
      contrastText: "#000000",
      background: "#FFF275",
      backgroundDark: "#FFD65A",
    },
    secondary: {
      light: "##FDA97B",
      main: "#fb6107",
      contrastText: "#ffffff",
    },
    dark: {
      main: "#5C8001",
    },
    light: {
      main: "#fffffff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default customTheme;
