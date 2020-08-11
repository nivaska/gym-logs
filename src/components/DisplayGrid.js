import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExerciseLogs } from "../actions";

class DisplayGrid extends Component {
  componentDidMount() {
    this.props.fetchExerciseLogs(this.props.selectedDate);
  }

  render() {
    return this.props.exerciseLogs.length;
  }
}

const mapStateToProps = (state) => {
  return { selectedDate: state.selectedDate, exerciseLogs: state.exerciseLogs };
};

export default connect(mapStateToProps, { fetchExerciseLogs })(DisplayGrid);
