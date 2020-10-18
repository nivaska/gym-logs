import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LanguageIcon from "@material-ui/icons/Language";

const styles = (theme) => ({
  navButton: {
    textTransform: "none",
    color: "green",
  },
});

class SideBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <ul>
        <li>
          <Button
            size="large"
            color="default"
            className={classes.navButton}
            startIcon={<HomeIcon />}
            href="/"
          />
        </li>
        <li>
          <Button
            size="large"
            color="default"
            className={classes.navButton}
            startIcon={<TodayIcon />}
            href="/find"
          />
        </li>

        <li>
          <Button
            size="large"
            color="default"
            className={classes.navButton}
            startIcon={<SettingsIcon />}
            href="/manage"
          />
        </li>
        <li>
          <Button
            disabled
            size="large"
            color="default"
            className={classes.navButton}
            startIcon={<AssessmentIcon />}
            href="/analyse"
          />
        </li>
        <li>
          <Button
            size="large"
            disabled
            color="default"
            className={classes.navButton}
            startIcon={<LanguageIcon />}
            href="/links"
          />
        </li>
      </ul>
    );
  }
}

export default withStyles(styles)(SideBar);
