import React from "react";
import styled, { css } from "styled-components";
import SpeechSynthesis from "./SpeechSynthesis";

// Define a styled div for the app
const AppWrapper = styled.div`
  // Add your app styles here
`;

function App() {
  return (
    <AppWrapper>
      <h1>React Text to Speech</h1>
      <SpeechSynthesis />
    </AppWrapper>
  );
}

export default App;
