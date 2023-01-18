import React from "react";

const FilterBy = ({ filterAction, name }) => {
  return (
    <>
      <ul>
        <li onClick={(e) => filterAction(name)}>{name}</li>
      </ul>
    </>
  );
};

export default FilterBy;
