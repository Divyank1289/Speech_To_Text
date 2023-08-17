import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

const App = () => {
  
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const refresh = () => window.location.reload(true)
  

  return (
    <div>
      <div className="container">
        <h2>Speech To Text Convertor</h2>
        <br />
        <p>An App that converts your speech into text.</p>
        <div className="main-content">{transcript}</div>
        <div className="btn-style">
          <button onClick={refresh}>Reset</button>
          <button onClick={startListening}>Start listening</button>
          <button onClick={stopListening}>Stop listening</button>
        </div>
      </div>
    </div>
  );
};

export default App;
