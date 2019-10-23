import React from "react";
import {QuizContext, initContextValue} from "./QuizContext";

export function QuizContainer({children}) {
    const quizContextValue = initContextValue();
    const ui =
        typeof children === "function" ? children(quizContextValue) : children;
    return (
        <QuizContext.Provider value={quizContextValue}>
            {ui}
        </QuizContext.Provider>
    );
}

QuizContainer.QuizContext = QuizContext;
