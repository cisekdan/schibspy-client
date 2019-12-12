import React, { useContext } from "react";
import "../scss/Registration.scss";
import { QuizContext } from "../QuizContext";

const Registration = () => {
  const {setRegisteredUser, registeredUser, player, generateNewAvatar, switchToFullScreen} = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisteredUser(e.target.name.value);
    //switchToFullScreen()

  };

  return (
    <div className="registration">
      <h2>Zaraz zaczynamy</h2>
      <img alt="player avatar" className={"registration__avatar"} src={player.avatarUrl} />
      {registeredUser ? <h3>{registeredUser}</h3> : <>
        <button className="registration__shuffle-button"
                onClick={generateNewAvatar}>Wylosuj nowy avatar
        </button>
        <Form handleSubmit={handleSubmit} /> </>}
    </div>
  );
};

export default Registration;

const Form = ({handleSubmit}) => {
  return (
    <form className="form"
          onSubmit={handleSubmit}>
      <div className="form__form-group">
        <label htmlFor="name-input"
               className="form__label">
          Podaj nazwę drużyny
        </label>
        <input id="name-input"
               className="form__input"
               type="text"
               name="name"
               maxLength={20}/>
      </div>
      <button className="form__submit"
              type="submit">Gramy!
      </button>
    </form>
  );
};
