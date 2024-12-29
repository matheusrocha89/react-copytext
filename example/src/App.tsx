import React, { useState } from "react";
import { CopyText } from "react-copytext";
import "./App.css";

function App() {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("Hello, world!");
  const onClick = () => setCopied(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setCopied(false);
  };

  return (
    <>
      <h1>CopyText example</h1>
      <label>Text to copy:</label>
      <input
        style={{ marginBottom: "16px", width: "100%", fontSize: "1.5rem" }}
        type="text"
        value={text}
        onChange={onChange}
      />
      <CopyText copied={copied} onClick={onClick} text={text} />
    </>
  );
}

export default App;
