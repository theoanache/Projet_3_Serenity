import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./DataNavbar";
import { useAuth } from "../../contexts/AuthContext";

function ButtonNavbar() {
  const { role } = useAuth();

  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    if (role === 1) {
      setNavbar(Navbar.doctor);
    } else {
      setNavbar(Navbar.patient);
    }
  }, [role]);

  return (
    <div className="flex flex-col gap-2 w-[80%]">
      {navbar.map((element) => (
        <NavLink
          key={element.id}
          to={element.link}
          className={({ isActive }) =>
            isActive
              ? "decoration-none bg-violet-two text-white rounded-lg w-full  flex items-center justify-center h-11 pl-3"
              : "decoration-none bg-transparent text-font-gray rounded-lg w-full flex items-center justify-center h-11 pl-3 hover:bg-violet-two hover:text-white"
          }
        >
          <div className="w-full flex items-center  gap-5 font-normal">
            <p className="text-sm">{element.icon}</p>
            <p className="text-sm">{element.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ButtonNavbar;
