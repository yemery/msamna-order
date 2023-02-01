import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Atay from "../EditByCat/Atay";
import Msemen from "../EditByCat/Msemen";
import Harcha from "../EditByCat/Harcha";

const EditOrder = () => {
  const { id } = useParams();
  const findItemById = useSelector((state) => state.Order.cartOrders).find(
    (e) => e.id == id
  );
  // console.log(id);
  // console.log(findItemById.cat);
  return (
    <>
      {(() => {
        if (findItemById.cat == "atay") {
          return <Atay {...findItemById} />;
        } else if (findItemById.cat == "msemen") {
          return (
            <>
              <Msemen {...findItemById} />
            </>
          );
          // eslint-disable-next-line eqeqeq
        } else if (findItemById.cat == "7archa") {
          return <Harcha {...findItemById} />;
        }
      })()}{" "}
    </>
  );

  {
  }
};

export default EditOrder;
