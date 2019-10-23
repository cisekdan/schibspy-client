import React, {useState} from 'react';

function Answers({answers, secondsLeft}) {

    let correctAnswerId = 0;
    const [showAnswers, setShowAnswers] = useState(false);
    const [chosenAnswerId, setChosenAnswerId] = useState(undefined);

    const chooseAnswer = (id) => {
        if (!chosenAnswerId && secondsLeft) {
            setChosenAnswerId(id);
            setTimeout(() => setShowAnswers(true), 2000);
        }
    };

    if (!showAnswers) {

        return (
            <div className="anwers">
                <p
                    className={`answers__answer ${chosenAnswerId === answers[0].id ? "answers__answer--is-chosen" : ""}`}
                    onClick={() => chooseAnswer(answers[0].id)}>
                    {answers[0].value}
                </p>
                <p
                    className={`answers__answer ${chosenAnswerId === answers[1].id ? "answers__answer--is-chosen" : ""}`}
                    onClick={() => chooseAnswer(answers[1].id)}>
                    {answers[1].value}
                </p>
                <p
                    className={`answers__answer ${chosenAnswerId === answers[2].id ? "answers__answer--is-chosen" : ""}`}
                    onClick={() => chooseAnswer(answers[2].id)}>
                    {answers[2].value}
                </p>
            </div>
        )
    }
    return (
        <div className="anwers">
            <p className={`answers__answer 
                        ${correctAnswerId === answers[0].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[0].id ? "answers__answer--is-wrong" : "")}`}>
                {answers[0].value}
            </p>
            <p className={`answers__answer 
                        ${correctAnswerId === answers[1].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[1].id ? "answers__answer--is-wrong" : "")}`}>
                {answers[1].value}
            </p>
            <p className={`answers__answer 
                        ${correctAnswerId === answers[2].id ? "answers__answer--is-correct" : (chosenAnswerId === answers[2].id ? "answers__answer--is-wrong" : "")}`}>
                {answers[2].value}
            </p>
        </div>

    );
}

export default Answers;