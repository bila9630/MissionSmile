import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Image from "next/image";
import { AuthContext } from "../contexts/AuthContext";
import { useState, useContext } from "react";
import BgYellowDesktop from "../public/background-yellow.jpg";
import BgYellowMobile from "../public/background-yellow-mobile.jpg";

const ResponsiveAppBar = () => {
  const pages = ["home", "analytics", "pricing", "team"];
  const settings = ["Logout"];
  const { logout } = useContext(AuthContext);

  // switching between pages
  const router = useRouter();
  const switchPage = (pageName) => {
    if (pageName == "home") {
      router.replace("/");
    } else {
      router.replace(pageName);
    }
  };

  // handle logout
  const handleLogout = () => {
    logout()
      .then(() => {
        router.replace("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handle setting
  const handleSetting = (setting) => {
    if (setting == "Profile") {
      router.replace("/profile");
    } else if (setting == "Logout") {
      handleLogout();
    }
  };

  // handle open / close burger menu on phone
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* this typography will be display on desktop */}
          <Image
            src="/logo-appbar.png"
            alt="logo"
            width="242.80rem"
            height="70rem"
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => switchPage("/")}
          ></Typography>
          {/* This burger menu will be displayed on phone */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => switchPage(page)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* this typography will be displayed on phone */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Mission Smile
          </Typography>
          {/* those buttons will be displayed on desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu;
                  switchPage(page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile picture" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      handleSetting(setting);
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
