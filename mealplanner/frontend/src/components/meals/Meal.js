import React, { Component } from "react";
import { deleteMeal } from "../../actions/meals";
import { toggleEditing } from "../../actions/states";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Meal extends Component {
  static propTypes = {
    meal: PropTypes.object.isRequired,
    deleteMeal: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired
  };

  render() {
    const { id, name, description, preparation_time, steps } = this.props.meal;
    return (
      <div className="card" style={{ width: "25%" }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {preparation_time} minutes
          </h6>
          <p className="card-text">{description}</p>
          <div className="btn-toolbar mt-auto">
            <div className="button-group">
              <button
                onClick={this.props.toggleEditing.bind(this, this.props.meal)}
                className="btn btn-primary btn-sm"
              >
                Edit
              </button>
            </div>
            <div className="button-group">
              <button
                onClick={this.props.deleteMeal.bind(this, id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteMeal, toggleEditing })(Meal);
