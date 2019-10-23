import React from "react";
import "./registration.css";

const Registration = () => {

  return (
    <form className="form">
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
