import React, { Component } from "react";
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

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  smallTextControl: {
    width: "15ch",
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
  whiteText: {
    color: "white",
  },
  middleAllign: {
    verticalAlign: "middle",
  },
});

class NewLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogId: null,
      IsNewLog: props.IsNewLog,
      LogDate: props.LogDate,
      ExerciseLogs: props.ExerciseLogs,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.newLogRoot}>
        <form noValidate className={classes.newLogForm}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
                className: classes.whiteText,
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              type="number"
              label="Reps"
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 0,
                },
                className: classes.whiteText,
              }}
            />
          </FormControl>
          <IconButton color="primary" aria-label="add an alarm">
            <SaveIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <DeleteIcon />
          </IconButton>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(NewLog);
