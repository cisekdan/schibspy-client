/* eslint react-hooks/rules-of-hooks: 0 */
import React, {useState, useEffect} from "react";
import io from "socket.io-client";

export const QuizContext = React.createContext(
    {
        questionNumber: undefined,
        questionId: undefined,
        status: undefined,
        question: undefined
    }
);
export function initContextValue() {
    const defaultQuestion = {
        answers: [{body: "A",
                    id: 0,
                    answer_count: 124
                },
                {
                    body: "B",
                    id: 1,
                    answer_count: 201
                },
                {
                    body: "D",
                    id: 2,
                    answer_count: 150

        }],
        title: "Pytanie?",
        seconds_left: 10,
        status: "finished",
        correct_answer: 1
    };
    const [registeredUser, setRegisteredUser] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questionId, setQuestionId] = useState(undefined);
    const [quizStatus, setQuizStatus] = useState("started");
    const [youTubeId, setYouTubeId] = useState("OQGtryhPZ3c-");
    const [question, setQuestion] = useState(defaultQuestion);
    const [totalPlayers, setTotalPlayers] = useState(1);
    const [socket, setSocket] = useState(null);
    const [chosenAnswerId, setChosenAnswerId] = useState("");

    useEffect(() => {
        const socket = io('wss://schibspy-server.herokuapp.com');
        setSocket(socket);
        if(socket && registeredUser) {
            socket.emit('join', {name: registeredUser});
            socket.on('quiz', function(msg){
                if(msg.current_question) {
                    setQuestion(msg.current_question);
                }
                setQuestionNumber(parseInt(msg.current_question_position)+1);
                setQuestionId(msg.id);
                setYouTubeId(msg.youtube_id);
                setQuizStatus(msg.status);
            });
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [registeredUser]);

    useEffect(() => {
        if(chosenAnswerId.length) {
            console.log("emitting answer");
            socket.emit('choice', {chosenAnswerId: chosenAnswerId, questionId: questionId});
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [chosenAnswerId]);

    return {
        question,
        questionNumber,
        questionId,
        youTubeId,
        quizStatus,
        registeredUser,
        setRegisteredUser,
        totalPlayers,
        chosenAnswerId,
        setChosenAnswerId
    }
}
