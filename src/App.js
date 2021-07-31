import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <p>Log in</p>
        <SignUp />
        <br></br>
        <p>Already have an account? Log in!</p>
        <Login />
      </div>
    );
  }
}

export default App;
