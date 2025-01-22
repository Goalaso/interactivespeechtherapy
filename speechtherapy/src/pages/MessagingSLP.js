import React, { useState } from "react";
import MessageBox from "../components/MessageBox";

const MessagingSLP = () => {

  return (
    <div className="messaging-container">
        <h1 className="page-title">Messages</h1>
        <MessageBox></MessageBox>
    </div>
  );
};

export default MessagingSLP;