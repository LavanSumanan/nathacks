import { Icon, InlineIcon } from "@iconify/react";
import bxsHome from "@iconify/icons-bx/bxs-home";

const NavBar = ({ setPage }) => {
  const handleClick = (e) => {
    setPage(e.target.name);
  };

  return (
    <div className="nav">
      {/* add image source here */}
      <img
        alt="logo"
        src="/Photos/Nathacks_logo.png"
        style={{ width: "150px" }}
      />
      <button
        name="home"
        className="nav-title transparent"
        onClick={handleClick}
      >
        Summary
      </button>
      <button
        name="upload"
        className="nav-title transparent"
        onClick={handleClick}
      >
        Upload
      </button>
      <button
        name="graph"
        className="nav-title transparent"
        onClick={handleClick}
      >
        Table
      </button>
    </div>
  );
};

export default NavBar;
