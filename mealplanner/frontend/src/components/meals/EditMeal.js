import React, { Component, Fragment, Container } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateMeal } from "../../actions/meals";
import { toggleEditing } from "../../actions/states";
import Step from "./Step";

export class EditMeal extends Component {
  static propTypes = {
    originalMeal: PropTypes.object.isRequired,
    updateMeal: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired
  };

  state = {
    id: -1,
    name: "",
    description: "",
    preparation_time: 0,
    steps: []
  };

  componentDidMount() {
    const {
      id,
      name,
      description,
      preparation_time,
      steps
    } = this.props.originalMeal;
    this.setState({
      id: id,
      name: name,
      description: description,
      preparation_time: preparation_time,
      steps: steps
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.updateMeal(this.state);
    this.props.toggleEditing({});
    this.setState({ name: "", description: "", preparation_time: "" });
  };

  render() {
    const { name, description, preparation_time, steps } = this.state;
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
          {this.state.steps.map(step => (
            <Step key={step.id} step={step} isEditMeal={true} />
          ))}
        </Fragment>
        <Fragment>
          <button onClick={this.onSubmit} className="btn btn-success">
            {" "}
            Save{" "}
          </button>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  originalMeal: state.meals.editedMeal
});
export default connect(mapStateToProps, { updateMeal, toggleEditing })(
  EditMeal
);
