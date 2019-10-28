import React from "react";
import "./styles.css";

/* Components */
import Progress from "../../components/Progress";

/* Images */
const image = require("../../assets/arte_indicadores.png");

export default function Result() {
  return (
    <div className="container result">
      <div className="background">
        <div className="result-border">
          <div className="result-content">
            <div className="title">
              <img src={image} />
              <h2>
                Veja sua <i>perfomance</i> em cada indicador:
              </h2>
            </div>
            <div className="progress-bar">
              <span>
                <b>Satisfação do Cliente</b>
              </span>
              <Progress
                width={parseInt(localStorage.getItem("satisfaction"))}
                background="#3469B3"
              />
            </div>
            <br />
            <div className="progress-bar">
              <span>
                <b>Fidelização</b>
              </span>
              <Progress
                width={parseInt(localStorage.getItem("loyalty"))}
                background="#68469c"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
