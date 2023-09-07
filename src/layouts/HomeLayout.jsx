import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <div className="bg-dark">
        <nav className="nav justify-content-center  ">
          {/* gias trị prop to tương ứng với path để điều hướng tới element tương ứng */}
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/user">
            User
          </Link>
          <Link className="nav-link" to="/posts">
            Post
          </Link>
          <Link className="nav-link" to="/styles">
            Style
          </Link>
          <Link className="nav-link" to="/react-query">
            React-query
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
