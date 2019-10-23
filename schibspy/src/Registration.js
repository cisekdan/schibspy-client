import React from "react";
import "./registration.css";
import io from "socket.io-client";

const Registration = () => {

  return (
    <form className="form" onSubmit={()=>{
        const socket = io('http://d3dc8552.ngrok.io');
        socket.emit('join', {name: "Pawel"});}}>
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
