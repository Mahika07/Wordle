
import React, { useState } from "react";

export default function TextArea(props) {

  const [text, setText] = useState("");





  function checkLength() {
    if (text.length === 0) {
      { props.showAlert("Text Area Is Empty!", "secondary") }
    }
  }
  function handelText(e) {
    setText(e.target.value);

  }
  function handleUpClick() {
    checkLength()
    setText(text.toUpperCase());
  }
  function handleLoClick() {
    checkLength()
    setText(text.toLowerCase());
  }
  function handleClear() {
    checkLength()
    setText("");
  }
  function handleCopy() {
    checkLength()
    // var copyText = document.getElementById("exampleFormControlTextarea1");

    // copyText.select();

    // navigator.clipboard.writeText(copyText.value);
    navigator.clipboard.writeText(text);
  }

  function handleExtraSpace() {
    checkLength()
    let s = text.split(/[ ]+/);
    setText(s.join(" "));
  }
  function speak() {
    checkLength()
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  return (
    <>

      <div className="container" >
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label my-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}
            style={{ fontSize: 40 }}
          >
            TEXTAREA
          </label>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handelText}
            rows="8"
          ></textarea>

          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={handleUpClick}
          >
            Upper Case
          </button>
          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={handleLoClick}
          >
            Lower Case
          </button>
          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={handleExtraSpace}
          >
            Remove Spaces
          </button>
          <button
            type="button"
            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={speak}
          >
            Read Text
          </button>
        </div >
        <h3 className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text Summray</h3>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>

          {text.split(/\s+/).filter((element) => {
            return element.length !== 0
          }).length} : Words , {text.length} : Characters
        </p>
      </div >
    </>
  );
}
