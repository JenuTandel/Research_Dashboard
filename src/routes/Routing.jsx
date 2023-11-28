import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import { FileManagement } from "../pages/FileManagement";
import { Master } from "../components/layout/Master";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Master />}>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/file-management" element={<FileManagement />}></Route>
      </Route>
    </Routes>
  );
};
