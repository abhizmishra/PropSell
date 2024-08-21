import React from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa"
import { useSelector } from 'react-redux';
import DarkMode from './DarkMode';
import logo from "../assets/PropSellLogo.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-evenly items-center max-w-6xl mx-auto p-3">
        <Link to="">
          <img className="rounded-[70%] sm:h-2/4 sm:w-40 h-12 w-auto
           " src={logo} alt="propsell" />
        </Link>
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Prop</span>
            <span className="text-slate-700">Sell</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                className="h-7 w-7 rounded-full"
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header
