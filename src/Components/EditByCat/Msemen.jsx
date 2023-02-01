import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { editOrder } from "../../Services/Reducers/Order";

const Msemen = ({ id, name, cat, Qts, price, supps }) => {
  const Supps = useSelector((state) => state.Items.otherSupp);
  const cartOrders = useSelector((state) => state.Order.cartOrders);
  const [choosedElm, setChoosedElms] = useState({});
  // console.log(Object.entries(supps).map(([key, value]) => value));
  // console.log(Object.entries(supps).find(([key, value]) => value != 0));
  useEffect(() => {
    const arrChoosedElm = Object.entries(supps).filter(
      ([key, value]) => value != 0
    );
    const objectChoosedElms = arrChoosedElm.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    setChoosedElms(objectChoosedElms);
  }, []);
  // console.log(choosedElm);
  // console.log(Supps);
  // console.log(supps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counters, setCounters] = useState(supps);
  // console.log(counters);
  const [qtsOrder, setQts] = useState(Qts);
  // console.log(Supps.find((e) => e.id == 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cartOrders);
    const objectToSend = { id: id, Qts: qtsOrder, cat: cat, supps: counters };
    dispatch(editOrder(objectToSend));
    navigate("/order");
  };
  // console.log(qtsOrder);

  return (
    <>
      <div className="harchaContainer">
        <p>suppliment</p>
        <div className="harchaSupps">
          {Supps.map((e, index) => {
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
                qtsOrder === 1 ? setCounters(1) : setQts(qtsOrder - 1)
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

export default Msemen;
