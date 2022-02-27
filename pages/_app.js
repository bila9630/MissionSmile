import "../styles/globals.css";
import AuthContextProvider, { AuthContext } from "../contexts/AuthContext";
import MyThemes from "../styles/mytheme";
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MyThemes}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
