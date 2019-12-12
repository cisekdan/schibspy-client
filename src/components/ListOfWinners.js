import React, { useContext } from "react";
import "../scss/ListOfWinners.scss";
import { QuizContext } from "../QuizContext";

const ListOfWinners = () => {
  const {winnersList} = useContext(QuizContext);

  return (
    <div className="winners">
      <div className="winners__card">
        <div className="winners__header">
          <h2>Ranking</h2>
          <img height="40"
               alt="winners"
               className="winners__medal"
               src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/sports-medal_1f3c5.png" />
        </div>
        <div className="winners__container">
          {winnersList.length > 0 ?
              <table className="winners__table">
                <thead>
                <tr>
                  <td>Drużyna</td>
                  <td>Wynik</td>
                </tr>
                </thead>
                <tbody>
                {winnersList.map((winner, index) => (
                  <tr key={index} className="winners__winner">
                    <td className="winners__winner__player-info">
                      <><img width="30px" height="30px" src={winner.avatarUrl} /><p>{winner.name}</p></>
                    </td>
                    <td className="winners__winner__score">
                      {winner.score}
                    </td>
                  </tr>))}
                </tbody>
                </table>

            : <div>Nikt nie wygrał</div>}
        </div>
      </div>
    </div>
  );
};

export default ListOfWinners;
