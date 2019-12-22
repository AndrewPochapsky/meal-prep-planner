import React, { Component } from "react";
import PropTypes from "prop-types";

export class Step extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    isEditMeal: PropTypes.bool.isRequired
  };

  state = {
    isEditMode: false,
    title: "",
    description: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isEditMode: false });
  };
  render() {
    const { title, step_number, description } = this.props.step;
    if (!this.props.isEditMeal) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {step_number}. {title}
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      );
    } else if (!this.state.isEditMode) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {step_number}. {title}
              <button
                onClick={() => this.setState({ isEditMode: true })}
                className="btn btn-secondary float-right"
              >
                Edit
              </button>
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <h5 className="card-title">
                {" "}
                {step_number}.
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="title"
                  />
                </div>
              </h5>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="description"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
export default Step;
