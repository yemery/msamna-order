import React from "react";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import ItemDom from "./ItemDom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Atay from "../ItemByCat/Atay";
import Msamen from "../ItemByCat/Msamen";
import Harcha from "../ItemByCat/Harcha";

const ItemDetails = () => {
  const { id } = useParams();
  const findItemById = useSelector((state) => state.Items.items).find(
    (e) => e.id == id
  );
  return (
    <>
      <NavBar />
      {/* <ItemDom {...findItemById} /> */}
      {(() => {
        if (findItemById.category == "atay") {
          return <Atay {...findItemById} />;
        } else if (findItemById.category == "msemen") {
          return <Msamen {...findItemById} />;
        } else if (findItemById.category == "7archa") {
          return <Harcha {...findItemById} />;
        }
      })()}
      {/* <Footer /> */}
    </>
  );
};

export default ItemDetails;
