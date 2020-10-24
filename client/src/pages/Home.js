import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import NewForm from "../components/Home/NewForm";
import { fetchAllExercises } from "../redux/actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableNewLogForm: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllExercises();
  }

  render() {
    const newForm = this.state.enableNewLogForm ? <NewForm /> : null;

    return (
      <div className="frame-home">
        <div className="container-home">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ enableNewLogForm: true });
            }}
            endIcon={<AddCircleOutlineIcon />}
          >
            Create New
          </Button>
          {newForm}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchAllExercises })(HomePage);
