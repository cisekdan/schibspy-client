import React from 'react';
import "./Quiz.scss";
import Answers from "./Answers"

function Quiz() {

    const questionNumber = 2;
    const questionTitle = "Amerykę odkrył Krzysztof:";
    const answers = ["Kolumb", "Ibisz", "Krawczyk"];
    const secondsLeft = 5;



    return (
        <div className="quiz">
            <h3 className="quiz__question-number">Pytanie {questionNumber}</h3>
            <div className="quiz__timer"><p>{secondsLeft}</p></div>
            <div className="quiz__question-panel">
                <div className="quiz__question-panel__title">
                    {questionTitle}
                </div>
                {<Answers answers={answers}/>}
            </div>
        </div>
    );
}

export default Quiz;