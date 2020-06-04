import React from "react";
import "./checkbox.scss";

const Checkbox = () => {
  return (
    <div className="checkbox">
      <input type="checkbox" className="checkbox__controller" id="happy" />
      <label htmlFor="happy">в архиве</label>
    </div>
  );
};

export default Checkbox;