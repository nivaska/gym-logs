import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/Home";
import FindPage from "./pages/Find";
import ManagePage from "./pages/Manage";
import SideBar from "./components/SideBar";

export default () => {
  return (
    <Router>
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
    </Router>
  );
};
