import React, { Component } from "react";
import "../signin.css";
import Nat_Logo from './Nathacks_Logo.png';


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
      <div className="signin-container">
        <header className="header-box">
          <img src={Nat_Logo} alt="logo" />
        </header>

        <section className="login-section">
          <form onSubmit={this.handleSubmit}>
            <div className="username-div">
              <label>
                Username
                <input
                  required
                  type="text"
                  onChange={this.handleChange}
                  name="username"
                  value={this.state.username}
                />
              </label>
            </div>
            <div className="password-div">
              <label>
                Password
                <input
                  required
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            <div className="signin-buttons">
              <input
                className="login-btn"
                name="login"
                type="submit"
                value="Login"
              />
              <input
                className="signin-btn"
                name="signup"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </section>

        <aside className="banner">
          <p>TABIS</p>
          <p>Perfect Time,</p>
          <p>Perfect Place,</p>
          <p>Perfect Rest,</p>
        </aside>
      </div>
    );
  }
}

export default SignIn;
