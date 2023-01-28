import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../Assets/Styles/Atay.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addOrder } from "../../Services/Reducers/Order";
const Atay = ({ id, name, image, price, ingredient, suppliments }) => {
  const [orderQts, setOrderQtq] = useState(1);
  const [checkedItems, setCheckedItems] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(checkedItems);
  // }, [checkedItems]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const atayOrder = {
      id: id,
      name: name,
      supps: checkedItems,
      Qts: orderQts,
    };
    // console.log(atayOrder);
    dispatch(addOrder(atayOrder));
    setOrderQtq(0);
    setCheckedItems([]);
    navigate("/");
  };

  return (
    <>
      <div className="atayContainer">
        <p>suppliment</p>
        <div className="supps">
          {suppliments.map((e) => {
            return (
              <>
                <div>
                  {/* <form action=""></form> */}
                  <input
                    type="checkbox"
                    name={e.name}
                    id=""
                    className="checkboxInput"
                    onClick={() =>
                      checkedItems.includes(e.name)
                        ? setCheckedItems(
                            checkedItems.filter((el) => el != e.name)
                          )
                        : // ? setCheckedItems([
                          //     ...checkedItems.filter((el) => el.id != e.id),
                          //   ])
                          setCheckedItems([...checkedItems, e.name])
                    }
                  />
                  <span>{e.name}</span>
                </div>
              </>
            );
          })}
        </div>
        <div className="orderSetup">
          <div className="qts">
            <p>Order qts</p>
            <button
              onClick={() =>
                orderQts === 1 ? setOrderQtq(1) : setOrderQtq(orderQts - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{orderQts}</span>
            <button onClick={() => setOrderQtq(orderQts + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input
            type="submit"
            name=""
            id=""
            value="add to cart"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Atay;
