import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    fetch("/login")
      .then((res) => res.json())
      .then((data) => {
        //check if valid login, if so, change a variable to render a new page
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.andleSubmit}>
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
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
