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
  const items = useSelector((state) => state.Items);
  // console.log(items);
  const otherSuppliments = items.otherSupp;
  const ataySuppliments = items.ataySupp;
  // console.log(otherSuppliments, ataySuppliments);
  const propsItemsDetailsOtherSupp = {
    ...findItemById,
    suppliments: otherSuppliments,
  };
  const propsItmesDetailsAtaySupp = {
    ...findItemById,
    suppliments: ataySuppliments,
  };
  // console.log(propsItemsDetailsOtherSupp);

  return (
    <>
      <ItemDom {...findItemById} />

      {(() => {
        if (findItemById.category == "atay") {
          return <Atay {...propsItmesDetailsAtaySupp} />;
        } else if (findItemById.category == "msemen") {
          return (
            <>
              <Msamen {...propsItemsDetailsOtherSupp} />
            </>
          );
        } else if (findItemById.category == "7archa") {
          return <Harcha {...propsItemsDetailsOtherSupp} />;
        }
      })()}
    </>
  );
};

export default ItemDetails;
