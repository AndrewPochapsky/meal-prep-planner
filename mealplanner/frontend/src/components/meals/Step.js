import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateStep, deleteStep, offsetSteps } from "../../actions/meals";
import { connect } from "react-redux";

export class Step extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    steps: PropTypes.array.isRequired,
    isEditMeal: PropTypes.bool.isRequired,
    updateStep: PropTypes.func.isRequired,
    deleteStep: PropTypes.func.isRequired,
    offsetSteps: PropTypes.func.isRequired
  };

  state = {
    isEditMode: false,
    id: -1,
    title: "",
    description: "",
    meal: -1
  };
  componentDidMount() {
    this.setState({
      id: this.props.step.id,
      title: this.props.step.title,
      description: this.props.step.description,
      meal: this.props.step.meal
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isEditMode: false });
    const step = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      step_number: this.props.step.step_number,
      meal: this.state.meal
    };
    this.props.updateStep(step);
  };

  onDeleteStep = step_number => {
    let idsToOffset = this.getStepsToDecrement(step_number);
    this.props.deleteStep(this.state);
    this.props.offsetSteps(false, idsToOffset);
  };

  getStepsToDecrement = step_number => {
    return this.props.steps.slice(step_number).map(s => s.id);
  };
  render() {
    const { title, description } = this.state;
    // this is like this so the component property re-renders when step numbers change
    const { step_number } = this.props.step;
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
              <div className="btn-group-vertical float-right">
                <button
                  onClick={() => this.setState({ isEditMode: true })}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.onDeleteStep(step_number)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
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
                    onChange={this.onChange}
                    value={title}
                    placeholder="title"
                  />
                </div>
              </h5>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={this.onChange}
                  value={description}
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

const mapStateToProps = state => ({
  steps: state.meals.editedSteps
});
export default connect(mapStateToProps, {
  updateStep,
  deleteStep,
  offsetSteps
})(Step);
