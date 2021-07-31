import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: "",
      page: "Login",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    fetch("/login")
      .then((res) => res.json())
      .then((data) => {
        if (data === true) {
          this.setState({ page: "Home" });
        } else if (data === "dne") {
          this.setState({
            page: "Login",
            loginError: "That user does not exist!",
          });
        }
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
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
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
