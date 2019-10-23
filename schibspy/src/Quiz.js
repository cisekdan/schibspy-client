import React, {useContext} from 'react';
import "./Quiz.scss";
import Answers from "./Answers"
import {QuizContainer} from "./QuizContainer";

function Quiz () {

   const {secondsLeft, answers, title, questionNumber} = useContext(QuizContainer.QuizContext);

       return (
           <React.Fragment>
               <div className="video-container">
                   <video className="video" autoPlay>
                       <source src="./pytanie_01.mp4" type="video/mp4"/>
                   </video>
               </div>
           <div className="quiz">
               <h3 className="quiz__question-number">{questionNumber}/12</h3>
               <div className={`quiz__timer ${secondsLeft <= 3 ? "quiz__timer--ending" : ""}`}><p>{secondsLeft}</p></div>
               <div className="quiz__question-panel">
                   <h3 className="quiz__question-panel__title">
                       {title}
                   </h3>
                   {<Answers answers={answers} secondsLeft={secondsLeft}/>}
               </div>
           </div>
           </React.Fragment>
       );
}

export default Quiz;
