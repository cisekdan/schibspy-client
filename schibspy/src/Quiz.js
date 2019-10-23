import React, { useContext } from "react";
import "./Quiz.scss";
import Answers from "./Answers";
import { QuizContainer } from "./QuizContainer";
import YouTube from 'react-youtube';

function Quiz () {

  const {secondsLeft, answers, title, questionNumber, youTubeId} = useContext(QuizContainer.QuizContext);
  const hideOverlay = questionNumber === 0;
  const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0
    }
  };
  const _onReady = (event) => {
    event.target.playVideo();
  };

  const _onEnd = (event) => {
    event.target.stopVideo();
  };


  return (
    <React.Fragment>
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
      {!hideOverlay &&
      <div className="quiz">
        <h3 className="quiz__question-number">{questionNumber}/12</h3>
        <div className={`quiz__timer ${secondsLeft <= 3 ? "quiz__timer--ending" : ""}`}><p>{secondsLeft}</p></div>
        <div className="quiz__question-panel">
          <h3 className="quiz__question-panel__title">
            {title}
          </h3>{<Answers answers={answers}
                         secondsLeft={secondsLeft} />}
        </div>
      </div>
      }
    </React.Fragment>
  );
}

export default Quiz;
