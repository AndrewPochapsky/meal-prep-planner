import React, { Component } from "react";
import PropTypes from "prop-types";

export class ViewMeal extends Component {
  static propTypes = {
    //this is what is passed in by the Link
    location: PropTypes.object.isRequired
  };
  render() {
    const {
      name,
      description,
      preparation_time,
      steps
    } = this.props.location.meal;
    return (
      <div>
        <h1> {name} </h1>
      </div>
    );
  }
}
export default ViewMeal;
