/* eslint react-hooks/rules-of-hooks: 0 */
import React, {useState, useEffect} from "react";
import io from "socket.io-client";

export const QuizContext = React.createContext(
    {
        secondsLeft: undefined,
        answers: [],
        title: "",
        questionNumber: undefined,
        questionId: undefined,
        status: undefined,
        correctAnswer: null
    }
);
export function initContextValue() {
    const [answers, setAnswers] = useState([
        {
            value       : "",
            id          : 0,
            totalCounter: 124
        },
        {
            value: "",
            id   : 1,
            totalCounter: 201
        },
        {
            value       : "",
            id          : 2,
            totalCounter: 150
        }]);
    const [title, setTitle] = useState("");
    const [questionNumber, setQuestionNumber] = useState(undefined);
    const [questionId, setQuestionId] = useState(undefined);
    const [secondsLeft, setSecondsLeft] = useState(undefined);
    const [questionStatus, setQuestionStatus] = useState(undefined);
    const [quizStatus, setQuizStatus] = useState(undefined);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [youTubeId, setYouTubeId] = useState(undefined);
    let socket = null;

    useEffect(() => {
        socket = io('http://d3dc8552.ngrok.io');
        socket.emit('join', {name: "Pawel"});
        socket.on('quiz', function(msg){
            console.log(msg);
            if(msg.current_question) {
                setAnswers(msg.current_question.answers);
                setTitle(msg.current_question.title);
                setSecondsLeft(msg.current_question.seconds_left);
                setQuestionStatus(msg.current_question.status);
                setCorrectAnswer(msg.current_question.correct_answer);
            }
            setQuestionNumber(parseInt(msg.current_question_position)+1);
            setQuestionId(msg.id);
            setYouTubeId(msg.youtube_id);
            setQuizStatus(msg.status);
        });
    }, []);

    return {
        socket,
        answers,
        title,
        questionNumber,
        questionId,
        secondsLeft,
        questionStatus,
        correctAnswer,
        youTubeId,
        quizStatus
    }
}
