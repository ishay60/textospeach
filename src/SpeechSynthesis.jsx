import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background-color: #007bff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 1em;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-radius: 3px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1em;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;

  h1 {
    color: #333;
    margin-bottom: 1em;
  }
`;

const SpeechSynthesis = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <TextArea value={text} onChange={handleChange} />
      <Button onClick={handleSpeak}>Speak</Button>
    </div>
  );
};

export default SpeechSynthesis;
