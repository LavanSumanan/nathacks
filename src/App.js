import { useState, useEffect } from "react";

import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Summary from "./components/Summary";
import Upload from "./components/Upload";
import Graph from "./components/Graph";

function App() {
  const [page, setPage] = useState("signin");

  if (page === "signin") {
    return (
      <div className="App">
        <SignIn setPage={setPage} />
      </div>
    );
  } else if (page === "home") {
    return (
      <div className="App">
        <Summary setPage={setPage} />
      </div>
    );
  } else if (page === "upload") {
    return (
      <div className="App">
        <Upload setPage={setPage} />
      </div>
    );
  } else if (page === "graph") {
    return (
      <div className="App">
        <Graph setPage={setPage} />
      </div>
    );
  }
}

export default App;
