import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";

const Upload = ({ setPage }) => {
  const handleFileUpload = () => {
    setPage("Graph");
  };

  return (
    <div className="home">
      <NavBar className="nav" />
      <Header name="Lavan" />
      <div className="rowOne">
        <h2 className="label">Upload</h2>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
    </div>
  );
};

export default Upload;
