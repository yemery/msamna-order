import React, { useState } from "react";
import { filterItems } from "../../Services/Reducers/Items";
import { useSelector, useDispatch } from "react-redux";
import "../../Assets/Styles/Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((data) => data.Items);
  const categories = allItems.categories;
  const filterItemsByCat = useSelector((data) => data.Items.filterItemsArr);
  const filterFun = (name) => {
    dispatch(filterItems(name));
  };
  // console.log(filterItemsByCat, allItems);
  // console.log(allItems.items);
  const ArrToMapOn =
    filterItemsByCat.length !== 0 ? filterItemsByCat : allItems.items;
  return (
    <>
      <div className="container listOfCat">
        {categories.map((e) => {
          return (
            <>
              <ul key={e.id}>
                <li onClick={() => filterFun(e.name)}>{e.name}</li>
              </ul>
            </>
          );
        })}{" "}
      </div>
      {ArrToMapOn.map((e) => e.category)}
    </>
  );
};

export default Header;
