import React, { useState, useEffect } from "react";

const MessageBox = ({ chatKey }) => {
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage if available for the specific chatKey
    const savedMessages = localStorage.getItem(`messages_${chatKey}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [inputValue, setInputValue] = useState(""); // Textbox value

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`messages_${chatKey}`, JSON.stringify(messages));
  }, [messages, chatKey]);

  // Function to handle sending messages
  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]); // Add message to the array
      setInputValue(""); // Clear the input box
    }
  };

  // Function to handle the Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {/* Message Display Area */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {message}
          </div>
        ))}
      </div>
<<<<<<< Updated upstream
      <form>
        <input type="text"></input>
        <input type="submit" value="Send"></input>
      </form>
    </>
=======

      {/* Input and Send Button */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
>>>>>>> Stashed changes
  );
};

export default MessageBox;
