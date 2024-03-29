import React, {useContext} from "react";
import {QuizContainer} from "../../QuizContainer";

function Answers() {
    const {question, sendChosenAnswer, player, setShowAlert} = useContext(QuizContainer.QuizContext);
    const {answers, seconds_left: secondsLeft, status: questionStatus, correct_answer: correctAnswer, total_responses: totalResponses} = question;
    const playersAnswer = player.answers ? player.answers[question.id] : null;

    const chooseAnswer = (id) => {
        if(player.mode !== "player"){
            setShowAlert(true);
            setTimeout(()=>setShowAlert(false), 2000);
            //switchToFullScreen();
            return
        }
        //switchToFullScreen();
        if (secondsLeft && !playersAnswer) {
            sendChosenAnswer(id)
        }
    };

    const setBarWidth = (answer) => {
        return (answer.answer_count / totalResponses) * 100
    };

    const displayAvatars = (answer) => {
        if(!answer.answer_count) {
            return null;
        }
        if(window.screen.width > 500 || answer.players.length <= 3) {
            return answer.players.map(player => <img alt="player avatar" key={player.id} width={"30px"} height={"30px"} src={player.avatarUrl}/>)

        }
        return <>
                <div className="answers__answer__count__remainder">+{answer.answer_count-3}</div>
                {answer.players.splice(0, 3).map(player => <img alt="player avatar" key={player.id} width={"30px"} height={"30px"} src={player.avatarUrl}/>)}
              </>
    };

    const setAnswerColors = (answerId) => {
        if (correctAnswer === answerId) return "answers__answer__inner--is-correct";
        if (playersAnswer === answerId) return "answers__answer__inner--is-wrong";
        return "answers__answer__inner--is-chosen"
    };

    if (questionStatus !== "finished") {
        return (
            <div className="answers">
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${playersAnswer === answers[0].id ? "answers__answer__inner--is-chosen" : ""}`}
                        onClick={() => chooseAnswer(answers[0].id)}>
                        {answers[0].body}
                    </div>
                </div>
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${playersAnswer === answers[1].id ? "answers__answer__inner--is-chosen" : ""}`}
                        onClick={() => chooseAnswer(answers[1].id)}>
                        {answers[1].body}
                    </div>
                </div>
                <div className="answers__answer">
                    <div
                        className={`answers__answer__inner ${playersAnswer === answers[2].id ? "answers__answer__inner--is-chosen" : ""}`}
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
                <div className="answers__answer__count">{displayAvatars(answers[0])}</div>
            </div>
            <div className="answers__answer">
                <div style={{width: `${setBarWidth(answers[1])}%`}}
                     className={`answers__answer__inner ${setAnswerColors(answers[1].id)}`}>
                </div>
                <p className="answers__answer__text">{answers[1].body}</p>
                <div className="answers__answer__count">{displayAvatars(answers[1])}</div>
            </div>
            <div className="answers__answer">
                <div style={{width: `${setBarWidth(answers[2])}%`}}
                     className={`answers__answer__inner ${setAnswerColors(answers[2].id)}`}>
                </div>
                <p className="answers__answer__text"> {answers[2].body}</p>
                <div className="answers__answer__count">{displayAvatars(answers[2])}</div>
            </div>
        </div>
    );
}

export default Answers;
