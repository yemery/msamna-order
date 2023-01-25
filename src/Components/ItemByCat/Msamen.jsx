import React from "react";
import ItemDom from "../ItemDetails/ItemDom";
const Msamen = ({ id, name, image, price, ingredient, suppliments }) => {
  return (
    <>
      <ItemDom {...{ id, name, image, price, ingredient }} />
      {suppliments.map((e) => {
        return <>{e.name}</>;
      })}
    </>
  );
};

export default Msamen;
