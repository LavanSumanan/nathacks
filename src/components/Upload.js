import { Icon, InlineIcon } from "@iconify/react";
import brainIcon from "@iconify-icons/twemoji/brain";

import NavBar from "./NavBar";
import Header from "./Header";
import "../home.css";

const Upload = ({ setPage }) => {
  const handleFileUpload = () => {
    setPage("graph");
  };

  return (
    <div className="home">
      <NavBar setPage={setPage} className="nav" />
      <Header name="Lavan" />
      <div className="rowOne" style={{ display: "block" }}>
        <h2 className="label" style={{ maxWidth: "550px" }}>
          Upload
          <Icon icon={brainIcon} style={{ fontSize: "415px" }} />
        </h2>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
    </div>
  );
};

export default Upload;
