import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const handleChange = (evt) => {
    let newText = evt.target.value;
    setText(newText);
    console.log(newText);
  };
  const handleClick = () => {
    let currText = text.toUpperCase();
    setText(currText);
    props.showAlert("Converted to uppercase!", "success");
  // };
  const handleClickl = () => {
    let currText = text.toLowerCase();
    setText(currText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myx");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const [text, setText] = useState("default");
  return (
    <>
      <div
        className="container"
        style={{
          // backgroundColor: props.mode === "dark" ? " #023020" : "white",
          color: props.mode === "dark" ? "white" : "#023020",
        }}
      >
        <div
          class="form-floating my-3"
          style={{
            // backgroundColor: props.mode === "dark" ? " #023020" : "white",
            color: props.mode === "dark" ? "white" : "#023020",
          }}
        >
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? " #023020" : "white",
              color: props.mode === "dark" ? "white" : "#023020",
            }}
            onChange={handleChange}
            value={text}
            className="form-control"
            // placeholder="Leave a comment here"
            id="myx"
          ></textarea>
        </div>
        <button
          style={{
            // backgroundColor: props.mode === "dark" ? " #023020" : "white",
            color: props.mode === "dark" ? "white" : "#023020",
          }}
          type="button"
          class="btn btn-success my-3"
          onClick={handleClick}
        >
          Convert To Capital
        </button>
        <button
          style={{
            // backgroundColor: props.mode === "dark" ? " #023020" : "white",
            color: props.mode === "dark" ? "white" : "#023020",
          }}
          type="button"
          class="btn btn-success my-3 mx-2"
          onClick={handleClickl}
        >
          Convert To Lowercase
        </button>
        <button
          style={{
            // backgroundColor: props.mode === "dark" ? " #023020" : "white",
            color: props.mode === "dark" ? "white" : "#023020",
          }}
          type="button"
          class="btn btn-success my-3 mx-2"
          onClick={handleCopy}
        >
          Copy text
        </button>
      </div>
      <div
        className="container"
        style={{
          // backgroundColor: props.mode === "dark" ? " #023020" : "white",
          color: props.mode === "dark" ? "white" : "#023020",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>No. of words {text.split(" ").length}</p>
        <p>No. of characters {text.length}</p>
        {/* <p>Time taken to read {0.8 * }</p> */}
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
