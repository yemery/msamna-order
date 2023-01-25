import React from "react";
import "../../Assets/Styles/Item.css";
import { Link } from "react-router-dom";
const Item = ({ id, image, name }) => {
  return (
    <>
      <Link to={`itemDetails/${id}`}>
        <div className="item">
          <div className="img">
            {" "}
            {/* <img src={image} alt="" style={{ width: "100%", height: "100%" }} /> */}
          </div>
          <div className="desc">
            <p className="">{name.substring(0, 30)}...</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
