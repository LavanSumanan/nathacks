import { useState } from "react";

import SignIn from "./components/SignIn";
import Header from "./components/Header";
// import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [page, setPage] = useState(<SignIn />);

  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
