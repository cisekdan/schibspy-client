import React from 'react';

export default ({
                  hidden,
                }) => (
  <video
    autoPlay
    muted
    playsInline
    preLoad
    loop
    src="/quiz.mp4"
    style={{
      display: hidden ? 'none' : 'block',
    }}
  />
);