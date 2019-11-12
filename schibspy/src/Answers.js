
import React, { useState, useContext, useEffect } from "react";
import {QuizContainer} from "./QuizContainer";

function Answers () {
    const {question, socket, questionId, totalPlayers} = useContext(QuizContainer.QuizContext);
  const [chosenAnswerId, setChosenAnswerId] = useState(undefined);
  const [questionActive, setQuestionActive] = useState(true);
  const {answers, seconds_left: secondsLeft, status: questionStatus, correct_answer: correctAnswer} = question;

    useEffect(() => {
       setQuestionActive(true)
    }, [questionId]);


  const chooseAnswer = (id) => {
    if (secondsLeft && questionActive) {
      setChosenAnswerId(id);
      socket.emit('choice', {chosenAnswerId: id, questionId: questionId});
      setQuestionActive(false);
    }
  };

  if (questionStatus!=="finished") {
    return (
      <div className="answers">
        <p
          className={`answers__answer ${chosenAnswerId === answers[0].id ? "answers__answer--is-chosen" : ""}`}
          onClick={() => chooseAnswer(answers[0].id)}>
          {answers[0].body}
        </p>
        <p
          className={`answers__answer ${chosenAnswerId === answers[1].id ? "answers__answer--is-chosen" : ""}`}
          onClick={() => chooseAnswer(answers[1].id)}>
          {answers[1].body}
        </p>
        <p
          className={`answers__answer ${chosenAnswerId === answers[2].id ? "answers__answer--is-chosen" : ""}`}
          onClick={() => chooseAnswer(answers[2].id)}>
          {answers[2].body}
        </p>
      </div>
    );
  }
  return (
    <div className="answers">
      <div className="answers__answer">
          <div style={{width: `${answers[0].count/totalPlayers*100}%`}}
               className={`answers__answer__result ${correctAnswer === answers[0].id ? "answers__answer__result--is-correct" : (chosenAnswerId === answers[0].id ? "answers__answer__result--is-wrong" : "")}`}>
            {answers[0].body}
          </div>
            {answers[0].count}
      </div>
        <div className="answers__answer">
            <div style={{width: `${answers[1].count/totalPlayers*100}%`}}
                 className={`answers__answer__result ${correctAnswer === answers[1].id ? "answers__answer__result--is-correct" : (chosenAnswerId === answers[1].id ? "answers__answer__result--is-wrong" : "")}`}>
                {answers[1].body}
            </div>
                {answers[1].count}
        </div>
        <div className="answers__answer">
            <div style={{width: `${answers[2].count/totalPlayers*100}%`}}
                 className={`answers__answer__result ${correctAnswer === answers[2].id ? "answers__answer__result--is-correct" : (chosenAnswerId === answers[2].id ? "answers__answer__result--is-wrong" : "")}`}>
                {answers[2].body}
            </div>
            {answers[2].count}
        </div>
    </div>

  );
}

export default Answers;
