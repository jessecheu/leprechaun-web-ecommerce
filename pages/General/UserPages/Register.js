import React, { Component } from "react";
import { Link } from "react-router-dom";
import Strapi from "strapi-sdk-javascript";
import ToastMessage from "../../../components/ToastMessage";

import "./UserPagesStyling.css";

import { setToken } from "../../../utils";
const apiURL = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiURL);

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    referralName: "",
    toast: false,
    toastMessage: "",
    loading: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, referralName } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Please fill in all of the required fields");
      return;
    }
    if (!this.passwordsMatch(this.state)) {
      this.showToast("Password mismatch");
      return;
    }

    try {
      this.setState({ loading: true });
      const response = await strapi.register(email, email, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
      console.error(err);
    }
  };

  redirectUser = (path) => this.props.history.push(path);

  isFormEmpty = ({ email, password, confirmPassword }) => {
    return !email || !password || !confirmPassword;
  };

  passwordsMatch = ({ password, confirmPassword }) => {
    return password === confirmPassword;
  };

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toast, toastMessage, loading } = this.state;

    return (
      <>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="h1 mb-3 font-weight-normal">Register</h1>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={this.handleChange}
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={this.handleChange}
          />

          <label htmlFor="confirmPassword" className="sr-only">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm password"
            required
            onChange={this.handleChange}
          />

          <label htmlFor="referralName" className="sr-only">
            Referrer
          </label>
          <input
            id="referralName"
            type="referralName"
            name="referralName"
            className="form-control"
            placeholder="Referral Name"
            onChange={this.handleChange}
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={loading}
          >
            Register
          </button>
        </form>

        <Link to="./login">Already have an account? Sign in here</Link>
        <ToastMessage show={toast} message={toastMessage} />
      </>
    );
  }
}

export default Register;
