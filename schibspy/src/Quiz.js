import React from 'react';
import "./Quiz.scss"

function Quiz() {

    const questionNumber = 2;
    const questionTitle = "Amerykę odkrył Krzysztof:";
    const answers = ["Kolumb", "Ibisz", "Krawczyk"];
    const secondsLeft = 5;

    return (
        <div className="quiz">
            <h3 className="quiz__question-number">Pytanie {questionNumber}</h3>
            <p className="quiz__timer">{secondsLeft}</p>
            <div className="quiz__question-panel">
                <div className="quiz__question-panel__title">
                    {questionTitle}
                </div>
                <div className="quiz__question-panel__anwers">
                    <p className="quiz__question-panel__answers__answer">{answers[0]}</p>
                    <p className="quiz__question-panel__answers__answer">{answers[1]}</p>
                    <p className="quiz__question-panel__answers__answer">{answers[2]}</p>
                </div>
            </div>
        </div>
    );
}

export default Quiz;