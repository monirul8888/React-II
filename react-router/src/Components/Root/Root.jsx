import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
