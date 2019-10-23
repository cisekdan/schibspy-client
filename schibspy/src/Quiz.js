import React from "react";
import "./Quiz.scss";
import Answers from "./Answers";

function Quiz () {

  const questionNumber = 2;
  const questionTitle = "Amerykę odkrył Krzysztof:";
  const answers = [
    {
      value       : "Kolumb",
      id          : 1,
      totalCounter: 124
    },
    {
      value: "Ibisz",
      id   : 2,
      totalCounter: 201
    },
    {
      value       : "Krawczyk",
      id          : 3,
      totalCounter: 150
    }];
  const secondsLeft = 2;

  return (
    <div className="quiz">
      <h3 className="quiz__question-number">Pytanie {questionNumber}</h3>
      <div className="quiz__timer"><p>{secondsLeft}</p></div>
      <div className="quiz__question-panel">
        <div className="quiz__question-panel__title">
          {questionTitle}
        </div>
        {<Answers answers={answers} />}
      </div>
    </div>
  );
}

export default Quiz;
