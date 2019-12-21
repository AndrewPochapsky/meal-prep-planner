import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMeals } from "../../actions/meals";

export class Meals extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getMeals();
  }

  render() {
    return (
      <div>
        <h1> Meals List </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meals: state.meals.meals
});

export default connect(mapStateToProps, { getMeals })(Meals);
