import React, {useContext, useEffect} from "react";
import {QuizContainer} from "./QuizContainer";

function Answers() {
    const {question, questionId, totalPlayers, chosenAnswerId, setChosenAnswerId} = useContext(QuizContainer.QuizContext);
    const {answers, seconds_left: secondsLeft, status: questionStatus, correct_answer: correctAnswer} = question;

    useEffect(() => {
        console.log("new question")
        setChosenAnswerId("")
    }, [questionId]);

    const chooseAnswer = (id) => {
        if (chosenAnswerId.length === 0) {
            setChosenAnswerId(id);
            console.log(id);

        }
    };

    if (questionStatus !== "finished") {
        return (
            <div className="answers">
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${chosenAnswerId === answers[0].id ? "answers__answer__inner--is-chosen" : ""}`}
                        onClick={() => chooseAnswer(answers[0].id)}>
                        {answers[0].body}
                    </div>
                </div>
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${chosenAnswerId === answers[1].id ? "answers__answer__inner--is-chosen" : ""}`}
                        onClick={() => chooseAnswer(answers[1].id)}>
                        {answers[1].body}
                    </div>
                </div>
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${chosenAnswerId === answers[2].id ? "answers__answer__inner--is-chosen" : ""}`}
                        onClick={() => chooseAnswer(answers[2].id)}>
                        {answers[2].body}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="answers">
            <div className="answers__answer">
                <div style={{width: `${answers[0].answer_count / totalPlayers * 100}%`}}
                     className={`answers__answer__inner ${correctAnswer === answers[0].id ? "answers__answer__inner--is-correct" : (chosenAnswerId === answers[0].id ? "answers__answer__inner--is-wrong" : "answers__answer__inner--is-chosen")}`}>

                </div>
                <p className="answers__answer__text"> {answers[0].body}</p>
                <p className="answers__answer__count">{answers[0].answer_count}</p>
            </div>
            <div className="answers__answer">
                <div style={{width: `${answers[1].answer_count / totalPlayers * 100}%`}}
                     className={`answers__answer__inner ${correctAnswer === answers[1].id ? "answers__answer__inner--is-correct" : (chosenAnswerId === answers[1].id ? "answers__answer__inner--is-wrong" : "answers__answer__inner--is-chosen")}`}>
                </div>
                <p className="answers__answer__text">{answers[1].body}</p>
                <p className="answers__answer__count">{answers[1].answer_count}</p>
            </div>
            <div className="answers__answer">
                <div style={{width: `${answers[2].answer_count / totalPlayers * 100}%`}}
                     className={`answers__answer__inner ${correctAnswer === answers[2].id ? "answers__answer__inner--is-correct" : (chosenAnswerId === answers[2].id ? "answers__answer__inner--is-wrong" : "answers__answer__inner--is-chosen")}`}>
                </div>
                <p className="answers__answer__text"> {answers[2].body}</p>
                <p className="answers__answer__count">{answers[2].answer_count}</p>
            </div>
        </div>

    );
}

export default Answers;
