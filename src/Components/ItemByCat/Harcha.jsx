import React from "react";
import ItemDom from "../ItemDetails/ItemDom";

const Harcha = ({ id, name, image, price, ingredient, suppliments }) => {
  return (
    <>
      <ItemDom {...{ id, name, image, price, ingredient }} />
      {/* {id} */}
      {/* {suppliments.map((e) => {
        return <>{e.name}</>;
      })} */}
    </>
  );
};

export default Harcha;