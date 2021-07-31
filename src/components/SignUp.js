import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      confirmPasswordError: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPasswordError: "These passwords don't match! Try again",
      });
    } else {
      this.setState({ confirmPasswordError: "" });
    }
    console.log(this.state);
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
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Confirm password
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <p style={{ color: "red", fontSize: "30px" }}>
            {this.state.confirmPasswordError}
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
