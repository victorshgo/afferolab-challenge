import React from "react";
import "./styles.css";

export default props => {
  return (
    <div className="progress">
      <div
        className="bar"
        style={{ width: props.width, background: props.background }}
      ></div>
    </div>
  );
};
