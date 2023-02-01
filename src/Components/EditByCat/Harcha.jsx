import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { editOrder } from "../../Services/Reducers/Order";

const Harcha = ({ id, cat, itemQts, supps, Qts }) => {
  const [counters, setCounters] = useState(supps);
  const [itemQs, setItemQts] = useState(itemQts);
  const [qtsOrder, setQts] = useState(Qts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Supps = useSelector((state) => state.Items.otherSupp);
  const handleSubmit = (e) => {
    e.preventDefault();
    const objectToSend = {
      id: id,
      cat: cat,
      supps: counters,
      itemQts: itemQs,
      Qts: qtsOrder,
    };
    dispatch(editOrder(objectToSend));
    navigate("/order");
  };

  return (
    <>
      <div className="harchaContainer">
        <p>suppliment</p>
        <div className="harchaSupps">
          {Supps.map((e, index) => {
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
                itemQts === 1 ? setItemQts(1) : setItemQts(itemQts - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{itemQs}</span>
            <button onClick={() => setItemQts(itemQts + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <div className="qts">
            <p>Order qts</p>
            <button
              onClick={() =>
                qtsOrder === 1 ? setQts(1) : setQts(qtsOrder - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{qtsOrder}</span>
            <button onClick={() => setQts(qtsOrder + 1)}>
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

export default Harcha;
