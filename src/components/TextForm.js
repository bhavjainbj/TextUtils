import React, {useState} from 'react';



export default function TextForm(props) {

    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        
    }

    const handelUpClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText);
        
    }

    const handelClearClick = () => {
        
        let newText = '';
        setText(newText);
        
    }

    const handelTitleCase = () => {
        let newText = text.split(' ');
        let capitalText = [];
        newText.forEach(element =>{
            capitalText.push(element[0].toUpperCase() + element.slice(1, element.length));
        });
        setText(capitalText.join(' '));
        
    }    

    const handelCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();        
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied to clipboard!!","success");
    }

    const handleReverse = () => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        
    }

    const handelExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
    }



    
    const handelOnchange = (event) => {
        
        setText(event.target.value);
    }

    
    

    const [text, setText] = useState('');
    return (
        <>            
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handelOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>Convert to Lowercase</button>                
                <button className="btn btn-primary mx-1 my-1" onClick={handelTitleCase}>Convert to TitleCase</button>                
                <button className="btn btn-primary mx-1 my-1" onClick={handelExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy Text</button>
                
                

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.length>0 ? text.trim().split(" ").length : 0}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{(0.008 * (text.length>0 ? text.trim().split(" ").length : 0)).toFixed(4)}</b> Minutes to read the words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in text box above to preview it here"}</p>
            </div>
        </>
    );
}
