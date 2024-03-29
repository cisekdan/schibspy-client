import React, { useContext, useEffect, useState } from "react";
import "../../scss/Quiz.scss";
import Answers from "./Answers";
import { QuizContainer } from "../../QuizContainer";
import Header from "./Header";
import Video from './Video';
import YouTube from 'react-youtube';

const videoOptions = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

const Quiz = () => {
  const {question, questionNumber, showAlert, showSlasher, youTubeId} = useContext(QuizContainer.QuizContext);
  const hideQuestionPanel = questionNumber === 0 || question.status === "hidden";
  const {seconds_left: secondsLeft, title} = question;
  const [player, setPlayer] = useState(null);

  const _onReady = (event) => {
    setPlayer(event.target);
    event.target.playVideo();
    event.target.mute();
  };

  const _onEnd = (event) => {
    event.target.stopVideo();
  };

    useEffect(() => {
        if (!player) {
            return;
        }
        if(showSlasher) {
            player.pauseVideo();
            return;
        }
        player.playVideo();
    }, [showSlasher]);

  return (
      <div className="quiz">
        <div className="video-background">
        <div className="video-foreground">
        <YouTube
          videoId={"aXniQ8uKDCM"}
          opts={videoOptions}
          className="video-iframe"
          onReady={_onReady}
          onEnd={_onEnd}
        />
        </div>
        </div>
        {/*<div className="quiz__background">*/}
        {/*  <Video />*/}
        {/*</div>*/}
        {showAlert &&<div className="quiz__overlay">
           <div className="quiz__overlay__alert">Możesz tylko oglądać grę</div>
        </div>}
        {showSlasher &&<div className="quiz__overlay">
          <div className="quiz__overlay__slasher">
            <video
                autoPlay
                muted
                playsinline
                preload="true"
                src="/kosior.mp4"
            /></div>
        </div>}
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

