import React from "react";

const Navbar2 = () => {
  return (
    <div>
      <fieldset className="fieldset">
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="radio"
            name="theme-radios"
            className="radio radio-sm theme-controller"
            value="default"
          />
          Default
        </label>
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="radio"
            name="theme-radios"
            className="radio radio-sm theme-controller"
            value="retro"
          />
          Retro
        </label>
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="radio"
            name="theme-radios"
            className="radio radio-sm theme-controller"
            value="cyberpunk"
          />
          Cyberpunk
        </label>
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="radio"
            name="theme-radios"
            className="radio radio-sm theme-controller"
            value="valentine"
          />
          Valentine
        </label>
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="radio"
            name="theme-radios"
            className="radio radio-sm theme-controller"
            value="aqua"
          />
          Aqua
        </label>
      </fieldset>
    </div>
  );
};

export default Navbar2;
