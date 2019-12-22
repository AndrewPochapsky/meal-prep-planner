import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMeal } from "../../actions/meals";

export class Form extends Component {
  state = {
    name: "",
    description: "",
    preparation_time: 0
  };

  static propTypes = {
    addMeal: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addMeal(this.state);
    this.setState({ name: "" });
  };

  render() {
    const { name, description, preparation_time, steps } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Meal</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label>Preparation Time</label>
            <input
              className="form-control"
              type="number"
              name="preparation_time"
              onChange={this.onChange}
              value={preparation_time}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addMeal })(Form);
