import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const clearText = () =>{
        setText('');
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>  
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-]3">
                <textarea className="form-control" placeholder='Enter text here' onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743' }} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Conver to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={clearText}>Delete</button>
        </div>
        <div className="container my-3"style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} character</p>
            <p>{text.split(" ").filter((element) => {return element.length!==0}).length * 0.008} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Nothing to preview"}</p>

        </div>
    </>
  )
}
