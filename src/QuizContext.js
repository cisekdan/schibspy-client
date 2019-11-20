/* eslint react-hooks/rules-of-hooks: 0 */
import React, {useState, useEffect} from "react";
import io from "socket.io-client";

export const QuizContext = React.createContext(
    {
        question: {},
        questionNumber: undefined,
        questionId: undefined,
        youTubeId: undefined,
        quizStatus: undefined,
        registeredUser: undefined,
        setRegisteredUser: ()=>{},
        totalPlayers: undefined,
        chosenAnswerId: undefined,
        setChosenAnswerId: ()=>{}
    }
);
export function initContextValue() {
    const defaultQuestion = {
        id: "1001",
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
    const [quizStatus, setQuizStatus] = useState("scheduled");
    const [youTubeId, setYouTubeId] = useState("OQGtryhPZ3c-");
    const [question, setQuestion] = useState(defaultQuestion);
    const [totalPlayers, setTotalPlayers] = useState(1);
    const [socket, setSocket] = useState(null);
    const [chosenAnswerId, setChosenAnswerId] = useState("");

    useEffect(()=>{
        const socket = io('wss://schibspy-server.herokuapp.com');
        setSocket(socket);
        socket.on('quiz', function(msg){
            if(msg.current_question) {
                setQuestion(msg.current_question);
            }
            setQuestionNumber(parseInt(msg.current_question_position)+1);
            setYouTubeId(msg.youtube_id);
            setQuizStatus(msg.status);
        });
        socket.on('presence_state', ({count}) => {
            setTotalPlayers(count);
        })
    }, []);

    useEffect(() => {
        if(socket && registeredUser) {
            socket.emit('join', {name: registeredUser});
        }
    }, [registeredUser]);

    useEffect(() => {
        if(chosenAnswerId.length) {
            socket.emit('choice', {chosenAnswerId: chosenAnswerId, questionId: question.id});
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [chosenAnswerId]);

    useEffect(() => {
        setChosenAnswerId("");
    }, [question.id]);

    return {
        question,
        questionNumber,
        youTubeId,
        quizStatus,
        registeredUser,
        setRegisteredUser,
        totalPlayers,
        chosenAnswerId,
        setChosenAnswerId
    }
}
