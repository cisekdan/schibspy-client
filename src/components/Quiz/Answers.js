import React, {useContext} from "react";
import {QuizContainer} from "../../QuizContainer";

function Answers() {
    const {question, totalPlayers, chosenAnswerId, setChosenAnswerId, player} = useContext(QuizContainer.QuizContext);
    const {answers, seconds_left: secondsLeft, status: questionStatus, correct_answer: correctAnswer} = question;

    const chooseAnswer = (id) => {
        if (secondsLeft && chosenAnswerId.length === 0 && player.mode === "player") {
            setChosenAnswerId(id);
        }
    };

    const setBarWidth = (answer) => {
        return (answer.answer_count / totalPlayers) * 100
    };

    const displayAvatars = (answer) => {
        if(!answer.players) {
            return null;
        }
        return answer.players.map(player => <img className="answers__answer__avatar" src={player.avatarUrl}/>)
    };

    const setAnswerColors = (answerId) => {
        if (correctAnswer === answerId) return "answers__answer__inner--is-correct";
        if (chosenAnswerId === answerId) return "answers__answer__inner--is-wrong";
        return "answers__answer__inner--is-chosen"
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
                <div style={{width: `${setBarWidth(answers[0])}%`}}
                     className={`answers__answer__inner ${setAnswerColors(answers[0].id)}`}>
                </div>
                <p className="answers__answer__text"> {answers[0].body}</p>
                <p className="answers__answer__count">{displayAvatars(answers[0])}</p>
            </div>
            <div className="answers__answer">
                <div style={{width: `${setBarWidth(answers[1])}%`}}
                     className={`answers__answer__inner ${setAnswerColors(answers[1].id)}`}>
                </div>
                <p className="answers__answer__text">{answers[1].body}</p>
                <p className="answers__answer__count">{displayAvatars(answers[1])}</p>
            </div>
            <div className="answers__answer">
                <div style={{width: `${setBarWidth(answers[2])}%`}}
                     className={`answers__answer__inner ${setAnswerColors(answers[0].id)}`}>
                </div>
                <p className="answers__answer__text"> {answers[2].body}</p>
                <p className="answers__answer__count">{displayAvatars(answers[2])}</p>
            </div>
        </div>

    );
}

export default Answers;
