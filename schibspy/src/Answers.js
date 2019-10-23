import React, {useState} from 'react';

function Answers({answers}) {


    let correctAnswerId = 0;

    const [showAnswers, setShowAnswers] = useState(false);
    const [chosenAnswerId, setChosenAnswerId] = useState(undefined);

    const chooseAnswer = (e) => {
        if(!chosenAnswerId) {
            setChosenAnswerId(e.target.dataset.id);
            console.log(e.target.dataset.id);
            setTimeout(()=>setShowAnswers(true), 5000);
        }
    };

    if(!showAnswers) {

        return (
            <div className="anwers">
                <p
                    className={`answers__answer ${chosenAnswerId===0? "answers__answer--is-chosen" : ""}`}
                    onClick={chooseAnswer}
                    data-id="0">
                        {answers[0].value}
                </p>
                <p
                    className={`answers__answer ${chosenAnswerId===1 ? "answers__answer--is-chosen" : ""}`}
                    onClick={chooseAnswer}
                    data-id="1">
                    {answers[1].value}
                </p>
                <p
                    className={`answers__answer ${chosenAnswerId===2  ? "answers__answer--is-chosen" : ""}`}
                    onClick={chooseAnswer}
                    data-id="2">
                    {answers[2].value}
                </p>
            </div>
        )
    }
    return (
                <div className="anwers">
                    <p className={`answers__answer 
                        ${correctAnswerId ===0 ? "answers__answer--is-correct" : (chosenAnswerId ===0 ? "answers__answer--is-wrong" : "")}`}
                       data-id="0">
                      <span>{answers[0].value}</span>
                      <span>{answers[0].totalCounter}</span>
                    </p>
                    <p className={`answers__answer 
                        ${correctAnswerId ===1 ? "answers__answer--is-correct" : (chosenAnswerId === 1 ? "answers__answer--is-wrong" : "")}`}
                       data-id="1">
                      <span>{answers[1].value}</span>
                      <span>{answers[1].totalCounter}</span>
                    </p>
                    <p className={`answers__answer 
                        ${correctAnswerId ===2 ? "answers__answer--is-correct" : (chosenAnswerId ===2 ? "answers__answer--is-wrong" : "")}`}
                       data-id="2">
                      <span>{answers[2].value}</span>
                      <span>{answers[2].totalCounter}</span>
                    </p>
                </div>

    );
}

export default Answers;
