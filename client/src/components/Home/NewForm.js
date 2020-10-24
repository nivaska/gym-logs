import React, { Component } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import NewLog from "./NewLog";
import { formatDateToStr } from "../../utils";

const styles = (theme) => ({
  newFormCotnainer: {
    marginTop: theme.spacing(3),
  },
  dateInput: {
    marginRight: theme.spacing(5),
    color: "#ffffff",
  },
  accordion: {
    backgroundColor: "#262626",
  },
  accordionDetails: {
    padding: "0 0 8px",
    flexDirection: "column",
    alignItems: "center",
  },
  dateContainer: {
    padding: "15px",
    marginBottom: "15px",
    background:
      "linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(196,196,196,1) 16%, rgba(153,153,153,1) 66%)",
    maxWidth: "200px",
    alignSelf: "flex-start",
    borderBottomRightRadius: "30px",
  },
});

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsNewLog: props.IsNewLog,
      LogDate: props.LogDate || formatDateToStr(new Date()),
      ExerciseLogs: [],
    };
  }

  addnewLog() {
    this.setState({
      ExerciseLogs: [
        ...this.state.ExerciseLogs,
        {
          IsSaved: false,
          LogId: null,
          Exercise: "0",
          LogDate: this.state.LogDate,
          Weight: "",
          Count: "",
        },
      ],
    });
  }

  render() {
    const { classes } = this.props;

    const logs = this.state.ExerciseLogs.map((log, index) => {
      return (
        <NewLog
          index={index}
          LogDate={this.state.LogDate}
          exercise={log.exercise}
          count={log.count}
          rep={log.rep}
        />
      );
    });

    return (
      <div className={classes.newFormCotnainer}>
        <Accordion className={classes.accordion}>
          <AccordionDetails className={classes.accordionDetails}>
            <FormGroup className={classes.dateContainer}>
              <TextField
                id="date"
                label="Select Date"
                type="date"
                classes={{
                  root: classes.dateInput,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={this.state.LogDate}
                // value={this.state.LogDate}
                onChange={(e) => {
                  this.setState({ LogDate: e.target.value });
                }}
              />
            </FormGroup>
            {logs}
            <IconButton
              size="medium"
              color="primary"
              onClick={() => this.addnewLog()}
            >
              <AddCircleIcon />
            </IconButton>

            {/* <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
                size="small"
                className={classes.button}
              >
                OK
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {}}
                size="small"
                className={classes.button}
              >
                Cancel
              </Button> */}
            <div></div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default withStyles(styles)(NewForm);
