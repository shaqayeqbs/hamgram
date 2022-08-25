import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#1477e1] rounded-3xl px-4 py-2  font-bold text-[#e6e6e6]">
      <div className="text-2xl">
        <AiFillCloseCircle />
      </div>
      <div className="text-lg font-medium">Hamgramco | همگرام</div>
    </div>
  );
};

export default Navbar;
