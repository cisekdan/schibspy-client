import React from 'react';
import "./Quiz.scss";
import Answers from "./Answers"

function Quiz() {

    const questionNumber = 2;
    const questionTitle = "Amerykę odkrył Krzysztof:";
    const answers = [{id: 0, value: "Kolumb"}, {id: 1, value: "Ibisz"}, {id: 2, value: "Krawczyk"}];
    const secondsLeft = 1;



    return (
        <div className="quiz">
            <h3 className="quiz__question-number">Pytanie {questionNumber}</h3>
            <div className={`quiz__timer ${secondsLeft <= 3 ? "quiz__timer--ending" : ""}`}><p>{secondsLeft}</p></div>
            <div className="quiz__question-panel">
                <div className="quiz__question-panel__title">
                    {questionTitle}
                </div>
                {<Answers answers={answers} secondsLeft={secondsLeft}/>}
            </div>
        </div>
    );
}

export default Quiz;