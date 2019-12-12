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
    src="/loop.mp4"
    style={{
      display: hidden ? 'none' : 'block',
    }}
  />
);