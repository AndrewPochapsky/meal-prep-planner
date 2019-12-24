import React, { Component, Fragment } from "react";
import Meals from "./Meals";

export class MainDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Meals />
      </Fragment>
    );
  }
}

export default MainDashboard;
