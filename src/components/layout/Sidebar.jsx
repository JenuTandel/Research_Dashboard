import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ isOpen }) => {
  return (
    <>
      {!isOpen ? (
        <aside className={`sidebar ${isOpen ? "sidebarOpen" : "sidebarClose"}`}>
          <div className="d-flex flex-column justify-content-between h-100">
            <ul>
              <li>
                <Link to="/home" className="nav-link">
                  <span className="icon bi bi-house"></span>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/file-management" className="nav-link">
                  <span className="icon bi bi-file-earmark-bar-graph"></span>
                  <span className="nav-text">File Management</span>
                </Link>
              </li>
            </ul>
            <ul className="mb-4">
              <li>
                <a href="" className="nav-link">
                  <span className="icon bi bi-box-arrow-right"></span>
                  <span className="nav-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};
