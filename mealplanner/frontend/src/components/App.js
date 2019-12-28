import React, { Component, Fragment } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import MainDashboard from "./meals/MainDashboard";
import EditDashboard from "./meals/EditDashboard";
import EditMeal from "./meals/EditMeal";
import ViewMeal from "./meals/ViewMeal";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={MainDashboard} />
                <PrivateRoute exact path="/view" component={ViewMeal} />
                <PrivateRoute exact path="/edit" component={EditDashboard} />
                <PrivateRoute exact path="/editMeal" component={EditMeal} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
