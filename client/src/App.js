import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";
import HomePage from "./pages/Home";
import FindPage from "./pages/Find";
import ManagePage from "./pages/Manage";
import SideBar from "./components/SideBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0066CC",
    },
    secondary: {
      main: "#FF5050",
    },
  },
});

export default () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <nav className="side-nav">
          <SideBar />
        </nav>

        <main className="main-conent">
          <Switch>
            <Route path="/find">
              <FindPage />
            </Route>
            <Route path="/manage">
              <ManagePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </ThemeProvider>
    </Router>
  );
};
