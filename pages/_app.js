import { ThemeProvider } from "@mui/material/styles";
import AuthContextProvider from "../contexts/AuthContext";
import { EmotionProvider } from "../contexts/EmotionContext";
import "../styles/globals.css";
import MyThemes from "../styles/mytheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MyThemes}>
      <AuthContextProvider>
        <EmotionProvider>
          <Component {...pageProps} />
        </EmotionProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
