//import { useImperativeHandle } from 'react';
// import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useEffect, useState } from "react";
//import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e2a38";
      document.body.style.color = "white";
      showAlert("Now you are in Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1e2a38";
      showAlert("Now you are in Light Mode", "success");
    }
  };
  useEffect(() => {
  document.body.classList.toggle("dark-mode", mode === "dark");
}, [mode]);

  
  return (
    <Router>
      <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-2">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                Heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
