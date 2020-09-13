import React, { Component } from "react";

import "./UserPagesStyling.css";

class PasswordReset extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    //do shit
  };

  render() {
    const { email } = this.state;

    return (
      <>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="h1 mb-3 font-weight-normal">Reset Password</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Send Reset Email
          </button>
        </form>
      </>
    );
  }
}

export default PasswordReset;
