import React from "react";
import { connect } from "react-redux";
import "./select-item.scss";

const SelectItem = ({
    val, caption, payload,
    actionFunc, data
  }) => {

  return (
    <li className="select__option"
        onClick={ () => actionFunc(payload, val, data) }>
      { caption }
    </li>
  );
};

const mapStateToProps = ({ data }) => {
  return { data }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionFunc: (actionFunc, role, data) => actionFunc(dispatch, role, data)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectItem);