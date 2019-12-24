import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Form from "./Form";
import Meals from "./Meals";
import EditMeal from "./EditMeal";

export class EditDashboard extends Component {
  static propTypes = {
    isEditing: PropTypes.bool.isRequired
  };
  render() {
    if (!this.props.isEditing) {
      return (
        <Fragment>
          <Form />
          <Meals />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <EditMeal />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  isEditing: state.states.isEditing
});

export default connect(mapStateToProps, {})(EditDashboard);
