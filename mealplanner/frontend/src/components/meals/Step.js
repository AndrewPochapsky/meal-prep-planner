import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateStep } from "../../actions/meals";
import { connect } from "react-redux";

export class Step extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    isEditMeal: PropTypes.bool.isRequired,
    updateStep: PropTypes.func.isRequired
  };

  state = {
    isEditMode: false,
    id: -1,
    title: "",
    description: "",
    step_number: "",
    meal: -1
  };
  componentDidMount() {
    this.setState({
      id: this.props.step.id,
      title: this.props.step.title,
      description: this.props.step.description,
      step_number: this.props.step.step_number,
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
      step_number: this.state.step_number,
      meal: this.state.meal
    };
    this.props.updateStep(step);
  };

  render() {
    const { title, step_number, description } = this.state;
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
export default connect(null, { updateStep })(Step);