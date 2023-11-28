import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Master = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="d-flex flex-column h-100">
      <Header toggleSidebar={toggleSidebar}></Header>
      <div className="d-flex overflow-hidden h-100 main-wrapper flex-grow-1">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
