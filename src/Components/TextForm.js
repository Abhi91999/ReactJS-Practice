import React, {useState} from 'react'


export default function TextForm(props) {
    const[text,setText] = useState('');
    const[text1,setText1] = useState('');
    const handleUpClick = () => {
        console.log("handleUp is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success");
    }
    const handleLoClick = () => {
        console.log("handleUp is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success");
    }
    const handleClearClick = () => {
        console.log("handleUp is clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <>
    <div className='container' my-2>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light' ? 'white' : '#ede6f6'}} id="myBox" rows="14"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}> Remove Extra Spaces</button>
    </div>
    < div className='conatiner' my-3>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
        <p>{text1}</p>
        <textarea className="form-control" value={text1} onChange={handleOnChange} id="myBox" rows="14"></textarea>
        <button className="btn btn-pimary" onClick={handleUpClick}> Convert to upper case</button>
    </div>
    </>
  )
}
