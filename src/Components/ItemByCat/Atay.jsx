import React, { useState, useEffect } from "react";
import "../../Assets/Styles/Atay.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
const Atay = ({ id, name, image, price, ingredient, suppliments }) => {
  const [orderQts, setOrderQtq] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);
  return (
    <>
      <div className="atayContainer">
        <p>suppliment</p>
        <div className="supps">
          {suppliments.map((e) => {
            return (
              <>
                <div>
                  <input
                    type="checkbox"
                    name={e.name}
                    id=""
                    className="checkboxInput"
                    onClick={() =>
                      checkedItems.includes(e.id)
                        ? setCheckedItems(
                            checkedItems.filter((el) => el != e.id)
                          )
                        : // ? setCheckedItems([
                          //     ...checkedItems.filter((el) => el.id != e.id),
                          //   ])
                          setCheckedItems([...checkedItems, e.id])
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
                orderQts === 0 ? setOrderQtq(0) : setOrderQtq(orderQts - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{orderQts}</span>
            <button onClick={() => setOrderQtq(orderQts + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input type="submit" name="" id="" value="add to cart" />
        </div>
      </div>
    </>
  );
};

export default Atay;
