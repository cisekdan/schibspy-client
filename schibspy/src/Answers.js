
import React, { useState, useContext } from "react";
import io from "socket.io-client";
import {QuizContainer} from "./QuizContainer";

function Answers ({answers, secondsLeft}) {
    const {questionId, questionStatus, correctAnswer} = useContext(QuizContainer.QuizContext);
  const [chosenAnswerId, setChosenAnswerId] = useState(undefined);


  const chooseAnswer = (id) => {
    if (secondsLeft) {
      setChosenAnswerId(id);
      const socket = io('http://d3dc8552.ngrok.io');
      socket.emit('choice', {chosenAnswerId: id, questionId: questionId});
    }
  };
  if (questionStatus!=="finished") {
    return (
      <div className="anwers">
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
    <div className="anwers">
      <p className={`answers__answer 
                        ${correctAnswer === answers[0].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[0].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[0].body}</span> <span>{answers[0].answer_count}</span>
      </p>
      <p className={`answers__answer 
                        ${correctAnswer === answers[1].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[1].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[1].body}</span> <span>{answers[1].answer_count}</span>
      </p>
      <p className={`answers__answer 
                        ${correctAnswer === answers[2].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[2].id ? "answers__answer--is-wrong" : "")}`}>
        <span>{answers[2].body}</span> <span>{answers[2].answer_count}</span>
      </p>
    </div>

  );
}

export default Answers;
