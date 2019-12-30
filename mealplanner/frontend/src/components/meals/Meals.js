import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMeals, deleteMeal } from "../../actions/meals";
import Meal from "./Meal";

export class Meals extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    mealsLoaded: PropTypes.bool.isRequired,
    getMeals: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool.isRequired
  };

  componentDidMount() {
    if (!this.props.mealsLoaded) {
      this.props.getMeals();
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Meals</h2>
        <div className="row container">
          {this.props.meals.map(meal => (
            <Meal
              key={meal.id}
              meal={meal}
              displayButtons={this.props.isEditMode}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  meals: state.meals.meals,
  mealsLoaded: state.states.mealsLoaded
});

export default connect(mapStateToProps, { getMeals })(Meals);
