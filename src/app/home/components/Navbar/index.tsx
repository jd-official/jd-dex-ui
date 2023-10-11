"use client";
import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { Box, Container, Button, PaletteMode, Drawer } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Home } from "@mui/icons-material";
import Logo from "@/commonComponents/Logo";
import { createCustomTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";
const drawerWidth = 260;



const openedMixin = (theme: any): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  //   backgroundColor: theme.palette.primary.sideBarBg,
  backgroundColor: "transparent",
  borderRight: "1px solid #2369A6",
  //   position: "relative",
});

const closedMixin = (theme: any): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(12)} + 1px)`,
  },
  backgroundColor: "transparent",
  borderRight: "1px solid #2369A6",
  //   position: "relative",
});

// const DrawerHeader = styled("Box")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   position: "absolute",
//   background: "red",
//   top: "10%",
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: 1111,
  marginLeft: drawerWidth,
  boxShadow: "none",
  width: `calc(100% - 98px)`,
  //   background: theme.palette.primary.main,
  background: "transparent",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    boxShadow: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // background: theme.palette.primary.main,
    backgroundColor: "transparent",
  }),
}));

const SideDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [mode, setMode] = useState<PaletteMode>("dark");
  const themeList = createCustomTheme(mode);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const navList = [
    {
      title: "Dashboard",
      images:"/images/sidebar/dark/home.svg"
    },
    {
      title: "Trade",
      images:"/images/sidebar/dark/trade.svg"
    },
    {
      title: "Launchpad",
      images:"/images/sidebar/dark/launchpad.svg"
    },
    {
      title: "Earn",
      images:"/images/sidebar/dark/earn.svg"
    },
    {
      title: "Stats",
      images:"/images/sidebar/dark/stats.svg"
    },
    {
      title: "Staking",
      images:"/images/sidebar/dark/staking.svg"
    },
    {
      title: "Airdrop",
      images:"/images/sidebar/dark/airdrop.svg"
    },
    {
      title: "Token Creation",
      images:"/images/sidebar/dark/token.svg"
    },
    {
      title: "Referral",
      images:"/images/sidebar/dark/referral.svg"
    },
    {
      title: "Dao",
      images:"/images/sidebar/dark/dao.svg"
    },
    {
      title: "Nft",
      images:"/images/sidebar/dark/nft.svg"
    },
    {
      title: "Multi Sender",
      images:"/images/sidebar/dark/multisender.svg"
    },
  ];

  return (
    <ThemeProvider theme={themeList}>
      <Box
        sx={{
          display: "flex",
          background:
            mode === "light" ? "#fff " : "url(/images/dashboardbg_dark.png)",
          backgroundSize: "cover",
          height: "100dvh",
        }}
      >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Button variant="contained" color="primary">
              Connect Wallet
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => toggleTheme()}
            >
              Dark
            </Button>
          </Toolbar>
        </AppBar>

        <SideDrawer variant="permanent" open={open} style={{ zIndex: "1111" }}>
          <Box
            style={{
              zIndex: "11111",
              position: "fixed",

              top: open ? "10%" : "21%",
            }}
            top={0}
            left={open ? "232px" : "77px"}
          >
            <IconButton
              sx={{
                ...(!open && { display: "none" }),
              }}
              onClick={handleDrawerClose}
            >
              <img src="/images/sidebar/dark_arrow.svg" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <img src="/images/sidebar/dark_left_arrow.svg" />
            </IconButton>
          </Box>
          <Box className="displayCenter" minHeight="200px">
            <Logo />
          </Box>
          {!open && (
            <Box className="displayCenter" style={{ paddingBottom: "64px" }}>
              <img
                height="51px"
                width="24px"
                src="/images/sidebar/dark_close.svg"
              />
            </Box>
          )}

          <List>
            {navList.map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block", padding: "0px 22px" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: "4px",
                    background:
                      text.title === "Dashboard"
                        ? "linear-gradient(83deg, #00B7FF 16.38%, #0D1439 130.83%)"
                        : "",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "",
                      justifyContent: "center",
                    }}
                  >
                    <img src={text.images} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text.title}
                    sx={{color:mode==="dark"? "white":"black", display: open ? "block" : "none" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </SideDrawer>
      </Box>
    </ThemeProvider>
  );
}
