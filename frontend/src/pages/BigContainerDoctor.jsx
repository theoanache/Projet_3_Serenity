import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function BigContainerDoctor() {
  return (
    <div className="w-10/12 min-h-screen absolute right-0 bg-background-dark text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default BigContainerDoctor;
