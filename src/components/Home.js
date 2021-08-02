import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar className="nav" />
      <Header name="Lavan" />
      <div className="rowOne">
        <h2 className="label">
          Schedule<button className="question">?</button>
        </h2>
        <h2 className="label">
          Upload<button className="question">?</button>
        </h2>
      </div>
      <div className="rowTwo">
        <h2 className="label">
          Alarm<button className="question">?</button>
        </h2>
        <h2 className="label">
          Summary<button className="question">?</button>
        </h2>
      </div>
    </div>
  );
};

export default Home;
