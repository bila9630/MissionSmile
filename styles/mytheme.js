import { createTheme} from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffc000',
      contrastText: '#000000',
    },
    secondary: {
      light: '#0066ff',
      main: '#fb6107',
      contrastText: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default customTheme;