import React from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import "../../Assets/Styles/Harcha.css";
const Harcha = ({ id, name, image, price, ingredient, suppliments }) => {
  return (
    <>
      <div className="harchaContainer">
        <p>suppliment</p>
        <div className="harchaSupps">
          {suppliments.map((e) => {
            return (
              <>
                <div className="harchaDiv">
                  <span>{e.name}</span>
                  <div className="counter">
                    <button>
                      <FaMinusSquare size={30} />
                    </button>
                    <span>0</span>
                    <button>
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
            <button>
              <FaMinusSquare size={32} />
            </button>
            <span>0</span>
            <button>
              <FaPlusSquare size={32} />
            </button>
          </div>
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

export default Harcha;
