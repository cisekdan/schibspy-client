import React from 'react';
import "./Timer.scss"

function Timer() {

    const secondsLeft = 10;

    return (
        <div className="timer">
            <h3 className="timer__info">Do rozpoczęcia quizu pozostało:</h3>
            <p className="timer__seconds-left">{secondsLeft} s</p>
        </div>
    );
}

export default Timer;