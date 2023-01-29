import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/ItemDom.css";
const ItemDom = ({ id, name, image, price, ingredient, suppliments }) => {
  //   console.log(findItemById);

  return (
    <>
      <Link to="/" className="goHome" style={{ margin: "99px" }}>
        back
      </Link>
      <div className="container itemContainer">
        <div className="itemImg">
          <div></div>
        </div>
        <div className="itemDesc">
          <div className="title">{name}</div>
          <div className="price">{price} Dhs</div>
          <span>ingredients</span>
          <div className="ing">
            <ol>
              {ingredient.map((e) => {
                return (
                  <>
                    <li>{e}</li>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <h2>suppliment</h2>
        {suppliments.map((e) => e)}
      </div> */}
    </>
  );
};

export default ItemDom;
