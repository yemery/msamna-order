import React from "react";
import { filterItems } from "../../Services/Reducers/Items";
import { useSelector, useDispatch } from "react-redux";
import "../../Assets/Styles/Header.css";
import Item from "./Item";
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
                <li onClick={() => filterFun(e.name)} className="catLink">
                  <span>{e.name}</span>{" "}
                </li>
              </ul>
            </>
          );
        })}{" "}
      </div>

      {/* <div className="container card">
        {ArrToMapOn.map((e) => (
          <Item {...e} />
        ))}
      </div> */}
      <div className="container card">
        {ArrToMapOn.map((e) => (
          <Item {...e} />
        ))}
      </div>
    </>
  );
};

export default Header;
