"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import _ from "lodash";
const themesOptions = [
  {
    name: "light",
    overrides: {
      paper: {
        background: "#EDEDED",
      },
    },
    palette: {
      primary: {
        main: "#fff",
        light: "#fff",
        sideBarBg: "#FCFCFC",
        contrastText: "#fff",
      },
      primaryColor: {
        background: "#FFF",
        color: "#000",
      },
      // secondary:{},
    },
  },
  {
    name: "dark",
    overrides: {
      paper: {
        background: "#120F39",
      },
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            color: "#fff",
            borderRadius: "4px",
            backgroundColor: "#182340",
            backdropFilter: "blur(18px)",
            whiteSpace: "pre",
            // "&:hover": {
            //   color: "#f5f5f5",
            //   background: "linear-gradient(100deg, #ff632c 0%, #ff632c 100%)",
            //   border: "1px solid transparent",
            // },
          },
          containedSizeMedium:{
            color: "#fff",

            borderRadius: "4px",
            backgroundColor: "#182340",
            backdropFilter: "blur(18px)",
            whiteSpace: "pre",
          },
          containedSizeSmall: { fontSize: "12px" },
          containedPrimary: {
            color: "#fff",
            borderRadius: "4px",
            backgroundColor:
              "linear-gradient(83deg, #00B7FF 16.38%, #0D1439 130.83%)",
            backdropFilter: "blur(18px)",
            whiteSpace: "pre",
            
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#120F39",
        light: "#fff",
        sideBarBg: "#120F39",
        contrastText: "#fff",
      },
      //   primaryColor: {
      //     background: "#182340",
      //     color: "#fff",
      //     sideBarBg: "#2369A6",
      //   },
      //   secondary: {},
    },
  },
];
export const createCustomTheme = (config: any = {}) => {
  console.log("config=-=-=", config);

  let themeOptions = themesOptions.find((theme) => theme.name === config);
  console.log("themeOptions=-=-=-=", themeOptions);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(_.merge({}, themeOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
