import React from 'react';




export default function About(props) {

    const handleClick = () => {
        window.open("https://bhavjainbj.github.io/BhavyaJain/");
    }; 
    
    
    return (
        <>

            <div className='container my-3' style={{color: props.mode==='dark'? "white": "black"}}>
                <h1 className='my-3 text-center' >About the Application</h1>
                <div class="accordion-header" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
                                About TextUtils Application
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
                                <strong>TextUtils Application</strong> is an utility which can be used to manipulate the text in the way you want you just need to Enter the text in the given box then one can manipulate text just by clicking the buttons below the box. It has capablity of <code>Converting to UpperCase, Converting to LowerCase, Converting to TitleCase, Removeing Extra space, Reverseing text, Clear Text, Copy Text</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container text-center my-3' style={{color: props.mode==='dark'? "white": "black"}}>
                
                <h1 className='my-4 text-center'>About Me</h1>
                <p>Designed with Love <i className='fa fa-heart' style={{color: "red"}}></i> by <b>Bhavya Jain</b></p>
                <button class="btn btn-primary my-3" onClick={handleClick}>Personal Portfolio</button>
                
            </div>

        </>
    );
}


