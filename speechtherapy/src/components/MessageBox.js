import React from "react";

const MessageBox = ({ message }) => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "10px" }}>
        Hello!
      </div>
      <form>
        <input type="text" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default MessageBox;

