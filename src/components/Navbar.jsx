import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "light";
}

function Navbar() {
  const [mode, setMode] = useState(getThemeFromLocalStorage());
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);
  const changeMode = () => {
    setMode((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };
  return (
    <nav className="py-6 bg-gray-200 shadow-md mb-7 ">
      <div className="align-element flex justify-between items-center">
        <h1 className="text-3xl text-black flex items-center gap-3">
          Articles
          <span className="cursor-pointer" onClick={changeMode}>
            {mode == "light" ? <FaMoon /> : <FaSun />}
          </span>
        </h1>
        <div className="flex gap-5">
          <NavLink className="text-xl hover:text-orange-500" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl hover:text-orange-500" to="/about">
            About
          </NavLink>
          <NavLink className="text-xl hover:text-orange-500" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
