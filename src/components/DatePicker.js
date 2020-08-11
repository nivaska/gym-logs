import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDate } from "../actions";

class DatePicker extends Component {
  render() {
    return <div>{this.props.selectedDate?.toLocaleDateString("en-US")}</div>;
  }
}

const mapStateToProps = (state) => {
  return { selectedDate: state.selectedDate };
};

export default connect(mapStateToProps, { selectDate })(DatePicker);
