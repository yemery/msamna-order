import React, { useState } from "react";
import "../../Assets/Styles/Msemen.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const Msamen = ({ id, name, image, price, ingredient, suppliments }) => {
  const [counters, setCounters] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [qtsCounter, setQts] = useState(0);
  console.log(counters);
  return (
    <>
      <div className="harchaContainer">
        <p>suppliment</p>
        <div className="harchaSupps">
          {suppliments.map((e, index) => {
            return (
              <>
                {/* {console.log(index)} */}
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
            <p>Order qts</p>
            <button
              onClick={() =>
                qtsCounter === 0 ? setCounters(0) : setQts(qtsCounter - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{qtsCounter}</span>
            <button onClick={() => setQts(qtsCounter + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input type="submit" name="" id="" value="add to cart" />
        </div>
      </div>
    </>
  );
};

export default Msamen;
