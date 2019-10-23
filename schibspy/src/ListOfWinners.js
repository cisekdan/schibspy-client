import React from 'react';
import './ListOfWinners.css';
const ListOfWinners = () => {
  const winners = ["Kolumb", "Ibisz", "Krawczyk", "Jakiśtam", "Nijaki"];

  return(
    <div className="card">
      <img height="50" className="medal" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/sports-medal_1f3c5.png" />
      {winners.map(winner => <div className="winner">{winner}</div>)}
    </div>
  );
};

export default ListOfWinners;
