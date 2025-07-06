import React from "react";

export default function About(props) {
  const darkMode = props.mode === "dark";

  const myStyle = {
    backgroundColor: darkMode ? "#1e2a38" : "#f8f9fa",
    color: darkMode ? "white" : "#1e2a38",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: darkMode
      ? "0 0 10px rgba(255, 255, 255, 0.1)"
      : "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">About TextUtils</h2>
      <div style={myStyle}>
        <p>
          <strong>TextUtils</strong> is a powerful utility app for quick and
          easy text analysis. Whether you're a developer, student, writer, or
          content creator, this tool helps you:
        </p>
        <ul>
          <li>✔ Convert text to uppercase or lowercase</li>
          <li>✔ Remove extra spaces</li>
          <li>✔ Count words and characters</li>
          <li>✔ Copy cleaned or modified text to clipboard</li>
          <li>✔ Analyze reading time</li>
        </ul>
        <p>
          The app supports dark and light mode for better readability and user
          experience. Built with <strong>React.js</strong>, it's fast,
          responsive, and completely free to use.
        </p>
        <p>
          Version: <strong>1.0.0</strong> <br />
          Developer: <strong>Aditya Kushwaha</strong>
        </p>
      </div>
    </div>
  );
}
