import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { BrowserRouter } from "react-router-dom";
// const theme = createTheme({
//   palatte: {
//     secondary: { main: "#4de7e7", 500: "#4de7e7", 400: "#4de7e7" },
//   },
// });
const theme = createTheme({
  typography: {
    fontFamily: "'Expletus Sans', cursive",
  },
  palette: {
    primary: {
      main: "#4de7e7",
    },
    secondary: {
      main: green[500],
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
