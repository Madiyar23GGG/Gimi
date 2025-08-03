import React, { useState } from "react";
import axios from "axios";
import "./Api.css";

function Api() {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");

  function acs() {
    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
          contents: [{ parts: [{ text: userInput }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setAnswer(response.data.candidates?.[0]?.content?.parts?.[0]?.text);
        console.log(response.data);
      });
  }

  return (
    <div className="container">
      <p className="margin-left">{userInput}:Ваш запрос</p>
      <br />
      <br />
      <p className="text-white">Ответ: {answer}</p>

      <div className="margin-top">
        <input
          className="input-box"
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="send-button" onClick={acs}>
          <img
            className="send-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA..."
            alt="send"
          />
        </button>
      </div>
    </div>
  );
}

export default Api;
