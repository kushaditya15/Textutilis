import React, { useState } from "react";

export default function Textform(props) {
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleUpClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first!", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UPPERCASE", "success");
    }
  };

  const handleLowClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first!", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const handleClearClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Already cleared ", "warning");
    } else {
      setText("");
      props.showAlert("All cleared", "success");
    }
  };

  const handleExtraSpaces = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first! ", "warning");
    } else {
      let newText = text.split(/\s+/).join(" ");
      setText(newText);
      props.showAlert("All the extra spaces removed successfully", "success");
    }
  };

  const handleCopy = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first! ", "warning");
    } else {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    }
  };

  const handleSpeak = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first!", "warning");
    } else {
      props.showAlert("Speaking...", "success");
    }
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleStopSpeaking = () => {
    if (text.trim().length === 0) {
      props.showAlert("Am not speaking", "warning");
      return;
    } else {
      window.speechSynthesis.cancel();
      props.showAlert("🛑 Speaking stopped", "success");
    }
  };
  const handleRemoveSpecialChars = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first!", "warning");
      return;
    } else {
      const cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");
      setText(cleanedText);
      props.showAlert("Special characters removed!", "success");
    }
  };
  const handleRemoveNumbers = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first!", "warning");
      return;
    }

    const cleanedText = text.replace(/[0-9]/g, "");
    setText(cleanedText);
    props.showAlert("Numbers removed!", "success");
  };
  const handleFindReplace = () => {
    if (findText.trim().length === 0) {
      props.showAlert("Enter a word to find!", "warning");
      return;
    } else {
      const regex = new RegExp(findText, "g"); // global match
      const newText = text.replace(regex, replaceText);
      setText(newText);
      props.showAlert(
        `Replaced all '${findText}' with '${replaceText}'`,
        "success"
      );
    }
  };
  const handlePaste = async () => {
    try {
      const textFromClipboard = await navigator.clipboard.readText();

      const textarea = document.getElementById("mybox");
      textarea.focus(); // Focus needed on mobile

      setText((prevText) => prevText + textFromClipboard);
      props.showAlert("📋 Pasted from clipboard", "success");
    } catch (err) {
      props.showAlert("❌ Paste not supported or permission denied, Please try to Paste Manual", "danger");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4 text-center">
          🧠 Enter your text to{" "}
          <span style={{ color: "#0d6efd" }}>analyze</span>, edit & explore!
        </h1>
        <div>
          <button
            className="btn btn-outline-success btn-sm "
            onClick={handlePaste}
          >
            📋 Paste
          </button>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            spellCheck={true}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#263544" : "white",
              color: props.mode === "dark" ? "#f1f1f1" : "black",
            }}
            id="mybox"
            rows="10"
            placeholder="✍️ Enter your text here to analyze, convert or clean..."
          ></textarea>
        </div>
      </div>
      {/* 🔍 Find & Replace Section */}
      <div className="row g-2 my-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Find this word..."
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="✏️ Replace with..."
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-success wd-100"
            onClick={handleFindReplace}
          >
            🔁 Replace
          </button>
        </div>
      </div>

      {/* 🔘 Action Buttons Section */}
      <div className="d-flex flex-wrap justify-content-start gap-2">
        <button className="btn btn-outline-secondary " onClick={handleUpClick}>
          🔠 Convert to Uppercase
        </button>
        <button className="btn btn-outline-secondary " onClick={handleLowClick}>
          🔡 Convert to Lowercase
        </button>
        <button
          className="btn btn-outline-secondary "
          onClick={handleClearClick}
        >
          🧹 Clear Text
        </button>
        <button className="btn btn-outline-secondary " onClick={handleCopy}>
          📋 Copy Text
        </button>
        <button
          className="btn btn-outline-secondary "
          onClick={handleExtraSpaces}
        >
          🚫 Remove Extra Spaces
        </button>
        <button className="btn btn-outline-secondary " onClick={handleSpeak}>
          🔊 Speak Text
        </button>
        <button
          className="btn btn-danger mx-1 my-1"
          onClick={handleStopSpeaking}
        >
          🛑 Stop Speaking
        </button>
        <button
          className="btn btn-outline-secondary "
          onClick={handleRemoveSpecialChars}
        >
          ❌ Remove Special Characters
        </button>
        <button
          className="btn btn-outline-secondary "
          onClick={handleRemoveNumbers}
        >
          🔢 Remove Numbers
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>📊 Your Text Summary</h2>

        <p>
          🧾{" "}
          <strong>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
          </strong>{" "}
          Words | 📝 <strong>{text.length}</strong> Characters | 🔤{" "}
          <strong>{text.replace(/\s+/g, "").length}</strong> Non-space
          Characters
        </p>

        <p>
          ⏱️ Took{" "}
          <strong>
            {text.trim() === ""
              ? 0
              : (0.008 * text.trim().split(/\s+/).length).toFixed(2)}
          </strong>{" "}
          minutes to read
        </p>

        <p>
          📄 <strong>{text.split(/\n\s*\n/).filter(Boolean).length}</strong>{" "}
          Paragraphs | 📏{" "}
          <strong>
            {text.split("\n").filter((line) => line.trim() !== "").length}
          </strong>{" "}
          Lines
        </p>

        <h2>🔎 Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "🔍 Nothing to preview, write something in the textbox above"}
        </p>
      </div>
    </>
  );
}
