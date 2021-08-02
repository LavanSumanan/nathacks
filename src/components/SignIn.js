import { useState } from "react";
import "../signin.css";

const SignIn = ({ setPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const signupPostRequest = () => {
    const data = { username, password };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/signup", options)
      .then((res) => res.json())
      .then((responsedata) => {
        console.log(responsedata);
        if (responsedata.signUp === "exists") {
          setLoginError("That username is taken");
        } else {
          setLoginError("");
        }
      });
  };

  const loginPostRequest = () => {
    const data = { username, password };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/login", options)
      .then((res) => res.json())
      .then((responsedata) => {
        console.log(responsedata);
        if (responsedata.login === "dne") {
          setLoginError("That user does not exist");
        } else if (responsedata.login === "pw") {
          setLoginError("Incorrect password");
        } else if (responsedata.login === "success") {
          setLoginError("");
          setPage("home");
        }
      });
  };

  return (
    <div className="signin-container">
      <header className="header-box">
        <img src="" alt="logo" />
      </header>

      <section className="login-section">
        <div className="username-div">
          <label>
            Username
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="signin-buttons">
          <button className="login-btn" onClick={loginPostRequest}>
            Login
          </button>
          <button className="signin-btn" onClick={signupPostRequest}>
            Sign Up
          </button>
        </div>
        <div>{loginError}</div>
      </section>

      <aside className="banner">
        <p>TABIS</p>
        <p>Perfect Time,</p>
        <p>Perfect Place,</p>
        <p>Perfect Rest</p>
      </aside>
    </div>
  );
};

export default SignIn;
