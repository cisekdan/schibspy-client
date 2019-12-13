import React, { useContext } from 'react';
import "./scss/App.scss";
import Display from "./Display";
import {QuizContainer} from './QuizContainer';
import Video from './components/Video/Video';

const getNextVideoUrl = (videoUrl, videos) => {
  if (!videos) {
    return null;
  }
  if (!videoUrl) {
    return videos[0];
  }
  const index = videos.findIndex(url => url === videoUrl);
  if (index === videos.length - 1) {
    return null;
  }
  return videos[index + 1];
};

function App() {
  const { screen: { height: windowHeight } } = window;
  const ratio = 0.5625;
  const { videoUrl, quizVideos } = useContext(QuizContainer.QuizContext);
  const nextVideoUrl = getNextVideoUrl(videoUrl, quizVideos);

  return (
      <div className="App">
          <div className="background"/>
          <div className="container" style={{maxWidth: ratio * windowHeight, height: windowHeight}}>
            <Display/>
        </div>
        <Video
          hidden
          url={nextVideoUrl}
        />
      </div>
  );
}

export default App;
