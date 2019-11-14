import React from "react";
import "./ListOfWinners.css";

const ListOfWinners = () => {
  const winners = ["Pawel"];

  return (
    <div className="winners">
      <div className="winners__card">
        <div className="winners__img-container">
          <img height="40"
               alt="winners"
               className="winners__medal"
               src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/sports-medal_1f3c5.png" />
        </div>
        <div className="winners__container">
          {winners.map((winner, index) => <div key={index}
                                               className="winners__winner">{winner}</div>)}
        </div>
      </div>
    </div>
  );
};

export default ListOfWinners;
