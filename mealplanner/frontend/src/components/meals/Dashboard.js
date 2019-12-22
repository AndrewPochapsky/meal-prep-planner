import React, { Component, Fragment } from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import Form from "./Form";
import Meals from "./Meals";
import EditMeal from "./EditMeal";

export class Dashboard extends Component {
  static propTypes = {
    isEditing: PropType.bool.isRequired
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

export default connect(mapStateToProps, {})(Dashboard);
