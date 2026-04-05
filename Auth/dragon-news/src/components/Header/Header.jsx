import React from 'react';
import logo from "../../assets/logo.png";
import {format} from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <img className="w-[500px]" src={logo} alt="logo" />
      <p className="text-accent">
        Journalism Without Fear or Favour
      </p>
      <p>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
    </div>
  );
};



export default Header;