import React, { useContext, useMemo } from 'react';
import {QuizContainer} from '../../QuizContainer';

export default ({
  hidden,
  url,
}) => {
  const { socket } = useContext(QuizContainer.QuizContext);
  const emitLoadedInformation = () => socket.emit('videoLoaded', { url });

  return (
    <video
      autoPlay
      muted
      playsInline
      preload="auto"
      loop
      src={url}
      style={{
        display: hidden ? 'none' : 'block',
      }}
      onLoadedData={emitLoadedInformation}
    />
  );
}