import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../../Assets/Styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span>MsamnaOrderSystem</span>
          </a>
        </div>
        <div className="container-fluid shoppingCart">
          <a href="/">
            <BsFillCartFill size={20} />
            <span>(0)</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
