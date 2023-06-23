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
  // Add styles for the select dropdown here
`;

const SpeechSynthesis = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = voice;
    window.speechSynthesis.speak(speech);
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
    </div>
  );
};

export default SpeechSynthesis;
