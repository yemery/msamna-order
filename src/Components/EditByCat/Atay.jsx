import React, { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useSelector } from "react-redux";

const Atay = ({ id, name, cat, supps, price, Qts }) => {
  const ataySupps = useSelector((state) => state.Items.ataySupp);
  const [orderQts, setOrderQts] = useState(Qts);

  return (
    <>
      <div className="atayContainer">
        <h1>Edit atay order</h1>

        <p>suppliment</p>
        <div className="supps">
          {ataySupps.map((e) => {
            return (
              <>
                <div>
                  {/* <form action=""></form> */}
                  <input
                    type="checkbox"
                    name={e.name}
                    id=""
                    className="checkboxInput"
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
            <button>
              <FaMinusSquare size={32} />
            </button>
            <span>{orderQts}</span>
            <button>
              <FaPlusSquare size={32} />
            </button>
          </div>
          <input type="submit" name="" id="" value="Edit" />
        </div>
      </div>
    </>
  );
};

export default Atay;
