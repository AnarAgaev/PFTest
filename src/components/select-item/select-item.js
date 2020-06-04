import React from "react";
import "./select-item.scss";

const SelectItem = ({ val, caption }) => {
  return (
    <li className="select__option" data-value={ val }>
      { caption }
    </li>
  );
};

export default SelectItem;