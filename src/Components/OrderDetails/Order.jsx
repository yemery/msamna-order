import React from "react";
import "../../Assets/Styles/Order.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Order = () => {
  const cartOrders = useSelector((state) => state.Order.cartOrders);
  const cats = useSelector((state) => state.Items.otherSupp);
  console.log(cats);
  console.log(cartOrders);
  return (
    <>
      <div className="orderContainer">
        <Link to="/" className="goHome">
          back
        </Link>
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
                              <td> {e.price * e.Qts} dhs</td>
                              <td>actions</td>
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
                              <td>actions</td>
                            </tr>
                          </>
                        );
                      } else {
                        return <div>catch all</div>;
                      }
                    })()}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
