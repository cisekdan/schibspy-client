import React, {useContext} from 'react';
import {QuizContainer} from '../../QuizContainer';

const Header = () => {
    const {questionNumber, questionCount, player} = useContext(QuizContainer.QuizContext);
    return (
        <div className="quiz__header">
            <h3 className="quiz__header__question-number">{questionNumber !== 0 ? `${questionNumber}/${questionCount}` : ""}</h3>
            <h3 className="quiz__header__score">Wynik: {player.score}</h3>
            <div className="quiz__header__player-info">
                <h3>{player.name}</h3>
                <img width="50px" height="50px" src={player.avatarUrl}/>
            </div>
        </div>
    )
}

export default Header;