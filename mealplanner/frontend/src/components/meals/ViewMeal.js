import React, { Component, Fragment } from "react";
import Step from "./Step";
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
      <Fragment>
        <Fragment>
          <div className="card text-center" style={{ witdth: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {preparation_time} minutes
              </h6>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </Fragment>
        <Fragment>
          {steps.map(step => (
            <Step key={step.id} step={step} isEditMeal={false} />
          ))}
        </Fragment>
      </Fragment>
    );
  }
}
export default ViewMeal;
