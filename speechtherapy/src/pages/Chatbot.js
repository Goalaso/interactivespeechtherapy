import React, { useState } from "react";
import MessageBox from "../components/MessageBox";

const Chatbot = () => {

  return (
    <div>
        <h1>Chatbot</h1>
        <MessageBox chatKey="chatbot"/>
    </div>
  );
};

export default Chatbot;