import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./meals/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route
            path="/"
            render={props => (
              <Fragment>
                <div className="container">
                  <Dashboard />
                </div>
              </Fragment>
            )}
          />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
