import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {QuizContainer} from "./QuizContainer";

ReactDOM.render(<QuizContainer>
    <App />
</QuizContainer>, document.getElementById('root'));

