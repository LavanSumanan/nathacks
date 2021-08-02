import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";

const Summary = ({ setPage }) => {
  return (
    <div className="home">
      <NavBar setPage={setPage} className="nav" />
      <Header name="Lavan" />
      <div className="rowOne">
        <h2 className="label">
          Schedule{" "}
          <button
            className="question"
            onClick={() => {
              alert("Check your weekly sleep schedule");
            }}
          >
            ?
          </button>
        </h2>
        <h2 className="label">
          Upload{" "}
          <button
            className="question"
            onClick={() => {
              alert("Upload eeg sleep data");
            }}
          >
            ?
          </button>
        </h2>
        <img alt="summary1" src="/Photos/summary1.png" />
      </div>
      <div className="rowTwo">
        <h2 className="label">
          Alarm{" "}
          <button
            className="question"
            onClick={() => {
              alert("Set the perfect alarm");
            }}
          >
            ?
          </button>
        </h2>
        <h2 className="label">
          Summary{" "}
          <button
            className="question"
            onClick={() => {
              alert("See a review of your sleep");
            }}
          >
            ?
          </button>
        </h2>
        <img alt="summary2" src="/Photos/summary2.png" />
      </div>
    </div>
  );
};

export default Summary;
