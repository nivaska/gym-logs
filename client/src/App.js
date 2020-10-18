import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

import HomePage from "./pages/Home";
import FindPage from "./pages/Find";
import ManagePage from "./pages/Manage";

export default () => {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find">Find</Link>
          </li>
          <li>
            <Link to="/manage">Manage</Link>
          </li>
        </ul>
      </nav>

  
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
    </div>
  </Router>
  );
};
