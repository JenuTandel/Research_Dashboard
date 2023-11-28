import React from "react";
import mineimg from "../../assets/images/mine.jpeg";

export const Header = ({ toggleSidebar }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <label htmlFor="toggleSidebar" className="toggle-button cursor-pointer">
          <span
            className="icon bi bi-list text-white"
            onClick={toggleSidebar}
          ></span>
        </label>
      </div>
      <div className="action-bar d-flex align-items-center justify-content-between">
        <a href="" className="notification me-4">
          <span className="icon bi bi-bell"></span>
        </a>
        <a className="dropdown d-flex align-items-center">
          <div className="profile-wrapper overflow-hidden rounded-circle">
            <img src={mineimg} alt="profile pic" />
          </div>
          <span className="icon caret fa-solid fa-caret-down"></span>
        </a>
      </div>
    </header>
  );
};
