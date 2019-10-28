import React from "react";
import "./styles.css";

/* Components */
import Progress from "../Progress";

/* Images */
const image = require("../../assets/arte_indicadores.png");

export default (props) => {
  return (
    <div className="top-bar">
      <img src={image} />
      <div className="box">
        <div className="progress-bar">
          <span>Satisfação do Cliente</span>
          <Progress width={props.satisfaction} background="#3469B3" />
        </div>
        <div className="progress-bar">
          <span>Fidelização</span>
          <Progress width={props.loyalty} background="#68469c" />
        </div>
      </div>
    </div>
  );
};
