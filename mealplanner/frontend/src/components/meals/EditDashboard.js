import React, { Component, Fragment } from "react";
import Form from "./Form";
import Meals from "./Meals";

export class EditDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Meals isEditMode={true} />
      </Fragment>
    );
  }
}
export default EditDashboard;
