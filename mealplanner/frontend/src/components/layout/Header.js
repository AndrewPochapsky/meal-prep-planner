import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          Meal Prep Planner
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/edit" className="nav-link">
              Edit
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.username}` : ""}</strong>
          </span>
          <li className="nav-item ">
            <button
              onClick={this.props.logout}
              className="nav-link btn btn-info btn-sm text-light"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    );

    const guestLinks = (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          Meal Prep Planner
        </a>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isAuthenticated ? authLinks : guestLinks}{" "}
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Header);
