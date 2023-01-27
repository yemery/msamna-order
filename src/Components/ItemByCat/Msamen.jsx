import React from "react";
import ItemDom from "../ItemDetails/ItemDom";
const Msamen = ({ id, name, image, price, ingredient, suppliments }) => {
  return (
    <>
      {suppliments.map((e) => {
        return <>{e.name}</>;
      
      })} 
      {id}
    </>
  );
};

export default Msamen;
