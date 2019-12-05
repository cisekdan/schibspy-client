import React, { useContext } from "react";
import "../../scss/Quiz.scss";
import Answers from "./Answers";
import { QuizContainer } from "../../QuizContainer";
import YouTube from 'react-youtube';
import Header from "./Header";

const videoOptions = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

const Quiz = () => {

  const {question, questionNumber, youTubeId} = useContext(QuizContainer.QuizContext);
  const hideQuestionPanel = questionNumber === 0 || question.status === "hidden";
  const {seconds_left: secondsLeft, title} = question;
  
  const _onReady = (event) => {
    event.target.playVideo();
  };

  const _onEnd = (event) => {
    event.target.stopVideo();
  };

  return (
      <div className="quiz">
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
                videoId={youTubeId}
                opts={videoOptions}
                className="video-iframe"
                onReady={_onReady}
                onEnd={_onEnd}
            />
          </div>
        </div>
        <Header/>
        {!hideQuestionPanel &&
          <div className="quiz__question-panel">
            {secondsLeft ?
                <div className={`quiz__question-panel__timer ${secondsLeft <= 3 ?
                "quiz__question-panel__timer--ending" : ""}`}>{secondsLeft}</div>
            :
            <div className="quiz__question-panel__timer quiz__question-panel__timer--ended">Czas minął</div>}
            <h3 className="quiz__question-panel__title">{title}</h3>
            <Answers/>
          </div>}
      </div>
  );
}

export default Quiz;
