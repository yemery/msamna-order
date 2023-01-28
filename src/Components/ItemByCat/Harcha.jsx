import React, { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import "../../Assets/Styles/Harcha.css";
const Harcha = ({ id, name, image, price, ingredient, suppliments }) => {
  const [counters, setCounters] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [itemQts, setItemQts] = useState(0);
  const [qtsOrder, setQts] = useState(0);
  return (
    <>
      <div className="harchaContainer">
        <p>suppliment</p>
        <div className="harchaSupps">
          {suppliments.map((e, index) => {
            return (
              <>
                <div className="harchaDiv">
                  <span>{e.name}</span>
                  <div className="counter">
                    <button
                      onClick={(e) =>
                        counters[index] === 0
                          ? setCounters({
                              ...counters,
                              [index]: 0,
                            })
                          : setCounters({
                              ...counters,
                              [index]: counters[index] - 1,
                            })
                      }
                    >
                      <FaMinusSquare size={30} />
                    </button>
                    <span>{counters[index]}</span>
                    <button
                      onClick={(e) =>
                        setCounters({
                          ...counters,
                          [index]: counters[index] + 1,
                        })
                      }
                    >
                      <FaPlusSquare size={30} />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="orderSetup">
          <div className="qts">
            <p>item qts</p>
            <button
              onClick={() =>
                itemQts === 0 ? setItemQts(0) : setItemQts(itemQts - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{itemQts}</span>
            <button onClick={() => setItemQts(itemQts + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <div className="qts">
            <p>Order qts</p>
            <button
              onClick={() =>
                qtsOrder === 0 ? setQts(0) : setQts(qtsOrder - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{qtsOrder}</span>
            <button onClick={() => setQts(qtsOrder + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input type="submit" name="" id="" value="add to cart" />
        </div>
      </div>
    </>
  );
};

export default Harcha;
