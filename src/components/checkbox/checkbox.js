import React from "react";
import { connect } from "react-redux";
import { filterItemsByArchive } from "../../actions";
import "./checkbox.scss";

const Checkbox = ({ filterArchive, filterItemsByArchive }) => {
  return (
    <div className="checkbox">
      <input type="checkbox"
        className="checkbox__controller"
        id="checkbox"
        checked={ filterArchive }
        onChange={ () => filterItemsByArchive(filterArchive) } />
      <label htmlFor="checkbox">в архиве</label>
    </div>
  );
};

const mapStateToProps = ({ filterArchive }) => {
  return { filterArchive };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterItemsByArchive: (filterState) => filterItemsByArchive(dispatch, filterState)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);