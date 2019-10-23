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
        status: undefined
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
    const [status, setStatus] = useState(undefined);
    const socket = io('http://d3dc8552.ngrok.io');
    socket.emit('join', {name: "User2"});

    useEffect(() => {
        socket.on('quiz', function(msg){
            console.log(msg);
            setAnswers(msg.current_question.answers);
            setTitle(msg.current_question.title);
            setQuestionNumber(parseInt(msg.current_question_position)+1);
            setQuestionId(msg.id);
            setSecondsLeft(msg.current_question.seconds_left);
            setStatus(msg.current_question.status);
        });
    }, []);

    return {
        answers,
        title,
        questionNumber,
        questionId,
        secondsLeft,
        status
    }
}
