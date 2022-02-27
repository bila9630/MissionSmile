import "../styles/globals.css";
import AuthContextProvider, { AuthContext } from "../contexts/AuthContext";
import WindowWidth from "../contexts/Bgcontext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import MyThemes from "../styles/mytheme";
import CardMedia from "@mui/material/CardMedia";
import { ThemeProvider } from "@mui/material/styles";
import BgWhiteDesktop from "../public/background-white.jpg";
import BgWhiteMobile from "../public/background-white-mobile.jpg";
import { Paper } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const imageUrl = WindowWidth >= 650 ? BgWhiteDesktop : BgWhiteMobile;
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <main
      sx={{
        backgroundImage: `url(${imageUrl}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ThemeProvider theme={MyThemes}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
