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
        answers: [{body       : "A",
                    id          : 0,
                    count: 124
                },
                {
                    body: "B",
                    id   : 1,
                    count: 201
                },
                {
                    body       : "D",
                    id          : 2,
                    count: 150

        }],
        title: "Pytanie?",
        seconds_left: 10,
        status: "active",
        correct_answer: 1
    };
    const [userRegistered, setUserRegistered] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questionId, setQuestionId] = useState(undefined);
    const [quizStatus, setQuizStatus] = useState("started");
    const [youTubeId, setYouTubeId] = useState("OQGtryhPZ3c");
    const [question, setQuestion] = useState(defaultQuestion);
    let socket = null;

    useEffect(() => {
        socket = io('http://d3dc8552.ngrok.io');
        if(socket) {
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
    }, []);

    return {
        socket,
        question,
        questionNumber,
        questionId,
        youTubeId,
        quizStatus,
        userRegistered,
        setUserRegistered
    }
}
