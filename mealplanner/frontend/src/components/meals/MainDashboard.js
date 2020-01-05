import React, { Component, Fragment } from "react";
import Meals from "./Meals";

export class MainDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Fragment>
          <Meals isEditMode={false} />
        </Fragment>
      </Fragment>
    );
  }
}

export default MainDashboard;
