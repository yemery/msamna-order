import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "../Components/ItemDetails/ItemDetails.jsx";
// import LandingPage from "../Pages/LandingPage.jsx";
import Error from "../Pages/Error.jsx";
import Order from "../Components/OrderDetails/Order.jsx";
import Header from "../Components/ManuPage/Header.jsx";
import AllOrders from "../Components/OrderDetails/AllOrders.jsx";
import EditOrder from "../Components/OrderDetails/EditOrder.jsx";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/itemDetails/:id" element={<ItemDetails />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/allorders" element={<AllOrders />}></Route>
        <Route path="/editOrder/:id" element={<EditOrder />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
