import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleReplaceClick = () => {
        console.log("replace was clicked" + text);
        let newText = text.replace("hate","love");
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    //text="new text"; wrong way
    //setText="new text"; right way

    return (
        <>
            <div className="container">

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
                <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>Replace</button>


            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
