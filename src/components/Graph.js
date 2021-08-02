import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";
import { useState } from "react";

const Graph = ({ setPage }) => {
  const [timeData, setTimeData] = useState([]);
  const [waveData, setWaveData] = useState([]);

  const getGraphData = () => {
    fetch("/graph")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let keys = [];
        let vals = [];
        for (let k in data) {
          keys.push(k);
          vals.push(data[k]);
        }
        setTimeData(keys);
        setWaveData(vals);
      });
  };

  return (
    <div className="column" onLoad={getGraphData}>
      <NavBar setPage={setPage} className="nav" />
      <Header name="Lavan" />
      <div className="rowOne">
        <div
          className="label centered"
          style={{ height: "80px", width: "300px" }}
        >
          Sleep Data
        </div>
      </div>
      <div className="colOne">
        <p className="data-title">Time</p>
        {timeData.map((time) => (
          <p className="data-point" key={time}>
            {time}
          </p>
        ))}
      </div>
      <div className="colTwo">
        <p className="data-title">Stage of sleep</p>
        {waveData.map((wave, index) => (
          <p className="data-point" key={index}>
            {wave}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Graph;
