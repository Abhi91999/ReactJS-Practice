import React, {useState} from 'react'


export default function TextForm(props) {
    const[text,setText] = useState('Enter the text here');
    const handleUpClick = () => {
        console.log("handleUp is cicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' my-2>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="14"></textarea>
        </div>
        <button className="btn btn-pimary" onClick={handleUpClick}> Convert to upper case</button>
    </div>
    <div className='conatiner' my-3>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>
    </>
  )
}
