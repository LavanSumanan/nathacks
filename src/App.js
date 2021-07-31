import React, { Component } from "react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
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
        <Header />
        <p>Sign up</p>
        <SignIn />
      </div>
    );
  }
}

export default App;
