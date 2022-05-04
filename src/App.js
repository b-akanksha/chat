import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  console.log("pppp", process.env.REACT_APP_PROJECT_ID);
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName="john"
      userSecret="john"
    />
  );
}

export default App;
