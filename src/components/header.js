import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import fitfusion from "../images/fitfusion.jpg";

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToggle}
      >
        <FaAngleDown size={15} className="text-gray-400" />
        <span className="capitalize pr-6 pl-2 text-gray-400 md:text-base text-4xl">
          Workout
        </span>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 text-white shadow-md rounded-md bg-black">
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-100 text-gray-400 text-sm border border-gray-400 rounded-t-md">
            <Link onClick={closeDropdown} to="/workout/item1">
              By days
            </Link>
          </div>
          <div className="py-2 px-4 cursor-pointer hover:bg-gray-100 text-gray-400 text-sm rounded-b-md">
            <Link onClick={closeDropdown} to="/workout/item2">
              By muscles
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};


const Header = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const updateNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      dropdown: <Dropdown />,
    },
    {
      id: 2,
      link: "diet",
    },
    {
      id: 3,
      link: "yoga",
    },
    {
      id: 4,
      link: "analytics",
    },
  ];

  return (
    <div className="sticky z-10 top-0 bg-black text-3xl flex p-3 border-b-2 border-gray-500 justify-between">
      <img src={fitfusion} alt="FitFusion Logo" className="w-12 h-12 rounded-md" />

      <h1 className="text-lg text-white md:flex items-center ml-auto hidden font-medium">
        {links.map(({ id, link, dropdown }) => (
          <ul key={id}>
            {dropdown ? (
              <li>{dropdown}</li>
            ) : (
              <li className="font-medium capitalize px-6 text-gray-400 text-sm cursor-pointer md:text-base hover:scale-105 duration-200">
                <Link to={link}>{link}</Link>
              </li>
            )}
          </ul>
        ))}
      </h1>

      <div className="flex">
        <button
          onClick={() => navigate("/login")}
          className="border rounded-md border-blue-400 flex py-2 items-end justify-end mx-4"
        >
          <span className="font-medium capitalize px-4 text-blue-400 text-sm pb-1.5 ">
            Login
          </span>
        </button>

        <div
          onClick={() => updateNav()}
          className="cursor-pointer pr-4 text-gray-500 md:hidden mt-2"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link, dropdown }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 capitalize text-4xl hover:scale-105 duration-200 text-gray-400"
            >
              {dropdown ? (
                <>{dropdown}</>
              ) : (
                <Link onClick={() => updateNav()} to={link}>
                  {link}
                </Link>
              )}
            </li>
          ))}
          <div className="absolute top-0 right-0 m-4">
            <button onClick={() => updateNav()}>
              <FaTimes size={30} />
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
