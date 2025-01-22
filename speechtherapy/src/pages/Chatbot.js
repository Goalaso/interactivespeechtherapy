import React, { useState } from "react";
import MessageBox from "../components/MessageBox";

const Chatbot = () => {

  return (
    <div className="chatbot-container">
        <h1 className="page-title">Chatbot</h1>
        <MessageBox className="chatbot-messagebox"></MessageBox>
    </div>
  );
};

export default Chatbot;