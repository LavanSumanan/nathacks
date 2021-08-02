import { useState, useEffect } from "react";

import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Test from "./Test";

function App() {
  const [page, setPage] = useState("signin");

  if (page === "test") {
    return (
      <div className="App">
        <Test />
      </div>
    );
  }

  if (page === "signin") {
    return (
      <div className="App">
        <SignIn setPage={setPage} />
      </div>
    );
  } else if (page === "home") {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
