import { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";

const Graph = () => {
  useEffect(() => {
    fetch("/graph")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      <NavBar className="nav" />
      <Header name="Lavan" />
      <div className="rowOne">
        <table>
          <thead>
            <tr>
              <th>Wave type</th>
              <th>Wave frequency</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Graph;
