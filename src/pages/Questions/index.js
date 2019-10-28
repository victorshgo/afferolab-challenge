import React, { useState, useEffect } from "react";
import "./styles.css";

/* Components */
import Bar from "../../components/Bar";

/* Utils */
import { quiz } from "../../utils/quiz";

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [loyalty, setLoyalty] = useState(0);
  const [element, setElement] = useState(undefined);
  const [select, setSelect] = useState(undefined);

  const database = quiz();

  let arr = [];
  useEffect(() => {
    while (arr.length < 10) {
      const random = Math.floor(Math.random() * 14);
      if (arr.indexOf(random) === -1) {
        arr.push(random);
      }
    }
    setValues(arr);
    setElement(database.questions[values && values[index]]);
  }, []);

  useEffect(() => {
    setElement(database.questions[values && values[index]]);
  }, [index]);

  return (
    <div className="container questions">
      <Bar satisfaction={satisfaction} loyalty={loyalty} />
      <div className="questions-border">
        <div className="questions-content">
          {element && (
            <>
              <h2>
                {index + 1} - {element && element.pergunta}
              </h2>
              <div className="alternatives">
                <div className="answer">
                  <button
                    onClick={() =>
                      setSelect(
                        element &&
                          element.alternativas &&
                          element.alternativas[0].impacto_indicadores
                      )
                    }
                  >
                    A
                  </button>
                  <span>
                    {element &&
                      element.alternativas &&
                      element.alternativas[0].descricao}
                  </span>
                </div>
                <div className="answer">
                  <button
                    onClick={() =>
                      setSelect(
                        element &&
                          element.alternativas &&
                          element.alternativas[1].impacto_indicadores
                      )
                    }
                  >
                    B
                  </button>
                  <span>
                    {element &&
                      element.alternativas &&
                      element.alternativas[1].descricao}
                  </span>
                </div>
                <div className="answer">
                  <button
                    onClick={() =>
                      setSelect(
                        element &&
                          element.alternativas &&
                          element.alternativas[2].impacto_indicadores
                      )
                    }
                  >
                    C
                  </button>
                  <span>
                    {element &&
                      element.alternativas &&
                      element.alternativas[2].descricao}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <a href={index === 10 ? "/result" : "#"}>
          <button
            className="primary"
            onClick={() => {
              setIndex(index + 1);
              setSatisfaction(satisfaction + select.satisfacao);
              setLoyalty(loyalty + select.fidelizacao);
              localStorage.setItem("satisfaction", satisfaction);
              localStorage.setItem("loyalty", loyalty);
            }}
          >
            CONFIRMAR
          </button>
        </a>
      </div>
    </div>
  );
}
