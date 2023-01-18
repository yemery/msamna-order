import React from "react";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import ItemDom from "./ItemDom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ItemDetails = () => {
  const { id } = useParams();
  const findItemById = useSelector((state) => state.Items.items).find(
    (e) => e.id == id
  );
  return (
    <>
      <NavBar />
      <ItemDom {...findItemById} />
      {/* <Footer /> */}
    </>
  );
};

export default ItemDetails;
