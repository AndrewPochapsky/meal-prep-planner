import React, { Component, Fragment, Container } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateMeal } from "../../actions/meals";
import { addStep, offsetSteps } from "../../actions/steps";
import { toggleEditing } from "../../actions/states";
import { Link } from "react-router-dom";
import Step from "./Step";

export class EditMeal extends Component {
  static propTypes = {
    editedMeal: PropTypes.object.isRequired,
    steps: PropTypes.array.isRequired,
    updateMeal: PropTypes.func.isRequired,
    addStep: PropTypes.func.isRequired,
    offsetSteps: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired
  };

  state = {
    id: -1,
    name: "",
    description: "",
    preparation_time: 0
  };

  componentDidMount() {
    const { id, name, description, preparation_time } = this.props.editedMeal;
    this.setState({
      id: id,
      name: name,
      description: description,
      preparation_time: preparation_time
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddStep = step_number => {
    let idsToOffset = this.getStepsToIncrement(step_number);
    this.props.addStep({
      title: "",
      description: "",
      meal: this.state.id,
      step_number: step_number + 1
    });
    this.props.offsetSteps(true, idsToOffset);
  };

  getStepsToIncrement = step_number => {
    return this.props.steps.slice(step_number).map(s => s.id);
  };

  render() {
    const { name, description, preparation_time } = this.state;
    return (
      <div className="container">
        <Fragment>
          <div className="card card-body mt-4 mb-4">
            <h2>Meal Information</h2>
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
            </form>
          </div>
        </Fragment>
        <Fragment>
          {this.props.steps.map(step => (
            <div key={step.id}>
              <Step step={step} isEditMeal={true} />
              <button
                onClick={() => this.onAddStep(step.step_number)}
                className="btn btn-outline-dark"
              >
                Add Step{" "}
              </button>
            </div>
          ))}
        </Fragment>
        <Fragment>
          <Link
            to="/edit"
            onClick={() => this.props.updateMeal(this.state)}
            className="btn btn-success align-self-end"
          >
            {" "}
            Save{" "}
          </Link>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  editedMeal: state.meals.editedMeal,
  steps: state.meals.editedSteps
});
export default connect(mapStateToProps, {
  updateMeal,
  addStep,
  offsetSteps,
  toggleEditing
})(EditMeal);
