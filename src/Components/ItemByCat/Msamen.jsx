import React, { useState } from "react";
import "../../Assets/Styles/Msemen.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addOrder } from "../../Services/Reducers/Order";
import { useNavigate } from "react-router-dom";

const Msamen = ({
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
  const [qtsOrder, setQts] = useState(1);
  // console.log(counters);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const msamenOrder = {
      id: id,
      name: name,
      supps: counters,
      Qts: qtsOrder,
      cat: category,
      price: price,
    };
    console.log(msamenOrder);
    dispatch(addOrder(msamenOrder));
    setCounters({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    });
    setQts(1);
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

export default Msamen;
