import React, { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import "../../Assets/Styles/Harcha.css";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../Services/Reducers/Order";
import { useNavigate } from "react-router-dom";

const Harcha = ({
  id,
  name,
  image,
  price,
  ingredient,
  suppliments,
  category,
}) => {
  const [counters, setCounters] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [itemQts, setItemQts] = useState(1);
  const [qtsOrder, setQts] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const harchaOrder = {
      id: id,
      name: name,
      supps: counters,
      Qts: qtsOrder,
      itemQts: itemQts,
      cat: category,
      price: price,
    };
    console.log(harchaOrder);
    dispatch(addOrder(harchaOrder));
    setCounters({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    });
    setItemQts(1);
    setItemQts(1);
    navigate("/order");
  };
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
                itemQts === 1 ? setItemQts(1) : setItemQts(itemQts - 1)
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
