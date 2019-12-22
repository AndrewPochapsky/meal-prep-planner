import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMeals, deleteMeal } from "../../actions/meals";
import Meal from "./Meal";

export class Meals extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    getMeals: PropTypes.func.isRequired,
    deleteMeal: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMeals();
  }

  render() {
    return (
      <Fragment>
        <h2>Meals</h2>
        <div className="row container">
          {this.props.meals.map(meal => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  meals: state.meals.meals
});

export default connect(mapStateToProps, { getMeals, deleteMeal })(Meals);
