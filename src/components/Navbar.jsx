import React from "react";
import logo from "../assets/navberlogo.png";
import { Link } from "react-router-dom";
import bannerImage from "../assets/bg-banner.png";
import { signOutUser, useUserProfile } from "../api/allApi";

function Navbar() {
  const { user, loading, error } = useUserProfile();

  const handleSignOut = () => {
    signOutUser();
  };

  const navItems = (
    <>
      <li>
        <Link className="font-medium" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-medium" to="/course-details">
          Course Details
        </Link>
      </li>
      <li>
        <Link className="font-medium" to="/about-us">
          About Us
        </Link>
      </li>
      <li>
        <Link className="font-medium" to="/blog">
          Blog
        </Link>
      </li>

      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleSignOut}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link className="font-medium" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-base-100"
    >
      <div className="md:mx-16">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img className="w-[35px]" src={logo} alt="" /> BFIT
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="">
              <a
                href="/enroll"
                className="btn text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 btn-sm px-3 lg:px-6 py-2"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
