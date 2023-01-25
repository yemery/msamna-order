import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "../Components/ItemDetails/ItemDetails.jsx";
import LandingPage from "../Pages/LandingPage.jsx";
import Error from "../Pages/Error.jsx";
import Order from "../Components/OrderDetails/Order.jsx";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          
        </Route>
        <Route path="/itemDetails/:id" element={<ItemDetails />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>
    </>
  );
};

export default AllRoutes;
