import React, { useContext } from "react";
import "../scss/Registration.scss";
import { QuizContext } from "../QuizContext";

const Registration = ({quizStatus}) => {

  const {setRegisteredUser} = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegisteredUser(e.target.name.value);
  };

  return (
    <form className="form"
          onSubmit={handleSubmit}>
      <h2>Zaraz zaczynamy</h2>{quizStatus !== "scheduled" &&
    <div className="form__login-container">
      <div className="form__form-group">
        <label htmlFor="name-input"
               className="form__label">
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
    </div>}
    </form>
  );
};

export default Registration;
