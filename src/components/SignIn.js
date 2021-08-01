import { useState } from "react";
import "../signin.css";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loginError, setLoginError] = useState("");

  // for login:
  // if data === "success": ""
  // if data === "dne": "User does not exist!"
  // if data === "pwd": "Incorrect password!"
  // for sign up:
  // if data === "success": ""
  // if data === "exists": "That username is taken!"

  // make into async and put in login button's onSubmit
  // useEffect(() => {
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then((response) =>
  //     response.json().then((data) => {
  //       console.log(data);
  //       if (data["login"] === "dne") {
  //         setIsLoggedIn(false);
  //         setLoginError("That user does not exist");
  //       } else if (data["login"] === "pwd") {
  //         setIsLoggedIn(false);
  //         setLoginError("Incorrect password");
  //       } else if (data["login"] === "success") {
  //         setIsLoggedIn(true);
  //         setPage(<Home />);
  //         setLoginError("");
  //       }
  //     })
  //   );
  // }, []);

  // const handleSubmit = (event) => {
  //   else if (action === "signup") {
  //     fetch("/signup")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data === "success") {
  //           this.setState({ page: "Home", loginError: "" });
  //         } else if (data === "exists") {
  //           this.setState({ loginError: "That username is taken!" });
  //         }
  //       });
  //   }
  // };

  return (
    <div className="signin-container">
      <header className="header-box">
        <img src="" alt="logo" />
        <h2>Name</h2>
      </header>

      <section className="login-section">
        <form>
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
            <input
              className="login-btn"
              name="login"
              type="submit"
              value="Login"
              onClick={async () => {
                const user = { username: username, password: password };
                const response = await fetch("http://localhost:5000/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user),
                });

                if (response.ok) {
                  console.log("response worked!");
                }
              }}
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
        <p>Perfect Time,</p>
        <p>Perfect Place,</p>
        <p>Perfect Rest</p>
      </aside>
    </div>
  );
};

export default SignIn;
