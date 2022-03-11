import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  typography: {
    fontSize: "14px",
    fontFamily: ["Helvetica", "Assistant", "sans-serif"].join(",")
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
