import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/urbanist";
import { CssBaseline } from "@mui/material";

//global acess to MUI theme//
const theme = createTheme({
  palette: {
    // https://color.adobe.com/hanawilo-color-theme-20881290/
    white: "white",
    black: "black",
    text: {
      primary: "black",
    },
  },

  typography: {
    fontFamily: [
      "Urbanist",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});



ReactDOM.createRoot(document.getElementById("root")).render(

      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>

);
