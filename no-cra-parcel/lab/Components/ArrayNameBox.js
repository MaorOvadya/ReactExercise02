import React from "react";

function ArrayNameBox({ ArrayBoxName }) {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${ArrayBoxName.toLowerCase()}`}></i>
      </div>
      <span>{ArrayBoxName}</span>
    </div>
  );
}

export default ArrayNameBox;
