import React, {useContext} from 'react';
import "./Quiz.scss";
import Answers from "./Answers"
import {QuizContainer} from "./QuizContainer";

function Quiz () {

  const questionNumber = 2;
  const questionTitle = "Amerykę odkrył Krzysztof:";
   const {secondsLeft} = useContext(QuizContainer.QuizContext);
  const answers = [
    {
      value       : "Kolumb",
      id          : 0,
      totalCounter: 124
    },
    {
      value: "Ibisz",
      id   : 1,
      totalCounter: 201
    },
    {
      value       : "Krawczyk",
      id          : 2,
      totalCounter: 150
    }];
  const secondsLeft = 2;

    return (
        <div className="quiz">
            <h3 className="quiz__question-number">Pytanie {questionNumber}</h3>
            <div className={`quiz__timer ${secondsLeft <= 3 ? "quiz__timer--ending" : ""}`}><p>{secondsLeft}</p></div>
            <div className="quiz__question-panel">
                <h3 className="quiz__question-panel__title">
                    {questionTitle}
                </h3>
                {<Answers answers={answers} secondsLeft={secondsLeft}/>}
            </div>
        </div>
    );
}

export default Quiz;
