import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="container home">
      <div className="home-introduction">
        <h1>Game Quiz</h1>

        <p>
          Seja bem vindo(a)! A partir de agora, você terá a oportunidade de
          colocar em prática tudo o que já aprendeu. Para isso, será necessário
          superar alguns desafios, tomando a
          <span>
            {" "}
            melhor decisão para você, <br />
            para o cliente e para
            <br /> o negócio
          </span>
          . Está preparado?
        </p>

        <a href="/indicators">
          <button className="primary">Clique aqui para aceitar o desafio!</button>
        </a>
      </div>
    </div>
  );
}
