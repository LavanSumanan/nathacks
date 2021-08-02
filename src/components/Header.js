const Header = ({ name }) => {
  return (
    <header className="header">
      <div className="welcome-box">
        <h1>Welcome back, {name}!</h1>
        <img
          alt="moon"
          src="" //Add image once folder of static images has been made
        ></img>
      </div>
      <div className="utilities">
        <button name="settings">
          <img alt="settings" src="" />
        </button>
        <button name="alerts">
          <img alt="alerts" src="" />
        </button>
        <button name="profile">
          <img alt="profile" src="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
