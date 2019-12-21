import React, { Fragment } from "react";
import Form from "./Form";
import Meals from "./Meals";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Meals />
    </Fragment>
  );
}
