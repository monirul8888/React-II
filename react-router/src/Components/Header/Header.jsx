import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-gray-100 shadow-md p-10">
      <h3 className="text-2xl font-bold text-center mb-4">
        This is Header Page
      </h3>

      <nav className="flex justify-center gap-6 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "hover:text-blue-500 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/mobiles"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "hover:text-blue-500 transition"
          }
        >
          Mobiles
        </NavLink>

        <NavLink
          to="/laptops"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "hover:text-blue-500 transition"
          }
        >
          Laptops
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "hover:text-blue-500 transition"
          }
        >Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
