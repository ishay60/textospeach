import React from "react";
import styled, { keyframes } from "styled-components";
import SpeechSynthesis from "./SpeechSynthesis";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AppWrapper = styled.div`
  animation: ${fadeIn} 2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1em;
  background: papayawhip;
  font-family: Arial, sans-serif;

  h1 {
    color: #333;
    margin-bottom: 1em;
  }
`;

const App = () => (
  <AppWrapper>
    <h1>Text-To-Speech</h1>
    <SpeechSynthesis />
  </AppWrapper>
);

export default App;
