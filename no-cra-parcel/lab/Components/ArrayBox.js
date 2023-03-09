import React from "react";
import ArrayNameBox from "./ArrayNameBox";

function ArrayBox() {
  const ArrayBoxNames = [
    "Instagram",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "YouTube",
    "Github",
  ];

  return (
    <section>
      <div className="wrapper">
        {ArrayBoxNames.map((ArrayBoxName) => (
          <ArrayNameBox ArrayBoxName={ArrayBoxName} />
        ))}
      </div>
    </section>
  );
}

export default ArrayBox;
