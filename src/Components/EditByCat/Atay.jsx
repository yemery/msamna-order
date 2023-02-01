import React, { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editOrder } from "../../Services/Reducers/Order";

const Atay = ({ id, name, cat, supps, price, Qts }) => {
  const ataySupps = useSelector((state) => state.Items.ataySupp);
  const [orderQts, setOrderQts] = useState(Qts);
  const [checkedItems, setCheckedItems] = useState([]);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const objectToSend = {
      id: id,
      cat: cat,
      Qts: orderQts,
      supps: checkedItems,
    };
    dispatch(editOrder(objectToSend));
    navigate("/order");
  };

  return (
    <>
      <div className="atayContainer">
        <h1>Edit atay order</h1>
        <i>your previous suppliments</i>
        {supps.map((e) => (
          <li>{e}</li>
        ))}
        <p>set new suppliment</p>
        <div className="supps">
          {ataySupps.map((e) => {
            return (
              <>
                <div>
                  {/* <form action=""></form> */}
                  <input
                    type="checkbox"
                    name={e.name}
                    // checked={supps.includes(e.name) ? true : false}
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
                orderQts === 1 ? setOrderQts(1) : setOrderQts(orderQts - 1)
              }
            >
              <FaMinusSquare size={32} />
            </button>
            <span>{orderQts}</span>
            <button onClick={() => setOrderQts(orderQts + 1)}>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input
            type="submit"
            name=""
            id=""
            value="Edit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Atay;
