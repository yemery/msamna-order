import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage } from "../../Services/Reducers/Order";

const AllOrders = () => {
  const allOrders = useSelector((state) => state.Order.getLocalStorage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocalStorage());
  }, [localStorage.length]);
  console.log(allOrders);

  return <></>;
};

export default AllOrders;
