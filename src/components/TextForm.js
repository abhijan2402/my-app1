import React , {useState} from 'react'




export default function TextFrom(props) {
const handleUpClick=()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("converted to uppercase","success")
 
}

const handleLoClick=()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase","success")
 
}

// const handleBoldClick=()=>{
//   // console.log("Uppercase was clicked" + text);
//   let newText = <b>{text}</b>;
//   setText(newText);
 
// }

const handleOnChange=(event)=>{
  // console.log("On change");
  setText(event.target.value);
  
}

  const [text,setText]=useState(' ');
  // setText = ("new text");
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}} >

        <h1 >{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} rows="8" ></textarea>
             </div>
             <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Upper case</button>
             <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</button>
             {/* <button className="btn btn-primary mx-1" onClick={handleBoldClick}>convert to Bold case</button> */}
        
     
    </div>
    <div className='summary my-5 '  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in teh textbox to preview it here"}</p>
    </div>
    </>
  )
}
