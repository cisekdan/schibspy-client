import React, {useContext} from "react";
import "./registration.css";
import {QuizContext} from "./QuizContext";

const Registration = () => {

    const {socket, setUserRegistered} = useContext(QuizContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUserRegistered(e.target.name.value);
    };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="form__form-group">
      <label htmlFor="name-input" className="form__label">
        Podaj imię
      </label>
      <input id="name-input"
             className="form__input"
             type="text"
             name="name" />
      </div>
      <button className="form__submit"
              type="submit">Gramy!
      </button>
    </form>
  );
};

export default Registration;
