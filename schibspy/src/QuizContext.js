import React from "react";
import io from "socket.io-client";

export const QuizContext = React.createContext(
    {
        secondsLeft: undefined
    }
);

export function initContextValue() {

    const socket = io('http://e73b2654.ngrok.io');
    socket.emit('join', {name: "User2"});
    const secondsLeft = 5;

    return {
        secondsLeft,

    }
}
