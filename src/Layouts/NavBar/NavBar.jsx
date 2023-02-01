import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../../Assets/Styles/NavBar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiClipboardList } from "react-icons/hi";

const NavBar = () => {
  const cartLenght = useSelector((state) => state.Order.cartOrders);
  const ordersLenght = useSelector((state) => state.Order.Orders);
  // console.log(cartLenght.length);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span>MsamnaOrderSystem</span>
          </a>
        </div>
        <div className="container-fluid shoppingCart">
          <Link to="/order">
            <BsFillCartFill size={20} />
            <span>{cartLenght.length}</span>
          </Link>
          <Link to="/allorders">
            <HiClipboardList size={20} />
            {/* <span>{ordersLenght.length}</span> */}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
