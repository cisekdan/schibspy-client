
import React, { useState, useContext, useEffect } from "react";
import {QuizContainer} from "./QuizContainer";

function Answers () {
    const {question, socket, questionId} = useContext(QuizContainer.QuizContext);
  const [chosenAnswerId, setChosenAnswerId] = useState(undefined);
  const [questionActive, setQuestionActive] = useState(true);
    console.log(question);
  const {answers, seconds_left: secondsLeft, status: questionStatus, correct_answer: correctAnswer} = question;
  console.log(answers)

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
      <p className={`answers__answer 
                        ${correctAnswer === answers[0].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[0].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[0].body}</span> <span>{answers[0].count}</span>
      </p>
      <p className={`answers__answer 
                        ${correctAnswer === answers[1].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[1].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[1].body}</span> <span>{answers[1].count}</span>
      </p>
      <p className={`answers__answer 
                        ${correctAnswer === answers[2].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[2].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[2].body}</span> <span>{answers[2].count}</span>
      </p>
    </div>

  );
}

export default Answers;
