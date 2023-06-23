import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Add animation
const fadeIn = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

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

const Select = styled.select`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

const History = ({ history }) => (
  <div>
    <h2>History</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SpeechSynthesis = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const [history, setHistory] = useState([]); // New
  const [showHistory, setShowHistory] = useState(false); // New

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = voice;
    window.speechSynthesis.speak(speech);

    setHistory([text, ...history]); // New
  };

  const handleVoiceChange = (event) => {
    const selectedVoice = voices.find(
      (voice) => voice.name === event.target.value
    );
    setVoice(selectedVoice);
  };

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  return (
    <div>
      <TextArea value={text} onChange={handleChange} />
      <Select onChange={handleVoiceChange}>
        {voices.map((voice, i) => (
          <option key={i} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </Select>
      <Button onClick={handleSpeak}>Speak</Button>
      <Button onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </Button>
      {showHistory && <History history={history} />}
    </div>
  );
};

export default SpeechSynthesis;





