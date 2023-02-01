import React, { useState, useEffect } from "react";
import "../../Assets/Styles/Order.css";
import { useSelector, useDispatch } from "react-redux";
import { CiTrash, CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  deleteOrder,
  orderTotal,
  setLocalStorage,
} from "../../Services/Reducers/Order";
const Order = () => {
  const cartOrders = useSelector((state) => state.Order.cartOrders);
  console.log(cartOrders);
  const total = useSelector((state) => state.Order.total);
  const cats = useSelector((state) => state.Items.otherSupp);
  // console.log(cats);
  // console.log(cartOrders);
  // const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  // console.log(total);
  useEffect(() => {
    console.log("changed");
    dispatch(orderTotal());
  }, [cartOrders]);
  // console.log(total);
  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };
  const handleLocalStorage = (e) => {
    e.preventDefault();
    console.log(cartOrders);
    dispatch(setLocalStorage());
  };

  return (
    <>
      <Link to="/" className="goHome" style={{ margin: "99px" }}>
        back
      </Link>
      <div className="orderContainer">
        <h2>bill</h2>
        <div className="tableContainer">
          <table>
            <thead>
              <th>item name</th>
              <th>price</th>
              <th>qts</th>
              <th>number</th>
              <th>amount</th>
              <th></th>
            </thead>
            <tbody>
              {cartOrders.map((e) => {
                return (
                  <>
                    {(() => {
                      if (e.cat == "atay") {
                        return (
                          <>
                            <tr>
                              <td className="tds">
                                <span>{e.name.substring(0, 30)}...</span>
                                {e.supps.map((el) => {
                                  return (
                                    <>
                                      <span className="spans">{el}</span>
                                    </>
                                  );
                                })}
                              </td>
                              <td></td>
                              <td></td>
                              <td>{e.Qts}</td>
                              <td>
                                {" "}
                                {e.price * e.Qts} dhs
                                {/* {setTotal(total + e.price * e.Qts)} */}
                              </td>
                              <td>
                                <button onClick={() => handleDelete(e.id)}>
                                  <CiTrash size={25} />
                                </button>
                                <Link to={`/editOrder/${e.id}`}>
                                  <CiEdit size={25} />
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      } else if (e.cat == "msemen") {
                        return (
                          <>
                            <tr>
                              <td className="tds">
                                <span>{e.name.substring(0, 30)}...</span>
                                {/* {e.supps.map((el) => {
                            return (
                              <>
                                <span className="spans">{el}</span>
                              </>
                            );
                          })} */}
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        <span className="spans">
                                          {cats
                                            .filter((e) => e.id == key)
                                            .map((el) => el.name)}
                                        </span>
                                      </>
                                    );
                                  })}
                              </td>
                              <td>
                                <span>{e.price}</span>
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        <br />
                                        <span className="spans">
                                          {cats
                                            .filter((e) => e.id == key)
                                            .map((el) => el.price)}
                                        </span>
                                      </>
                                    );
                                  })}
                              </td>
                              <td className="">
                                <span className="spans">1</span>
                                <br />
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        {/* <br /> */}
                                        <span className="spans">{value}</span>
                                        <br />
                                      </>
                                    );
                                  })}
                              </td>
                              <td>{e.Qts}</td>
                              <td>
                                {(Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => value)
                                  .reduce((acc, val) => acc + val, 0) +
                                  e.price) *
                                  e.Qts}{" "}
                                dhs
                              </td>
                              <td>
                                <button onClick={() => handleDelete(e.id)}>
                                  <CiTrash size={25} />
                                </button>
                                <Link to={`/editOrder/${e.id}`}>
                                  <CiEdit size={25} />
                                </Link>
                              </td>{" "}
                            </tr>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <tr>
                              <td className="tds">
                                <span>{e.name.substring(0, 30)}...</span>
                                {/* {e.supps.map((el) => {
                            return (
                              <>
                                <span className="spans">{el}</span>
                              </>
                            );
                          })} */}
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        <span className="spans">
                                          {cats
                                            .filter((e) => e.id == key)
                                            .map((el) => el.name)}
                                        </span>
                                      </>
                                    );
                                  })}
                              </td>
                              <td>
                                <span>{e.price}</span>
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        <br />
                                        <span className="spans">
                                          {cats
                                            .filter((e) => e.id == key)
                                            .map((el) => el.price)}
                                        </span>
                                      </>
                                    );
                                  })}
                              </td>
                              <td className="">
                                <span className="spans">{e.itemQts}</span>
                                <br />
                                {Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => {
                                    return (
                                      <>
                                        {/* <br /> */}
                                        <span className="spans">{value}</span>
                                        <br />
                                      </>
                                    );
                                  })}
                              </td>
                              <td>{e.Qts}</td>
                              <td>
                                {(Object.entries(e.supps)
                                  .filter(([key, value]) => value != 0)
                                  .map(([key, value]) => value)
                                  .reduce((acc, val) => acc + val, 0) +
                                  e.price * e.itemQts) *
                                  e.Qts}{" "}
                                dhs
                              </td>
                              <td>
                                <button onClick={() => handleDelete(e.id)}>
                                  <CiTrash size={25} />
                                </button>
                                <Link to={`/editOrder/${e.id}`}>
                                  <CiEdit size={25} />
                                </Link>
                              </td>{" "}
                            </tr>
                          </>
                        );
                      }
                    })()}
                  </>
                );
              })}
              <tr style={{ display: cartOrders.length > 0 ? "" : "none" }}>
                <th>Total</th>
                <td></td>
                <td></td>
                <td></td>

                <td style={{ fontWeight: "700" }}>{total} dhs</td>
                <td>
                  {" "}
                  <input
                    type="submit"
                    value="print the bill"
                    className="billPrint"
                    onClick={handleLocalStorage}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
