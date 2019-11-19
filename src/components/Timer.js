import React, {useState, useEffect} from 'react';
import "../scss/Timer.scss"

function Timer() {


    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        let timeout = setInterval(()=>{setSecondsLeft(prevState => {
            const secondsLeft = prevState - 1;
            if (secondsLeft <= 0) {
                clearInterval(timeout);
            }
            return secondsLeft;
        })}, 1000);
    }, []);
    console.log(secondsLeft)


    return (
        <div className="timer">
            <h3 className="timer__info">Do rozpoczęcia quizu pozostało:</h3>
            <p className="timer__seconds-left">{secondsLeft} s</p>
        </div>
    );
}

export default Timer;