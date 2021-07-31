import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: "",
      // for login:
      // if data === "success": ""
      // if data === "dne": "User does not exist!"
      // if data === "pwd": "Incorrect password!"
      // for sign up:
      // if data === "success": ""
      // if data === "exists": "That username is taken!"
      page: "Login", // Login, Home, (Upload), Summary, Sleep Schedule
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    let action = event.target.name;
    if (action === "login") {
      fetch("/login")
        .then((res) => res.json())
        .then((data) => {
          if (data === "success") {
            this.setState({ page: "Home", loginError: "" });
          } else if (data === "dne") {
            this.setState({ loginError: "User does not exist!" });
          } else if (data === "pwd") {
            this.setState({ loginError: "Incorrect password!" });
          }
        });
    } else if (action === "signup") {
      fetch("/signup")
        .then((res) => res.json())
        .then((data) => {
          if (data === "success") {
            this.setState({ page: "Home", loginError: "" });
          } else if (data === "exists") {
            this.setState({ loginError: "That username is taken!" });
          }
        });
    }
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <p>Logo</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username
              <input
                type="text"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <label>
            Log In
            <input name="login" type="submit" value="Submit" />
          </label>
          <label>
            Sign Up
            <input name="signup" type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}

export default SignIn;
