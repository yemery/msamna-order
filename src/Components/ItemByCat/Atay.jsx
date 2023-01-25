import React from "react";
import ItemDom from "../ItemDetails/ItemDom";
import "../../Assets/Styles/Atay.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
const Atay = ({ id, name, image, price, ingredient, suppliments }) => {
  return (
    <>
      <ItemDom {...{ id, name, image, price, ingredient }} />
      {/* {id} */}
      {/* {suppliments.map((e) => {
        return <>{e.name}</>;
      })} */}
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
            <span>0</span>
            <button>
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
