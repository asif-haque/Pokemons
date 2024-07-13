import React, { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
// import { NavLink } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { updateQuery } from "../redux/features/querySlice";
// import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  const { searchQuery, updateSearchQuery } = useSearchContext();
  return (
    <div className="fixed z-50 w-full navbar lg:px-10 backdrop-blur-md h-16 flex items-center justify-center">
      <input
        className="w-[60%] max-w-[300px] bg-neutral-800 text-white py-1 px-5 outline-none rounded-full"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
