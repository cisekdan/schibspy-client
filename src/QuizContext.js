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
        sendChosenAnswer: ()=>{},
        generateNewAvatar: ()=>{}
    }
);
export function initContextValue() {
    const [registeredUser, setRegisteredUser] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [quizStatus, setQuizStatus] = useState("");
    const [youTubeId, setYouTubeId] = useState("OQGtryhPZ3c-");
    const [question, setQuestion] = useState({});
    const [totalPlayers, setTotalPlayers] = useState(1);
    const [socket, setSocket] = useState(null);
    const [questionCount, setQuestionCount] = useState("10");
    const [player, setPlayer] = useState({});
    const [winnersList, setWinnersList] = useState([]);

    useEffect(() => {
        const socket = io('wss://schibspy-server.herokuapp.com');
        setSocket(socket);
        socket.on('quiz', (msg) => {
            if(msg.current_question) {
                setQuestion(msg.current_question);
            }
            setQuestionNumber(parseInt(msg.current_question_position)+1);
            setYouTubeId(msg.youtube_id);
            setQuizStatus(msg.status);
            setQuestionCount(msg.question_count);
            setPlayer(msg.player);
        });
        socket.on('presence_state', ({count}) => {
            setTotalPlayers(count);
        });
        socket.on('slasher', () => {
            console.log("KOSIOOOOOOOOOOR!!!!!!!!!");
        });
        socket.on('winners_list', (winnersList) => {
            setWinnersList(winnersList.players);
        });
    }, []);

    useEffect(() => {
        if(socket && registeredUser) {
            socket.emit('join', {name: registeredUser});
        }
    }, [registeredUser]);

    const sendChosenAnswer = (answerId) => {
        socket.emit('choice', {chosenAnswerId: answerId, questionId: question.id});
    };

    const generateNewAvatar = () => {
        socket.emit('generateNewAvatar');
    };

    return {
        question,
        player,
        questionNumber,
        youTubeId,
        quizStatus,
        questionCount,
        registeredUser,
        setRegisteredUser,
        totalPlayers,
        sendChosenAnswer,
        generateNewAvatar,
        winnersList
    }
}
