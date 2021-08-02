import { Icon, InlineIcon } from "@iconify/react";
import moonIcon from "@iconify-icons/bytesize/moon";
import settingsIcon from "@iconify-icons/bytesize/settings";
import notificationIcon from "@iconify-icons/mono-icons/notification";

const Header = ({ name }) => {
  return (
    <header className="header">
      <div className="welcome-box">
        <h1 className="header-title">
          Welcome back, {name}! <Icon icon={moonIcon} />
        </h1>
      </div>

      <div className="utilities" style={{ paddingTop: "20px" }}>
        <button className="transparent" name="settings">
          <Icon icon={settingsIcon} style={{ fontSize: "40px" }} />
        </button>
        <button className="transparent" name="alerts">
          <Icon icon={notificationIcon} style={{ fontSize: "40px" }} />
        </button>
        <button className="transparent" name="profile">
          <img
            style={{ width: "64px", height: "64px" }}
            alt="profile"
            src="/Photos/profilepic.png"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
