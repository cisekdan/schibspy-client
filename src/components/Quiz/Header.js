import React, {useContext} from 'react';
import {QuizContainer} from '../../QuizContainer';

const Header = () => {
    const {questionNumber, questionCount, player} = useContext(QuizContainer.QuizContext);
    return (
        <div className="quiz__header">
            {questionNumber !== 0 &&
            <h3 className="quiz__header__question-number">{questionNumber}/{questionCount}</h3>}
            {player.mode === "player" &&
            <>
                <h3 className="quiz__header__score">Wynik: {player.score}</h3>
                <h3 className="quiz__header__player-name">{player.name} <img alt="Player avatat" width="45px" height="45px" src={player.avatarUrl}/></h3>
            </>}
        </div>
    )
}

export default Header;