import React from "react";
import "./styles.css";

/* Components */
import Bar from "../../components/Bar";
import Progress from "../../components/Progress";

/* Images */
const image = require("../../assets/arte_indicadores.png");

export default function Indicators() {
  return (
    <div className="container indicators">
      <Bar satisfaction={10} loyalty={10} />
      <div className="indicators-border">
        <div className="indicators-content">
          <div className="itens">
            <p>
              Ao lado, estão os dois indicadores do <i>game</i>. Quando você
              tomar suas decisões, eles poderão aumentar ou diminuir. Por isso,
              acompanhe-os para saber sua evolução no jogo.
            </p>
            <p>
              Você iniciará o <i>game</i> com os indicadores zerados. No
              decorrer do jogo, eles serão impactados por todas as suas
              decisões. Então, fique atento!
            </p>
            <p>
              Antes de resolver cada situação, reflita como suas escolhas podem
              influenciar os indicadores.
            </p>
          </div>
          <div className="itens">
            <img src={image} />
            <div className="indicators-box">
              <div className="progress-bar">
                <span>Satisfação do Cliente</span>
                <Progress width={40} background="#3469B3" />
              </div>
              <div className="progress-bar">
                <span>Fidelização</span>
                <Progress width={50} background="#68469c" />
              </div>
            </div>
          </div>
        </div>
        <a href="/questions">
          <button className="primary">CONTINUAR</button>
        </a>
      </div>
    </div>
  );
}
