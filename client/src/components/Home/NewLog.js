import React, { Component } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";

import { addNewLog } from "../../apis/serverApi";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  smallTextControl: {
    width: "15ch",
  },
  smallerTextControl: {
    width: "10ch",
  },
  newLogRoot: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0 ",
  },
  newLogForm: {
    backgroundColor: "#C4C4C4",
    borderRadius: "300px",
    padding: "10px 20px",
    display: "flex",
    alignItems: "flex-end",
  },
  middleAllign: {
    verticalAlign: "middle",
  },
});

class NewLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsSaved: props.IsNewLog,
      LogId: props.LogId,
      IsNewLog: props.IsNewLog,
      LogDate: props.LogDate,
      Exercise: props.Exercise,
      Weight: props.Exercise,
      Count: props.Count,
      EnableValidation: false,
      SaveInProgress: false,
    };
  }

  saveLogToDb() {
    if (
      this.state.Exercise === "0" ||
      !this.state.Weight ||
      !this.state.Count
    ) {
      // validation disabled initlally, enabled after clicking on save
      this.setState({ EnableValidation: true });
      return;
    }

    this.setState({ SaveInProgress: true });

    if (this.state.LogId) {
      // call update log here
    } else {
      addNewLog({
        date: this.state.LogDate,
        exerciseId: this.state.Exercise,
        weight1: this.state.Weight,
        count1: this.state.Count,
      })
        .then((result) => {
          this.setState({
            IsSaved: true,
            SaveInProgress: false,
            LogId: result.data.id,
          });

          console.log(this.state);
        })
        .catch((err) => {
          this.setState({ SaveInProgress: false });
          console.error("Error: " + err);
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.newLogRoot}>
        <form noValidate className={classes.newLogForm}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
            <Select
              defaultValue={this.state.Exercise}
              error={this.state.EnableValidation && this.state.Exercise === "0"}
              onChange={(e) => {
                this.setState({ Exercise: e.target.value, IsSaved: false });
              }}
            >
              <MenuItem key="0" value="0"></MenuItem>
              {this.props.exercises.map((exercise) => (
                <MenuItem key={exercise.id} value={exercise.id}>
                  {exercise.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className={clsx(classes.formControl, classes.smallTextControl)}
          >
            <TextField
              label="Weight"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
              value={this.state.Weight}
              error={this.state.EnableValidation && !this.state.Weight}
              onChange={(e) => {
                this.setState({ Weight: e.target.value, IsSaved: false });
              }}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.formControl, classes.smallerTextControl)}
          >
            <TextField
              type="number"
              label="Count"
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 0,
                },
              }}
              value={this.state.Count}
              error={this.state.EnableValidation && !this.state.Count}
              onChange={(e) => {
                this.setState({ Count: e.target.value, IsSaved: false });
              }}
            />
          </FormControl>
          {!this.state.IsSaved ? (
            <IconButton
              color="primary"
              aria-label="save log"
              onClick={() => {
                this.saveLogToDb();
              }}
              className={`${
                this.state.SaveInProgress ? "progressIndicator" : ""
              }`}
            >
              <SaveIcon />
            </IconButton>
          ) : null}

          {this.state.LogId ? (
            <IconButton color="secondary" aria-label="delete log">
              <DeleteIcon />
            </IconButton>
          ) : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { exercises: state.exercises };
};
export default connect(mapStateToProps)(withStyles(styles)(NewLog));
