import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage, sumAllOrder } from "../../Services/Reducers/Order";
import "../../Assets/Styles/AllOrders.css";
const AllOrders = () => {
  const allOrders = useSelector((state) => state.Order.getLocalStorage);
  const totalAllOrder = useSelector((state) => state.Order.totalOfAllOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocalStorage());
    dispatch(sumAllOrder());
  }, [localStorage.length]);
  console.log(allOrders);

  return (
    <>
      <div className="tableContainer">
        <table>
          <thead>
            <th>Order Id</th>
            {/* <th>{`order(s)`}</th> */}
            <th>Amout</th>
          </thead>
          <tbody>
            {allOrders.map((e, index) => {
              return (
                <>
                  <tr>
                    <td>{index}</td>

                    <td>{e.total} dhs</td>
                  </tr>
                </>
              );
            })}
            <tr style={{ display: totalAllOrder != 0 ? "" : "none" }}>
              <td>Total</td>
              <td>{totalAllOrder}dhs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrders;
