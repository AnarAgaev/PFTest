import React from "react";
import renderElementList from "../../utils/render-element-list";

import SelectItem from "../select-item";
import "./select.scss";

const Select = ({ list, placeholder, actionFunc, value }) => {
  const dataList = renderElementList(list, SelectItem, actionFunc);

  return (
    <div className="select">
      <input type="text"
        placeholder={ placeholder }
        value={ value }
        readOnly />
      <ul className="select__data-list">
        { dataList }
      </ul>
    </div>
  );
};

export default Select;